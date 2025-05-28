import React, { useState } from "react";

const teamMembers = [
  {
    id: 1,
    src: "/member1.jpg",
    alt: "Team member portrait 1",
    name: "Dr. Cheshta Khare",
    team: "Director Quanteraai. Pvt. Ltd.",
    linkedin: "https://www.linkedin.com/in/cheshta-jain-297a36291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const TeamMembersPage = () => {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center mb-2">
          <span className="text-[25px] font-sansation font-bold mb-4 bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent">
            — Our Director
          </span>
        </div>
      </div>

      <div className="flex justify-center">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative w-[280px] h-[350px] rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => handleToggle(member.id)}
          >

            <img
              src={member.src}
              alt={member.alt}
              className="w-[280px] h-[450px] object-cover object-top transition-transform duration-300 scale-100 group-hover:scale-105 rounded-lg"
            />


            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 transition-opacity duration-300
                ${activeId === member.id
                  ? "opacity-80 z-20"
                  : "opacity-0 group-hover:opacity-80"
                }
              `}
            >
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1363C6]/70 to-[#14183E]/70 backdrop-blur-sm z-0" />

              {/* Sharp Content */}
              <div className="relative z-10 flex flex-col justify-end items-center h-full text-white px-4 text-center pb-6">
                <p className="text-[25px] font-bold">
                  {member.name} <br />
                  <span className="text-[20px] font-normal">{member.team}</span>
                </p>
                <div className="flex items-center gap-2 mt-4 mb-2 font-medium">
                  <span>Follow Us</span>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#BEBEBE" }}
                    className="hover:scale-105 transition-transform duration-200"
                    onClick={(e) => e.stopPropagation()} // Prevent closing overlay on LinkedIn click
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.352783"
                        y="0.0166016"
                        width="39"
                        height="39"
                        rx="7"
                        fill="white"
                      />
                      <path
                        d="M32.3767 4.89162H7.41666C7.1376 4.89033 6.86105 4.94435 6.60299 5.05054C6.34492 5.15674 6.11045 5.31301 5.91312 5.51034C5.7158 5.70767 5.55952 5.94213 5.45333 6.2002C5.34713 6.45827 5.29312 6.73482 5.29441 7.01387V32.0194C5.29441 33.1504 6.23691 34.1416 7.41666 34.1416H32.2792C32.5584 34.1431 32.8351 34.0893 33.0933 33.9832C33.3516 33.8771 33.5863 33.7208 33.7838 33.5235C33.9813 33.3261 34.1377 33.0916 34.244 32.8334C34.3503 32.5753 34.4043 32.2986 34.403 32.0194V6.96675C34.4989 5.83575 33.5548 4.89162 32.3767 4.89162ZM13.928 29.7541H9.63641V15.836H13.9297L13.928 29.7541ZM11.7587 13.9022C11.4298 13.904 11.1039 13.8405 10.7998 13.7154C10.4957 13.5903 10.2194 13.4061 9.987 13.1735C9.75456 12.9409 9.57057 12.6645 9.44567 12.3603C9.32078 12.0561 9.25747 11.7302 9.25941 11.4014C9.25941 10.0347 10.3904 8.90212 11.7587 8.90212C13.1269 8.90212 14.2612 10.0347 14.2612 11.4014C14.2612 12.768 13.2212 13.9022 11.7587 13.9022ZM30.2057 29.7541H25.9124V23.0071C25.9124 21.4032 25.8653 19.281 23.6488 19.281C21.3835 19.281 21.0537 21.0734 21.0537 22.8657V29.7541H16.7604V15.836H20.9594V17.7697H21.0065C21.6192 16.6387 22.989 15.5061 25.1113 15.5061C29.4988 15.5061 30.2999 18.3369 30.2999 22.206V29.7541H30.2057Z"
                        fill="url(#paint0_linear_201_120)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_201_120"
                          x1="19.8521"
                          y1="4.8916"
                          x2="19.8521"
                          y2="34.1417"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1363C6" />
                          <stop offset="1" stopColor="#14183E" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembersPage;