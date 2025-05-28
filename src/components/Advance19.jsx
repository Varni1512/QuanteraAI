import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Advance19 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const courseModules = [
        {
            id: 1,
            title: 'Introduction to French Language & Basic Communication',
            weeks: 'Week 1-2',
            description: [
                'Introduction to French alphabets, pronunciation, and basic greetings',
                'Self-introduction and personal information',
                'Numbers, dates, and time expressions',
                'Review and practice',
                'Essential vocabulary – family, friends, and professions',
                'Asking questions and forming basic sentences',
                'Basic sentence structure and present tense conjugation',
                'Practical conversational practice',
                'Assessment – quiz and speaking test'
            ]
        },
        {
            id: 2,
            title: 'Grammar and Basic Conversations',
            weeks: 'Week 3-4',
            description: [
                'Nouns, articles, and gender',
                'Adjectives – describing people, places, and things',
                'Verb conjugation – present tense (regular verbs)',
                'Verb conjugation – irregular verbs (Être, Avoir, Aller)',
                'Common phrases and idiomatic expressions',
                'Forming questions and negations',
                'Listening and comprehension practice',
                'Role-playing common scenarios (shopping, ordering food)',
                'Mid-term assessment – written and oral test'
            ]
        },
        {
            id: 3,
            title: 'Building Conversational Fluency & Cultural Insights',
            weeks: 'Week 5-6',
            description: [
                'Talking about daily routines and hobbies',
                'Describing weather, seasons, and activities',
                'Expressing likes, dislikes, and preferences',
                'Cultural insights – French-speaking countries and traditions',
                'Making plans and asking for directions',
                'Writing short paragraphs and simple emails',
                'Role-playing – travel and accommodation',
                'Vocabulary expansion – transportation and navigation',
                'Project – creating a travel itinerary in French',
                'Revision and review',
                'Assessment – listening, reading, and speaking test'
            ]
        },
        {
            id: 4,
            title: 'Advanced Grammar, Complex Conversations & Certification Preparation',
            weeks: 'Week 7-8',
            description: [
                'Verb conjugation – past and future tenses',
                'Giving and following instructions',
                'Expressing opinions and preferences',
                'Debate and discussion – current events',
                'Reading and understanding short stories',
                'Writing a short story or personal experience',
                'Advanced vocabulary – work, study, and travel',
                'Review of key concepts and practice',
                'Mock test – comprehensive assessment (reading, writing, listening, speaking)',
                'Final assessment and certification distribution'
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
                        Certification in French Language: 60-Day Module
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

export default Advance19;
