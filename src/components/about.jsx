import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center w-full min-h-screen px-4 md:px-12 lg:px-24 py-8 -mt-12 ">

        {/* Robot Image (replaces SVG section) */}
        <div className="w-full md:w-2/4 flex justify-center md:justify-end pr-0 md:pr-12 py-12 md:py-0 -mt-12 mr-12 -ml-12 mb-3">
          <div className="relative w-full max-w-2xl scale-125 transform origin-center">
            <img
              src="/robot1.png" 
              alt="Robot with background"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left p-8">
          <div className="mb-4">
            <span className="text-[25px] font-sansation font-bold mb-4 bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent">
              — About Us
            </span>
          </div>

          <h1 className="text-[35px] md:text-4xl lg:text-5xl font-robotoslab font-bold text-black mb-6">
            About QuanteraAI Analytics Private Limited
          </h1>

          <p style={{ color: '#515151' }} className="text-[18px] md:text-lg font-robotoslab mb-8 max-w-lg">
            We are a forward-thinking organization passionate about democratizing access to technology,
            skills, and knowledge. With our roots in education, research, and development, we aim to empower
            students, educators, and institutions by embedding innovation into their learning journeys.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
