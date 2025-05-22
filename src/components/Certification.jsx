import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ContactPage from './ContactPage';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Certification = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // Runs only once when component mounts

    const cards = [
        {
            title: "CORPORATE TRAINING AND SOFT SKILL",
            description: "Corporate training encompasses structured programs aimed at improving employees' skills, knowledge, and competencies to align with organizational goals.",
            bgImage: "background1.jpg",
            link: "/Corporate",
        },
        {
            title: "TECHNO-MANAGEMENT COURSE",
            description: "The gap between engineering and management, equipping students with skills to manage technological innovations and lead technical teams effectively.",
            bgImage: "background2.jpg",
            link: "/communication",
        },
        {
            title: "EMERGING TECHNOLOGY CERTIFICATION",
            description: "Gain foundational knowledge in AI, blockchain, cloud computing, and IoT through a vendor-neutral certification.",
            bgImage: "background3.jpg",
            link: "/mentorship",
        },
        {
            title: "CERTIFICATION IN FOREIGN LANGUAGE",
            description: "Earning a language certification enhances your global communication skills and boosts career prospects across various industries.",
            bgImage: "background4.jpg",
            link: "/foreign",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="pt-8 px-4">
                <div className="max-w-7xl mx-auto py-8">
                    {/* Header */}
                    <div className="flex flex-col items-center mb-12">
                        <div className="relative w-64 h-56 mb-6">
                            <img
                                src="/hand1.png"
                                alt="Hand illustration"
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-auto object-contain z-10"
                            />
                        </div>
                        <span className="text-xl md:text-2xl font-sansation text-center bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent mb-4">
                            — Certification Course
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold font-robotoslab text-center">
                            A comprehensive course for those interested <br className="hidden md:block" /> in exploring the world
                        </h1>
                    </div>

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="text-white rounded-[15px] overflow-hidden flex flex-col justify-center items-center text-center p-6 pt-32 w-full md:w-[603px] md:h-[331px]"
                                style={{
                                    backgroundImage: `linear-gradient(to bottom right, rgba(10, 50, 99, 0.5), #1363C6), url('${card.bgImage}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >

                                <h2 className="font-sansation font-bold text-lg md:text-xl lg:text-2xl mb-2">{card.title}</h2>
                                <p className="font-robotoslab text-base md:text-lg text-white/80 mb-4">{card.description}</p>
                                <Link to={card.link} className="w-full flex justify-center">
                                    <button className="w-[280px] md:w-[520px] py-3 px-4 rounded-lg bg-white border border-white">
                                        <span className="bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent font-semibold text-lg block">
                                            Get Started
                                        </span>
                                    </button>
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ContactPage />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Certification;
