import React from "react";

const Footer = () => {
  return (
    <footer className="font-body py-8 px-6 md:px-16 bg-black text-center text-sm">
      <p>
        <a href="#hero" className="font-headerVariant text-accent">
          Meltdown,
        </a>{" "}
        a game made by Swinburne students.
      </p>
      <p>
        Part of a challenge in{" "}
        <a
          href="https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/galactic-games-fun-in-a-microgravity-environment/?tab=teams"
          className="font-header font-bold inline-block"
        >
          NASA Space Apps 2024.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
