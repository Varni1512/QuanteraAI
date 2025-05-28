import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Corporate = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();

    const courses = [
        {
            title: 'CERTIFICATION IN ADVANCED COMMUNICATION & STORYTELLING FOR LEADERS',
            path: '/advance',
        },
        {
            title: 'CERTIFICATION IN VIRTUAL TEAM MANAGEMENT & HYBRID WORK PRODUCTIVITY',
            path: '/virtual',
        },
        {
            title: 'CERTIFICATION IN BUSINESS ETIQUETTE & PERSONAL BRANDING FOR PROFESSIONALS',
            path: '/business',
        },
        {
            title: 'CERTIFICATION IN AI-ENHANCED PRODUCTIVITY & TIME MANAGEMENT',
            path: '/aienhanced',
        },
    ];

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 pt-32 pb-8 max-w-7xl">
                {/* Hero image section */}
                <div className="w-full mb-10 flex justify-center">
                    <img
                        src="/background1.jpg"
                        alt="Corporate training session with people collaborating"
                        className="rounded-[15px] shadow-md w-full max-w-[534px] h-auto object-cover"
                    />
                </div>

                {/* Title section */}
                <div className="text-center mb-10 px-2 md:px-0">
                    <span className="text-lg md:text-2xl font-sansation bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent mb-4 inline-block">
                        — CORPORATE TRAINING AND SOFT SKILL
                    </span>
                    <p
                        className="mx-auto max-w-4xl text-center font-robotoslab font-normal"
                        style={{
                            fontSize: 'clamp(18px, 2vw, 25px)',
                            lineHeight: '1.4',
                            color: 'rgba(28, 28, 28, 0.78)',
                        }}
                    >
                        Corporate training encompasses structured programs aimed at improving employees' skills, knowledge,
                        and competencies to align with organizational goals.
                    </p>
                </div>

                {/* Courses section */}
                <div className="mb-12 px-2 md:px-0">
                    <h2
                        className="mx-auto max-w-4xl text-center font-bold font-robotoslab"
                        style={{
                            fontSize: 'clamp(20px, 2vw, 25px)',
                            lineHeight: '1.4',
                            color: 'rgba(0, 0, 0, 1)',
                        }}
                    >
                        They are four different courses we provided :
                    </h2>

                    <div
                        className="flex flex-col items-center pt-12 gap-12 max-w-[1220px] mx-auto w-full"
                    >
                        {courses.map(({ title, path }, index) => (
                            <div
                                key={index}
                                className="rounded-lg p-6 md:p-8 shadow-sm transition-transform transition-shadow duration-300 ease-in-out w-full cursor-pointer bg-[#ECF7FF] hover:scale-105 hover:shadow-lg"
                                onClick={() => navigate(path)}
                            >
                                <h3
                                    className="text-center font-robotoslab"
                                    style={{
                                        color: '#000000',
                                        fontSize: 'clamp(18px, 1.5vw, 25px)',
                                    }}
                                >
                                    {title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Corporate;
