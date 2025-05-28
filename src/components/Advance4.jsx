import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Advance4 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const courseModules = [
        {
            id: 1,
            title: 'Introduction to AI and Business Applications',
            weeks: 'Week 1',
            description: [
                'Understanding AI and its evolution',
                'Key AI technologies and terminologies',
                'Case studies on AI in business'
            ]
        },
        {
            id: 2,
            title: 'Data Analysis and Business Intelligence',
            weeks: 'Week 2',
            description: [
                'Basics of Data Analysis',
                'Data Visualization Techniques',
                'Business Intelligence Tools'
            ]
        },
        {
            id: 3,
            title: 'Business Strategy Formulation Using AI',
            weeks: 'Week 3',
            description: [
                'AI in strategic planning',
                'Identifying AI opportunities',
                'Developing AI-based business models'
            ]
        },
        {
            id: 4,
            title: 'AI-Driven Decision-Making Models',
            weeks: 'Week 4',
            description: [
                'Predictive analytics in decision-making',
                'Machine Learning models for business',
                'Decision-making frameworks using AI'
            ]
        },
        {
            id: 5,
            title: 'Introduction to AI Tools and Technologies',
            weeks: 'Week 5',
            description: [
                'Overview of AI tools (Python, R, Tableau)',
                'AI development platforms',
                'Building simple AI models'
            ]
        },
        {
            id: 6,
            title: 'AI-Enabled Predictive Analytics',
            weeks: 'Week 6',
            description: [
                'Forecasting using AI',
                'Predictive Analytics Techniques',
                'Application in business scenarios'
            ]
        },
        {
            id: 7,
            title: 'AI in Risk Management and Mitigation',
            weeks: 'Week 7',
            description: [
                'Risk identification using AI',
                'Building risk mitigation frameworks',
                'Case studies on AI-driven risk management'
            ]
        },
        {
            id: 8,
            title: 'AI-Driven Business Case Studies',
            weeks: 'Week 8',
            description: [
                'Analysis of successful AI-driven businesses',
                'Challenges and solutions in AI implementation',
                'Future trends in AI business strategy'
            ]
        }
    ];


    return (
        <>
            <Navbar />
            <div className="pt-24 w-full px-4 lg:px-8 py-8 relative overflow-hidden">

                {/* Decorative Circles */}
                <div className="absolute top-9 left-12 w-48 h-48 sm:w-60 sm:h-60 bg-[#0B1C45] rounded-full z-0 border-4 border-[#1363C6] -translate-x-2/3 -translate-y-1/3" />
                <div className="absolute top-12 right-0 w-40 h-40 sm:w-52 sm:h-52 bg-[#1363C6] rounded-full z-0 border-4 border-white translate-x-1/2" />


                {/* Title Section */}
                <div className="text-center mb-6 relative z-10 pt-10">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-sansation font-bold bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent mb-4">
                        Certification in AI-Driven Business Strategy &amp; <br className="hidden sm:block" /> Decision Making
                    </h1>
                    <p
                        className="mx-auto px-4 text-center text-sm sm:text-base md:text-lg lg:text-[25px]"
                        style={{
                            fontFamily: 'Roboto Slab',
                            fontWeight: 400,
                            lineHeight: '1.5',
                            color: 'rgba(52, 52, 52, 0.78)',
                        }}
                    >
                        While specific details about this exact course are limited, several reputable institutions offer similar
                        programs focusing on advanced communication and storytelling for leadership.
                    </p>
                </div>

                {/* Description Heading with Lines */}
                <div className="flex items-center justify-center my-8">
                    <div className="h-[2px] bg-[#093060] flex-grow"></div>
                    <h2 className="mx-4 text-xl sm:text-2xl font-bold font-Roboto Slab">Description</h2>
                    <div className="h-[2px] bg-[#093060] flex-grow"></div>
                </div>

                {/* Course Modules List */}
                <div className="space-y-6 mb-8 relative z-10">
                    {courseModules.map((module) => (
                        <div key={module.id} className="relative group z-10">
                            <div
                                className="cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-sm px-4 sm:px-6 py-4 bg-[#F6FBFF] rounded-[15px]"
                                style={{ backgroundColor: 'rgba(19, 99, 198, 0.16)' }}
                            >
                                <div className="flex items-center mb-2 sm:mb-0">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#093060] text-white flex items-center justify-center text-sm sm:text-base mr-3">
                                        {module.id}
                                    </div>
                                    <span className="font-medium text-base sm:text-lg md:text-xl lg:text-[20px] font-Roboto Slab">
                                        {module.title}
                                    </span>
                                </div>
                                <span className="text-[#7B7B7B] text-sm sm:text-base md:text-lg lg:text-[20px] font-Roboto Slab">
                                    {module.weeks}
                                </span>
                            </div>

                            {/* Animated Description on Hover */}
                            <div className="max-h-0 overflow-hidden opacity-0 translate-y-2 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out bg-[#F9FBFF] mt-2 p-4 rounded-xl border border-[#B6D4F5]">
                                <ul className="list-disc ml-5 text-[#343434] font-Roboto Slab text-[15px] sm:text-base md:text-lg lg:text-[20px] space-y-2">
                                    {module.description.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}


                </div>

                {/* Contact Information */}
                <div className="mt-8 relative z-10">
                    <div
                        className="border border-[#14183E] rounded-lg px-4 sm:px-6 py-4 text-center w-full"
                        style={{
                            borderRadius: '15px',
                            backgroundColor: '#FFFFFF',
                        }}
                    >
                        <p className="text-[#14183E] text-sm sm:text-lg md:text-xl lg:text-[25px] font-Roboto Slab">
                            If you are interested, please contact: 9827295020 / 7470500248 or quanteraai@gmail.com / cheshtajain194@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Advance4;
