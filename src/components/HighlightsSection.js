import React from "react";

const HighlightsSection = () => {
  return (
    <section id="highlights" className="py-20 px-6 md:px-16 bg-secondary">
      <h2 className="font-header text-3xl md:text-4xl font-bold text-center mb-12">
        Mechanics highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-secondary p-6 rounded-lg">
          <img
            src="logo/dark_logo_idle_animated.gif"
            alt="feature 1"
            className="mb-4 rounded-lg"
          />
          <h3 className="font-headerVariant text-2xl mb-4">
            Microgravity exploration
          </h3>
          <p className="font-body">
            Explore the realistic effects of zero gravity in a calm, engaging
            gameplay experience.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg">
          <img
            src="logo/dark_logo_idle_animated.gif"
            alt="feature 2"
            className="mb-4 rounded-lg"
          />
          <h3 className="font-headerVariant text-2xl mb-4">
            Immersive space environment
          </h3>
          <p className="font-body">
            Designed to relieve stress and provide mental stimulation for long
            space missions.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg">
          <img
            src="logo/dark_logo_idle_animated.gif"
            alt="feature 3"
            className="mb-4 rounded-lg"
          />
          <h3 className="font-headerVariant text-2xl mb-4">Astronaut tested</h3>
          <p className="font-body">
            Specifically crafted for the unique conditions of extended space
            travel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
