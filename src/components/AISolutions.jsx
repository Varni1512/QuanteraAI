import React, { useEffect } from 'react';
import Navbar from './Navbar';
import TestimonialsPage from './TestimonialsPage';
import ContactPage from './ContactPage';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
const AISolutions = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Slight delay to ensure element is rendered
    }
  }, [location]);


  const solutions = [
    {
      title: 'Artificial Intelligence (AI) General Services',
      des: 'We offer end-to-end AI solutions that drive innovation and efficiency across sectors:',
      icon: "/cbi.png",
      points: [
        'AI Application Development: Design and deployment of AI-powered applications in education, health, and business.',
        'AI Consultation: Strategy, integration, and performance enhancement through AI tools.',
        'Machine Learning Models: Tailored machine learning solutions for prediction, automation, and decision-making.',
        'EAI in Education: Personalized learning systems, grading automation, and virtual AI mentors.'
      ]
    },
    {
      title: 'Open-Data Creation for Education and Innovations',
      des: 'We help institutions build their data ecosystems:',
      icon: "/tdesign.png",
      points: [
        'Establishment of Data Labs: Creation of real-time open data centers for research and innovation.',
        'Data Sharing Platforms: Enabling access to structured datasets for students and researchers.',
        'Infrastructure & Tools: Providing necessary software, cloud platforms, and training to manage data effectively.',
        'Collaborative Research: Promoting inter-departmental and cross-institutional data research projects.'
      ]
    },
    {
      title: 'Emerging Learning & Training Programs',
      des: 'Upskilling for the next generation workforce through hands-on training:',
      icon: "/healthicons.png",
      points: [
        'AI, Machine Learning & Data Science',
        'Internet of Things (IoT)',
        'Blockchain & Cybersecurity',
        'Cloud Computing (AWS, Azure, GCP)',
        'AR/VR and Robotics',
        'Live coding labs, project-based assessments, and industry certifications included.'
      ]
    },
    {
      title: 'Spanish Language Program for Students',
      des: 'Unlock global opportunities with language proficiency:',
      icon: "/material.png",
      points: [
        'Beginner to Intermediate Levels (CEFR A1 to B1)',
        'Interactive Lessons: Visual, audio, and gamified content.',
        'Conversational Practice: Real-life scenarios and speaking clubs.',
        'Cultural Modules: Understanding Spanish-speaking cultures and customs.',
        'Assessment & Certification: Regular evaluations, progress reports, and recognized credentials.'
      ]
    },
    {
      title: ' Internship Programs',
      des: 'Industry-experience meets academic learning:',
      icon: "/hugeicons.png",
      points: [
        'Project-Based Internships: Live projects in AI, marketing, HR, finance, and operations.',
        'Remote and On-Site Options: Flexible engagement modes.',
        'Mentorship: Guidance from domain experts and professionals.',
        'Skill-Building Workshops: Resume writing, communication skills, and portfolio building.'
      ]
    },
    {
      title: 'Career Counseling Services',
      des: 'Helping students find clarity and confidence in their career journey:',
      icon: "/fluent.png",
      points: [
        'Aptitude and Personality Assessments: Scientific tools to identify strengths and interests.',
        'Career Mapping: Step-by-step planning from school to college and beyond.',
        'Workshops: CV/resume preparation, group discussions, personal interviews, and exam readiness.',
        'Parent-Student Joint Sessions: Alignment between career goals and family expectations.'
      ]
    }
  ];

  return (
    <>
      <Navbar />

      <main className='bg-white w-full pt-16 md:pt-24 lg:pt-32 xl:pt-48 overflow-x-hidden'>
        <div className='flex flex-col items-center px-4 md:px-8 lg:px-16 mb-10 relative'>
          <div className='absolute -top-16 left-0 hidden md:block'>
            <img src="/hand.png" alt="Robot Hand" className="w-32 md:w-48 lg:w-64 h-auto object-contain relative z-10" />
          </div>

          <div className='flex flex-col items-center w-full max-w-7xl'>
            <div className='flex flex-col items-center mb-4'>
              <div className='flex items-center mb-2'>
                <span className="text-lg md:text-xl lg:text-2xl font-sansation font-bold mb-2 md:mb-4 bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent">— Our Services</span>
              </div>
              <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-robotoslab text-black font-semibold text-center mb-4'>
                Our Excellent AI Solutions
              </h2>
            </div>
            <p className='text-base md:text-lg lg:text-xl xl:text-2xl font-roboto-slab text-center text-[#515151] max-w-7xl mb-8'>
              At QuanteraAI Analytics Private Limited, we are pioneers in the realm of Artificial Intelligence, Machine Learning, and Data Science. Harnessing cutting-edge technologies, we empower businesses to transform data into actionable insights, driving innovation and growth. Explore the possibilities with QuanteraAI and embark on a journey towards a smarter, data-driven future.
            </p>
          </div>
        </div>

        <div className='px-4 md:px-8 lg:px-16 flex flex-col gap-8 mb-16'>
          {solutions.map((solution, index) => (
            <div
              key={index}
              id={solution.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className="w-full max-w-7xl mx-auto mb-6 rounded-xl md:rounded-2xl lg:rounded-3xl p-[2px] bg-gradient-to-r from-[#1363C6] to-[#14183E]"
            >
              <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl border border-transparent shadow-sm p-4 md:p-6 lg:p-8 h-full">
                <div className="flex flex-col mb-4">
                  <div className="flex flex-col items-center mb-4 mt-6 md:mt-10 lg:mt-14">
                    <img src={solution.icon} alt="AI Icon" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2" />
                    <h3 className="text-lg md:text-xl lg:text-2xl font-roboto-slab font-bold bg-gradient-to-r from-[#1363C6] to-[#14183E] text-transparent bg-clip-text text-center mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-[#515151] font-roboto-slab text-center mt-2 md:mt-4 text-sm md:text-base lg:text-lg mb-4">{solution.des}</p>
                  </div>
                  <ul className="space-y-2 md:space-y-3 text-[#040404] ml-4 md:ml-8 lg:ml-16 mt-2">
                    {solution.points.map((point, i) => (
                      <li key={i} className="flex items-start font-Roboto-Slab">
                        <span className="mr-2 text-blue-500 flex-shrink-0">✦</span>
                        <span className="font-medium text-[#040404] font-roboto-slab text-sm md:text-base lg:text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Additional Sections */}
      <TestimonialsPage />
      <ContactPage />
      <Newsletter />
      <Footer />
    </>
  );
};

export default AISolutions;
