// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout.jsx";
import Home from "./pages/home.jsx";
import AboutUs from "./pages/about-us.jsx";
import Services from "./pages/services.jsx"
import Projects from "./pages/projects.jsx"
import Downloads from "./pages/downloads.jsx"
import Contact from "./pages/contact-us.jsx"

export default function App() {
  return (
    <Router>
      <Routes>
        {/* The Layout acts as a wrapper for all child routes nested inside it */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services"  element={<Services />} />
          <Route path="/Projects"  element={<Projects />} />
          <Route path="/Downloads"  element={<Downloads />} />
          <Route path="/Contact-Us"  element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}