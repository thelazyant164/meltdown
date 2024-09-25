import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen 
      bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
      from-primary from-30% via-accent via-35% to-secondary to-80% relative"
    >
      <div
        className="absolute inset-0 bg-cover bg-center
        bg-[url('/public/logo/transparent_logo_idle_animated.gif')]"
      />
      <div className="absolute inset-0 bg-secondary opacity-80 bg-cover" />
      <h1 className="font-header font-bold text-accent 
      text-5xl md:text-7xl mb-4 mx-6 z-0">
        Meltdown
      </h1>
      <p className="font-headerVariant text-xl md:text-2xl mb-8 mx-6 z-0">
        Experience how microgravity can be frenzy and fun!
      </p>
      <button
        className="font-body hover:font-bold bg-accent hover:bg-primary 
      text-primary hover:text-secondary py-3 px-6 rounded-lg z-0"
      >
        Play now
      </button>
    </section>
  );
};

export default HeroSection;
