import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HighlightsSection from "./components/HighlightsSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
