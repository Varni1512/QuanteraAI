import React,{ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Corporate3 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();

    const courses = [
        {
            title: 'Certification in Spanish Language: 60-Day Module',
            path: '/1.1.1',
        },
        {
            title: 'Certification in French Language: 60-Day Module',
            path: '/2.1.1',
        },
        {
            title: 'Certification in German Language: 60-Day Module',
            path: '/3.1.1',
        },
    ];

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 pt-32 pb-8 max-w-7xl">
                {/* Hero image section */}
                <div className="w-full mb-10 flex justify-center">
                    <img
                        src="/background4.jpg"
                        alt="Corporate training session with people collaborating"
                        className="rounded-[15px] shadow-md w-full max-w-[534px] h-auto object-cover"
                    />
                </div>

                {/* Title section */}
                <div className="text-center mb-12 px-2 md:px-0">
                    <span className="text-lg md:text-2xl font-sansation bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent mb-4 inline-block">
                        — CERTIFICATION IN FOREIGN LANGUAGE
                    </span>
                    <p
                        className="mx-auto max-w-4xl text-center font-robotoslab font-normal"
                        style={{
                            fontSize: 'clamp(18px, 2vw, 25px)',
                            lineHeight: '1.4',
                            color: 'rgba(28, 28, 28, 0.78)',
                        }}
                    >
                        Earning a language certification enhances your global communication skills and boosts career prospects across various industries.
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
                                className="rounded-lg p-6 md:p-8 shadow-sm transition-shadow w-full cursor-pointer bg-[#ECF7FF] hover:scale-105 hover:shadow-lg"
                                onClick={() => navigate(path)}
                            >
                                <h3
                                    className="text-center font-robotoslab"
                                    style={{
                                        color: '#000000',
                                        fontSize: 'clamp(18px, 1.5vw, 25px)', // Responsive font size
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

export default Corporate3;
