import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 text-center bg-secondaryVariant"
    >
      <h2 className="font-header text-3xl md:text-4xl font-bold mb-6">
        About the Game
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img
          src="logo/dark_logo_idle_animated.gif"
          alt="Game Demo"
          className="w-full md:w-1/2 rounded-lg mb-8 md:mb-0 md:mr-8"
        />
        <div className="md:w-1/2">
          <p className="font-body text-left text-lg md:text-xl">
            Our game simulates microgravity physics, designed with replayability
            for astronauts on long missions. Manipulate objects in a fast-paced,
            frenzy flurry of overwhelming stimuli, and stay on top of the doom
            timer for as long as you can!
          </p>
          <button
            className="font-body text-primary mt-6 bg-accent 
          hover:bg-primary hover:text-secondary hover:font-bold
          py-3 px-6 rounded-lg"
          >
            Read the Full Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
