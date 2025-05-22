import React, { useState } from 'react';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = () => {
        console.log('Subscribing with email:', email);
        // Here you would typically send the email to your backend
        setEmail('');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Left Section */}
                    <div className="p-8 md:w-4/5 flex flex-col justify-center">
                        <div className="flex items-center mb-2">
                            <span className="text-2xl lg:text-2xl font-bold mb-4 bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent">— Join Us</span>
                        </div>
                        <h2 className="text-[50px] font-bold font-robotoslab mb-3">Let's subscribe the<br /> newsletter</h2>
                        <p style={{ color: '#7E7E7E' }} className="text-[25px]  mb-6">
                            Join us in shaping a future where intelligence is the driving force behind every decision.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Enter Your Email"
                                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                            />
                            <button
                                onClick={handleSubscribe}
                                className="bg-gradient-to-r from-[#1363C6] to-[#14183E] text-white p-3 rounded-r-md hover:bg-blue-800 transition"
                            >
                                <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.8754 3.10549L32.9669 30.2865C32.5262 32.2007 31.3952 32.6319 29.7611 31.7677L20.8984 25.3446L16.5597 29.4204C16.1209 29.8534 15.6802 30.2865 14.674 30.2865L15.3663 21.3283L31.8983 6.56611C32.5886 5.88586 31.7092 5.63868 30.8297 6.19628L10.2748 18.9197L1.41015 16.2639C-0.537893 15.6469 -0.537893 14.3477 1.85085 13.4854L36.2975 0.327032C37.994 -0.167341 39.4409 0.698771 38.8754 3.10549Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Section - Background with space for robot image */}
                    <div className="md:w-1/2 relative min-h-[300px]">
                        <div className="absolute inset-0 rounded-r-lg overflow-hidden">
                            <img src="/image.png" alt="AI Robot" className="w-full h-full object-cover" />
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default NewsletterSection;