import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Advance3 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const courseModules = [
        {
            id: 1,
            title: 'Introduction to AI Tools for Productivity',
            weeks: 'Week 1-2',
            description: [
                'Overview of AI-based tools: Notion AI, Trello, RescueTime.',
                'Understanding task automation and scheduling.',
                'Identifying personal productivity goals.'
            ]
        },
        {
            id: 2,
            title: 'Workflow Optimization with AI',
            weeks: 'Week 3-4',
            description: [
                'Mapping daily routines and identifying bottlenecks.',
                'Implementing AI tools for task prioritization.',
                'Exercise: Create a personal workflow plan using AI tools.'
            ]
        },
        {
            id: 3,
            title: 'Time Management Techniques and Tools',
            weeks: 'Week 5-6',
            description: [
                'Time-blocking and Pomodoro techniques.',
                'Integrating AI scheduling assistants.',
                'Group activity: Design a time management plan.'
            ]
        },
        {
            id: 4,
            title: 'Habit Building for Productivity',
            weeks: 'Week 7-8',
            description: [
                'Establishing productive habits with AI support.',
                'Habit-tracking techniques and tools.',
                'Project: Develop a personalized AI-driven productivity plan.'
            ]
        },
        {
            id: 5,
            title: 'AI and Personal Productivity Strategy',
            weeks: 'Week 9-10',
            description: [
                'Implementing AI-driven habit-building strategies.',
                'Feedback on AI productivity plans.',
                'Adjustments and improvements.'
            ]
        },
        {
            id: 6,
            title: 'Final Presentation and Assessment',
            weeks: 'Week 11-12',
            description: [
                'Present AI productivity plan.',
                'Individual assessment and feedback.',
                'Course completion and reflections.'
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
                        CERTIFICATION IN AI-ENHANCED PRODUCTIVITY &amp; <br className="hidden sm:block" /> TIME MANAGEMENT
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

export default Advance3;
