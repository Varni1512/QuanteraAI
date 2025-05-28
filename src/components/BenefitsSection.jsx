import React from 'react';

const BenefitsSection = () => {
  return (
    <div id="benefits" className="w-full bg-white py-8 flex flex-col items-center">
      {/* Header section */}
      <div className="flex flex-col items-center mb-6 px-4 max-w-screen-xl w-full">
        <div className="flex items-center mb-2">
          <span className="text-[25px] font-sansation font-bold mb-4 bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent">— Key Benefits</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Why Partner With Us?</h2>
        <p className="text-gray-600 text-center max-w-2xl">
          Explore the key benefits of our services that make us a trusted choice:
        </p>
      </div>

      {/* Benefits grid */}
      <div className="w-full px-4">
        {/* First row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-10 max-w-screen-xl mx-auto justify-items-center">
          {[
            {
              src: "/1.png",
              alt: "Technology-Driven Solutions",
              label: "Technology-Driven Solutions",
              description: "We use the power of Artificial Intelligence, Big Data, and the Cloud to enable institutions and students to thrive in a digital age."
            },
            {
              src: "/2.png",
              alt: "Experiential Learning Approach",
              label: "Experiential Learning Approach",
              description: "All our courses are based on active learning, practical exposure, and real-world simulations—bridging theory and practice."
            },
            {
              src: "/3.png",
              alt: "Global Perspective",
              label: "Global Perspective",
              description: "Our Spanish language and cross-cultural programs prepare learners to be global citizens ready for international careers."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative w-full max-w-[425px] h-[240px] rounded-[10px] px-4 py-6 flex items-center justify-center border border-blue-600 overflow-hidden cursor-pointer md:w-[425px]"
            >
              {/* Image + Title - slide up & fade out */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-700 ease-in-out 
  group-hover:translate-y-[-150%] group-hover:opacity-0 group-hover:scale-90">

                <div className="w-16 h-16 mb-4 mx-auto">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl bg-gradient-to-r from-blue-600 to-indigo-900 bg-clip-text text-transparent font-medium">
                  {item.label}
                </h3>
              </div>


              {/* Description - fade in smoothly */}
              <p className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out text-[20px] text-gray-700 text-center z-10 px-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>



        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-3 mb-4 max-w-screen-xl mx-auto justify-items-center">
          {[
            {
              src: "/4.png",
              alt: "Industry Mentorship",
              label: "Industry Mentorship",
              description: "Internship programs and training workshops are supported by professionals who bring industry insights, network exposure, and guidance."
            },
            {
              src: "/5.png",
              alt: "Personalized Career Support",
              label: "Personalized Career Support",
              description: "Our counselling services help individuals discover their potential, set clear goals, and take confident steps toward success."
            },
            {
              src: "/6.png",
              alt: "Institutional Capacity Building",
              label: "Institutional Capacity Building",
              description: "Our counselling services help individuals discover their potential, set clear goals, and take confident steps toward success."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative w-full max-w-[425px] h-[240px] rounded-[10px] px-4 py-6 flex items-center justify-center border border-blue-600 overflow-hidden cursor-pointer md:w-[425px]"
            >
              {/* Image + Title - slide up & fade out */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0 ">
                <div className="w-16 h-16 mb-4 mx-auto">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl bg-gradient-to-r from-blue-600 to-indigo-900 bg-clip-text text-transparent font-medium">
                  {item.label}
                </h3>
              </div>

              {/* Description - fade in smoothly */}
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[20px] text-gray-700 text-center z-10 px-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Third row */}
        <div className="relative w-full mt-3 flex justify-center items-center">
          {/* Arrows */}
          <img
            src="/left.png"
            alt="Left Arrow"
            className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-[300px]"
          />
          <img
            src="/right.png"
            alt="Right Arrow"
            className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[300px]"
          />

          {/* Single Card */}
          <div className="group relative w-[425px] h-[240px] rounded-[10px] py-6 flex items-center justify-center border border-blue-600 overflow-hidden cursor-pointer px-4">
            {/* Image + Title - slide up & fade out */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
              <div className="w-16 h-16 mb-4 mx-auto">
                <img src="/7.png" alt="Recognized Certifications" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl bg-gradient-to-r from-blue-600 to-indigo-900 bg-clip-text text-transparent font-medium">
                Recognized Certifications
              </h3>
            </div>

            {/* Description - fade in smoothly */}
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[20px] text-gray-700 text-center z-10 px-4">
              Participants receive certifications that are valid across industries and add substantial value to their academic or professional profiles.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BenefitsSection;
