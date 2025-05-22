import React from 'react';

const MissionSection = () => {
  return (
    <div className="w-full bg-blue-50 px-12 pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-8 ">
      
      {/* Left: Heading & Icon */}
      <div className="flex flex-col items-center md:items-start md:w-1/3 ml-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1363C6] mb-4">
          Our Mission
        </h2>
        <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 ml-12">
          <img
            src="/gole.png"
            alt="Technology-Driven Solutions"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="md:w-3/5 px-2 sm:px-4 md:px-0">
        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-robotoslab leading-relaxed text-[#7E7E7E]">
          To bridge the gap between classroom learning and real-world applications.
          To foster curiosity, creativity, and critical thinking among learners. To
          deliver impactful training, mentorship, and educational tools that are
          inclusive and scalable.
        </p>
      </div>
    </div>
  );
};

export default MissionSection;
