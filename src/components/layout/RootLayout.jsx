// components/layout/RootLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      {/* ─── PERMANENT GLOBAL NAVBAR ─── */}
      <Navbar />

      {/* ─── DYNAMIC PAGE CONTENT ─── */}
      <main className="flex-grow">
        <Outlet /> 
      </main>

      {/* ─── PERMANENT GLOBAL FOOTER ─── */}
      <Footer />
    </div>
  );
}