import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Advance11 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const courseModules = [
        {
            id: 1,
            title: 'Introduction to AI-Powered Coding Assistants',
            weeks: 'Week 1-2',
            description: [
                'Overview of AI tools in software development',
                'Introduction to GitHub Copilot and ChatGPT',
                'Hands-on: Basic coding tasks using Copilot and ChatGPT'
            ]
        },
        {
            id: 2,
            title: 'Automated Testing and CI/CD Pipelines',
            weeks: 'Week 3-4',
            description: [
                'Understanding automated testing frameworks',
                'Setting up Selenium for web testing',
                'Building a basic CI/CD pipeline',
                'Hands-on: Implementing automated tests using Selenium'
            ]
        },
        {
            id: 3,
            title: 'AI-Powered Software Development',
            weeks: 'Week 5-6',
            description: [
                'Integrating AI in software development',
                'Best practices for AI-driven code generation',
                'Hands-on: Building an AI-driven application'
            ]
        },
        {
            id: 4,
            title: 'Advanced Testing and Deployment',
            weeks: 'Week 7-8',
            description: [
                'Automated testing for complex systems',
                'CI/CD pipeline optimization',
                'Hands-on: Deployment using Docker and Kubernetes'
            ]
        },
        {
            id: 5,
            title: 'Capstone Project',
            weeks: 'Week 9-10',
            description: [
                'Building a complete AI-driven application',
                'Automated testing and CI/CD integration',
                'Presentation and project report submission'
            ]
        }];


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
                        Certification in AI-Driven Software Development &amp; Automation
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
                            If you are interested, please contact: 9827295020/ 7470500248 or quanteraai@gmail.com/ cheshtajain194@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Advance11;
