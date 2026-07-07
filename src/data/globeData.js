export const globeConfig = {
    pointSize: 4,
    globeColor: "#0b1528", 
    polygonColor: "rgba(148, 163, 184, 0.94)",
    showAtmosphere: true,
    atmosphereColor: "#1d4ed8",
    atmosphereAltitude: 0.18,
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.6,
    ambientLight: "#3b82f6",
    directionalLeftLight: "#1e40af",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 2500,
    arcLength: 0.9,
    rings: 2,
    maxRings: 3,
  };
  
  export const sampleArcs = [
    // Your original arcs
    { order: 1, startLat: 6.9271, startLng: 79.8612, endLat: 1.3521, endLng: 103.8198, color: "#60a5fa", arcAlt: 0.15 }, // Colombo to Singapore
    { order: 2, startLat: 6.9271, startLng: 79.8612, endLat: 51.5074, endLng: -0.1278, color: "#3b82f6", arcAlt: 0.3 },  // Colombo to London
    { order: 3, startLat: 25.2744, startLng: 133.7751, endLat: 51.5074, endLng: -0.1278, color: "#3b82f6", arcAlt: 0.3 }, 
    
    // New additional arcs
    { order: 4, startLat: 40.7128, startLng: -74.0060, endLat: 51.5074, endLng: -0.1278, color: "#2563eb", arcAlt: 0.25 }, // New York to London
    { order: 5, startLat: 35.6895, startLng: 139.6917, endLat: 37.7749, endLng: -122.4194, color: "#93c5fd", arcAlt: 0.4 },  // Tokyo to San Francisco
    { order: 6, startLat: 25.2048, startLng: 55.2708, endLat: 19.0760, endLng: 72.8777, color: "#60a5fa", arcAlt: 0.1 },   // Dubai to Mumbai
    { order: 7, startLat: -33.8688, startLng: 151.2093, endLat: 34.0522, endLng: -118.2437, color: "#3b82f6", arcAlt: 0.45 },// Sydney to Los Angeles
    { order: 8, startLat: -23.5505, startLng: -46.6333, endLat: -33.9249, endLng: 18.4241, color: "#60a5fa", arcAlt: 0.35 }, // Sao Paulo to Cape Town
    { order: 9, startLat: 1.3521, startLng: 103.8198, endLat: 35.6895, endLng: 139.6917, color: "#2563eb", arcAlt: 0.2 },   // Singapore to Tokyo
    { order: 10, startLat: 48.8566, startLng: 2.3522, endLat: 40.7128, endLng: -74.0060, color: "#93c5fd", arcAlt: 0.25 },   // Paris to New York
    { order: 11, startLat: 50.1109, startLng: 8.6821, endLat: 1.29027, endLng: 103.851959, color: "#3b82f6", arcAlt: 0.35 }, // Frankfurt to Singapore
    { order: 12, startLat: 43.6510, startLng: -79.3470, endLat: 19.4326, endLng: -99.1332, color: "#60a5fa", arcAlt: 0.2 }   // Toronto to Mexico City
  ];