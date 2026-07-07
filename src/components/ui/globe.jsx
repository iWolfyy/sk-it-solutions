"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "../../data/globe.json";

extend({ ThreeGlobe: ThreeGlobe });

// Faster propagation for an "active threat" radar feel
const RING_PROPAGATION_SPEED = 12; 
const aspect = 1.2;
const cameraZ = 300;

export function Globe({
  globeConfig,
  data
}) {
  const globeRef = useRef(null);
  const groupRef = useRef();
  const [isInitialized, setIsInitialized] = useState(false);

  // MODERN NOC THEME DEFAULTS
  const defaultProps = {
    pointSize: 1.5,
    atmosphereColor: "#1e40af", // Deep network blue
    showAtmosphere: true,
    atmosphereAltitude: 0.15,
    polygonColor: "rgba(30, 64, 175, 0.4)", // Translucent blue countries
    globeColor: "#020617", // Slate/Void dark background
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.7,
    arcTime: 800, // Extremely fast to simulate rapid network packets
    arcLength: 0.4, // Shorter dashes
    rings: 3, // Multiple rings per impact
    maxRings: 4, 
    ...globeConfig,
  };

  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      (groupRef.current).add(globeRef.current);
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    const globeMaterial = globeRef.current.globeMaterial();
    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
    globeMaterial.shininess = defaultProps.shininess;
    
    // Optional: Turn this to `true` for a pure wireframe map look
    globeMaterial.wireframe = false; 
  }, [
    isInitialized,
    defaultProps.globeColor,
    defaultProps.emissive,
    defaultProps.emissiveIntensity,
    defaultProps.shininess,
  ]);

  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    let points = [];
    for (let i = 0; i < data.length; i++) {
      const arc = data[i];
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    const filteredPoints = points.filter((v, i, a) =>
      a.findIndex((v2) => ["lat", "lng"].every((k) => v2[k] === v[k])) === i
    );

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.3) // Tighter hex grid for a sharper, digital look
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    // Threat Vectors (Arcs)
    globeRef.current
      .arcsData(data)
      .arcStartLat((d) => d.startLat * 1)
      .arcStartLng((d) => d.startLng * 1)
      .arcEndLat((d) => d.endLat * 1)
      .arcEndLng((d) => d.endLng * 1)
      .arcColor((e) => e.color || "#ff003c") // Default to threat red if no color provided
      .arcAltitude((e) => e.arcAlt * 1 || 0.3)
      .arcStroke(0.6) // Thicker, more pronounced data streams
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((e) => e.order * 1)
      .arcDashGap(2) // Very tight gaps to look like rapid data flow
      .arcDashAnimateTime(() => defaultProps.arcTime);

    // Endpoints / Nodes
    globeRef.current
      .pointsData(filteredPoints)
      .pointColor((e) => e.color)
      .pointsMerge(true)
      .pointAltitude(0.01)
      .pointRadius(0.5);

    // Impact Rings Configuration
    globeRef.current
      .ringsData([])
      .ringColor((e) => e.color)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod((defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings);
  }, [
    isInitialized,
    data,
    defaultProps,
  ]);

  // Aggressive Radar/Impact Rings Animation
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    const interval = setInterval(() => {
      if (!globeRef.current) return;

      // Randomly select active attacks to pulse
      const activeThreats = genRandomNumbers(0, data.length, Math.floor((data.length * 3) / 5));

      const ringsData = data
        .filter((d, i) => activeThreats.includes(i))
        .map((d) => ({
          lat: d.endLat, // Rings focus on the TARGET/IMPACT zone, not the origin
          lng: d.endLng,
          color: d.color || "#ff003c", // Highlight impacts in red
        }));

      globeRef.current.ringsData(ringsData);
    }, 1500); // Pulse every 1.5 seconds

    return () => clearInterval(interval);
  }, [isInitialized, data]);

  return <group ref={groupRef} />;
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    // Pure transparent/black background
    gl.setClearColor(0x000000, 0); 
  }, [gl, size]);

  return null;
}

export function World(props) {
  const { globeConfig } = props;
  const scene = new Scene();
  
  // Sharp drop-off fog to keep the focus purely on the globe
  scene.fog = new Fog(0x000000, 250, 800); 

  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      
      {/* SHARP, DRAMATIC LIGHTING */}
      <ambientLight color="#ffffff" intensity={0.2} /> 
      
      {/* Cool blue rim light */}
      <directionalLight
        color="#3b82f6"
        position={new Vector3(-400, 100, 400)}
        intensity={2.0} 
      />
      
      {/* Harsh top light to define the globe's edge */}
      <directionalLight
        color="#ffffff"
        position={new Vector3(-200, 500, 200)}
        intensity={1.0} 
      />
      
      <Globe {...props} />
      
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={0.8} // Slow, deliberate rotation
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3} 
      />
    </Canvas>
  );
}

export function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min, max, count) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}