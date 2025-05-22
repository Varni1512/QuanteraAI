// HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <div id="home" className="bg-[#FBFDFF] min-h-screen px-6 md:px-20 py-10">
      <div className="text-center mt-40">
        <h2 className="text-[50px] font-sansation font-bold leading-[60px] mb-4">
          Quantera
          <span className="bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent">
            AI
          </span>{" "}
          – Unleashing the Power of
          <br />
          Intelligence in India
        </h2>

        <p
          className="font-robotoslab font-normal text-[25px] leading-[35px] max-w-xl mx-auto mb-8"
          style={{ color: "#515151" }}
        >
          QuanteraAI is not just a technology company; we are a catalyst for
          transformation, helping businesses thrive in the digital age.
        </p>

        <div className="flex justify-center gap-10">
          <button
            className="mt-6 w-[250px] h-[70px] border-[2px] px-6 py-3 border-2 border-blue-600 bg-gradient-to-r from-[#1363C6] to-[#14183E] text-white font-semibold rounded transition duration-300 hover:bg-white hover:from-transparent hover:to-transparent hover:text-transparent hover:bg-clip-text hover:[background-image:linear-gradient(to_right,#1363C6,#14183E)]"
            onClick={() => {
              const benefitsSection = document.getElementById("benefits");
              if (benefitsSection) {
                benefitsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Read More
          </button>
          <button
            className="mt-6 w-[250px] h-[70px] border-[2px] px-6 py-3 border-blue-600 bg-gradient-to-r from-[#1363C6] to-[#14183E] text-white font-semibold rounded transition duration-300 hover:bg-white hover:from-transparent hover:to-transparent hover:text-transparent hover:bg-clip-text hover:[background-image:linear-gradient(to_right,#1363C6,#14183E)]"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact Us
          </button>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
