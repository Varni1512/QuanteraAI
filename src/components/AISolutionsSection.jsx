import React from 'react';
import { useNavigate } from 'react-router-dom';

const AISolutionsSection = () => {
    const navigate = useNavigate();

    const handleViewAll = () => {
        navigate('/services');
    };

    const services = [
        {
            img: "/AI1.png",
            title: "Artificial Intelligence (AI)-Based Services",
            desc: "AI Application Development: Design and deployment of AI-powered applications in education, health, and business.",
        },
        {
            img: "/AI2.png",
            title: "Open Data Centers in Educational Institutions",
            desc: "Establishment of Data Labs: Creation of real-time open data centers for research and innovation.",
        },
        {
            img: "/AI3.png",
            title: "Internship Programs",
            desc: "Project-Based Internships: Live projects in AI, marketing, HR, finance, and operations. Remote and On-Site Options: Flexible engagement modes.",
        },
        {
            img: "/AI4.png",
            title: "Emerging Technology Training Programs",
            desc: "Live coding labs, project-based assessments, and industry certifications included.",
        },
    ];

    return (
        <div className="w-full bg-white py-8 px-4 relative overflow-hidden">
            {/* Robot hand image */}
            <div className="absolute right-0 top-20 w-[300px] z-10 hidden md:flex mt-20 flex-col items-center gap-4 pointer-events-auto">
                <img
                    src="/robothand.png"
                    alt="Robot Hand"
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto relative z-20">
                {/* Heading */}
                <div className="flex flex-col items-center mb-6">
                    <span className="text-[25px] font-sansation font-bold mb-4 bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent">
                        — Our Services
                    </span>

                    <h2 style={{ color: '#000000' }} className="text-[50px] font-robotoslab font-bold md:text-4xl text-center mb-4">
                        Our Excellent AI Solutions
                    </h2>
                    <p style={{ color: '#515151' }} className="text-[20px] font-robotoslab text-center max-w-5xl mb-6">
                        At QuanteraAI Analytics Private Limited, we are pioneers in the realm of Artificial Intelligence, Machine Learning, and Data
                        Science. Harnessing cutting-edge technologies, we empower businesses to transform data into actionable insights, driving
                        innovation and growth. Explore the possibilities with QuanteraAI and embark on a journey towards a smarter, data-driven future.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-full md:max-w-5xl mx-auto mb-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative rounded-[25px] h-[358px] p-6 flex flex-col items-center justify-center text-center border-2 border-[#1363C6] shadow-md hover:bg-gradient-to-r from-[#1363C6] to-[#14183E] transition duration-300 w-full max-w-[361px] mx-auto"
                        >
                            <div className="w-16 h-16 mb-4">
                                <img
                                    src={service.img}
                                    alt="Service Icon"
                                    className="w-full h-full object-contain transition duration-300 group-hover:brightness-0 group-hover:invert"
                                />
                            </div>
                            <div className="absolute top-5 right-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center z-10">
                                <img
                                    src="/circle.png"
                                    alt="Dot"
                                    className="w-full h-full object-contain"
                                />
                                <img
                                    src="/circlewhite.png"
                                    alt="White Dot"
                                    className="w-full h-full object-contain absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                />
                            </div>

                            <h3 className="text-[25px] font-medium mb-2 bg-gradient-to-r from-blue-600 to-indigo-900 bg-clip-text text-transparent group-hover:text-white group-hover:bg-none transition duration-300">
                                {service.title}
                            </h3>
                            <p className="text-[20px] text-gray-600 group-hover:text-white transition duration-300">{service.desc}</p>
                        </div>
                    ))}
                </div>

                {/* View All Button (Always at Bottom) */}
                <div className="flex justify-center">
                    <button
                        onClick={handleViewAll}
                        className="cursor-pointer px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded bg-white hover:bg-gradient-to-r from-[#1363C6] to-[#14183E] hover:text-white transition duration-300 hover:scale-105"
                    >
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AISolutionsSection;
