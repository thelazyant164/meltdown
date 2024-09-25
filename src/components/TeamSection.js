import React from "react";
import { FaLinkedin, FaGithub, FaItchIo, FaGlobe } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

const TeamSection = () => {
  const members = [
    {
      name: "Thien An Ly",
      role: "Programmer",
      normal: "profile/normal/Aly.jpg",
      silhouette: "profile/silhouette/Aly-silhouette.png",
      socials: {
        LinkedIn: "https://linkedin.com/in/thien-an-ly",
        GitHub: "https://github.com/thelazyant164",
        Website: "https://thelazyant164.github.io",
      },
    },
    {
      name: "Eric Tao",
      role: "Artist",
      normal: "profile/normal/Eric.jpg",
      silhouette: "profile/silhouette/Eric-silhouette.png",
      socials: {
        LinkedIn: "https://linkedin.com/in/eric-tao-44250128a",
        Outlook: "mailto:haoxuantao@outlook.com",
        Website: "https://2623665495ta.wixsite.com/haoxuantaoet",
      },
    },
    {
      name: "Cormac Dorrat",
      role: "Programmer",
      normal: "profile/normal/Cormac.jpg",
      silhouette: "profile/silhouette/Cormac-silhouette.png",
      socials: {
        LinkedIn: "https://linkedin.com/in/cormac-dorrat-dev",
        ItchIo: "https://cormacdev.itch.io",
        Website: "https://cormacdorrat.com",
      },
    },
  ];
  return (
    <section
      id="team"
      className="py-20 px-6 md:px-16 bg-secondaryVariant text-center "
    >
      <h2 className="font-header text-3xl md:text-4xl font-bold mb-6">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {members.map((member) => (
          <div
            id={`${member.name} profile`}
            className="bg-secondaryVariant p-6 rounded-lg group"
          >
            <div className="rounded-full mb-4 aspect-square overflow-hidden relative">
              <img
                src={member.silhouette}
                alt={`${member.name} headshot`}
                className="absolute h-full object-cover 
                transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={member.normal}
                alt={`${member.name} colored headshot`}
                className="absolute h-full object-cover 
                transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
            <h3 className="font-headerVariant text-xl font-bold">
              {member.name}
            </h3>
            <p className="font-body">{member.role}</p>
            <div
              className="flex justify-center space-x-4 mt-4 
            text-2xl text-accent transition-colors duration-200"
            >
              {member.socials.LinkedIn && (
                <a
                  href={member.socials.LinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <FaLinkedin className="hover:text-primary" />
                </a>
              )}
              {member.socials.GitHub && (
                <a
                  href={member.socials.GitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} GitHub`}
                >
                  <FaGithub className="hover:text-primary" />
                </a>
              )}
              {member.socials.ItchIo && (
                <a
                  href={member.socials.ItchIo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} ItchIo`}
                >
                  <FaItchIo className="hover:text-primary" />
                </a>
              )}
              {member.socials.Outlook && (
                <a
                  href={member.socials.Outlook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} Outlook`}
                >
                  <PiMicrosoftOutlookLogoFill className="hover:text-primary" />
                </a>
              )}
              {member.socials.Website && (
                <a
                  href={member.socials.Website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                >
                  <FaGlobe className="hover:text-primary" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
