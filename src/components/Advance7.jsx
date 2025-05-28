import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Advance7 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const courseModules = [
        {
            id: 1,
            title: 'Introduction to Metaverse and Web 3.0',
            weeks: 'Week 1',
            description: [
                'Defining Metaverse',
                'Web 3.0 Technologies',
                'Key Platforms and Applications'
            ]
        },
        {
            id: 2,
            title: 'Blockchain and NFTs',
            weeks: 'Week 2',
            description: [
                'Blockchain Fundamentals',
                'Creating and Managing NFTs',
                'Smart Contracts in Business'
            ]
        },
        {
            id: 3,
            title: 'Business Models in Virtual Environments',
            weeks: 'Week 3',
            description: [
                'Revenue Streams in Metaverse',
                'Virtual Real Estate and Assets',
                'Brand Integration in Virtual Worlds'
            ]
        },
        {
            id: 4,
            title: 'Social Media and Digital Presence',
            weeks: 'Week 4',
            description: [
                'Building a Digital Identity',
                'Marketing in the Metaverse',
                'Community Building'
            ]
        },
        {
            id: 5,
            title: 'NFT-Based Revenue Models',
            weeks: 'Week 5',
            description: [
                'NFT Marketplace Overview',
                'Strategies for NFT Monetization',
                'Real-world NFT Case Studies'
            ]
        },
        {
            id: 6,
            title: 'Metaverse Marketing and Branding',
            weeks: 'Week 6',
            description: [
                'Creating Virtual Experiences',
                'Influencer Marketing in Metaverse',
                'User Engagement Strategies'
            ]
        },
        {
            id: 7,
            title: 'Risk and Ethical Considerations',
            weeks: 'Week 7',
            description: [
                'Privacy and Security in Virtual Worlds',
                'Managing Digital Assets',
                'Ethical Concerns and Best Practices'
            ]
        },
        {
            id: 8,
            title: 'Future Trends and Business Case Studies',
            weeks: 'Week 8',
            description: [
                'Analysis of Successful Metaverse Projects',
                'Metaverse Business Models',
                'Future of Web 3.0'
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
                        Certification in Metaverse &amp; <br className="hidden sm:block" /> Web 3.0 Business Strategy
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

export default Advance7;
