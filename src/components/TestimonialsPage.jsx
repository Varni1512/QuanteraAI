import React, { useEffect, useState } from 'react';

const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const testimonials = [
  {
    id: 1,
    name: 'Rishab Arora',
    position: 'Businessman',
    rating: 5,
    text: 'Amazing experience working with you, awesome design and unbelievable customer service!! Highly recommend time4design!!'
  },
  {
    id: 2,
    name: 'Ankit Kapoor',
    position: 'Company Secretary',
    rating: 5,
    text: 'We recently completed a redesign of our existing website and could not be happier with the results. The cost was reasonable and we now have a clean and sleek website that we anticipate.'
  },
  {
    id: 3,
    name: 'Priya Mehta',
    position: 'Digital Marketer',
    rating: 4,
    text: 'Professional and friendly service. They understood our needs perfectly and delivered above expectations. Would love to collaborate again!'
  },
  {
    id: 4,
    name: 'Rahul Verma',
    position: 'Startup Founder',
    rating: 5,
    text: 'Extremely satisfied! The designs were clean, modern, and exactly what we envisioned for our platform.'
  }
];

const chunkArray = (arr, chunkSize) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    res.push(arr.slice(i, i + chunkSize));
  }
  return res;
};

const TestimonialsPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % chunks.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  const chunks = chunkArray(testimonials, isMobile ? 1 : 2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-[25px] font-bold bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent mb-2">
          — Testimonials
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold">What Say Our Clients!</h3>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className={`flex transition-transform duration-1000 ease-in-out`}
          style={{
            width: `${chunks.length * 100}%`,
            transform: `translateX(-${(100 / chunks.length) * slideIndex}%)`,
          }}
        >
          {chunks.map((group, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-4 w-full flex-shrink-0"
              style={{ width: `${100 / chunks.length}%` }}
            >
              {group.map((t) => (
                <TestimonialCard key={t.id} data={t} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ data }) => (
  <div
    className="flex flex-col items-center justify-center text-center mx-auto"
    style={{
      width: '100%',
      maxWidth: '530px',
      height: '414px',
      padding: '15px 10px',
      borderRadius: '25px',
      border: '1px solid #1363C6',
      backgroundColor: 'rgba(228, 230, 255, 0.22)',
      gap: '10px'
    }}
  >
    <h3 className="text-[25px] font-robotoslab font-bold text-[#1363C6]">{data.name}</h3>
    <p className="text-[20px] font-robotoslab text-[#666666]">{data.position}</p>
    <div className="mb-2">
      <StarRating rating={data.rating} />
    </div>
    <p className="text-[20px] font-robotoslab text-[#303030] px-4">{data.text}</p>
  </div>
);

export default TestimonialsPage;
