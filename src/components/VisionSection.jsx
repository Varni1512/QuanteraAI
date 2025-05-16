import React from 'react';

const VisionSection = () => {
  return (
    <div className="w-full bg-[#093060] text-white px-12 pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0 md:space-x-8">
      
      {/* Left: Vision Text */}
      <div className="md:w-2/3 px-2 sm:px-4 md:px-12 ml-5">
        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed text-[#B4B4B4] font-robotoslab">
          Our vision is to transform traditional education models with AI-driven
          services, accessible open data, and next-generation learning programs. We
          believe in holistic development—from technical skill-building and language
          learning to personal mentorship and career growth. By creating a future-
          ready, global-minded generation, we contribute meaningfully to national
          and global development.
        </p>
      </div>

      {/* Right: Eye Image above Heading */}
      <div className="md:w-1/3 flex flex-col items-center px-2 sm:px-4 md:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Our Vision
        </h2>
        <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4">
          <img
            src="/eye.png"
            alt="Technology-Driven Solutions"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
