import React, { useEffect, useRef, useState } from 'react';

const StarRating = ({ rating }) => {
  return (
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
};

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
  }
];

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto-scroll effect only on mobile (width < 768px)
  useEffect(() => {
    if (window.innerWidth < 768) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, []);

  // Scroll slider horizontally based on currentIndex (only on mobile)
  useEffect(() => {
    if (sliderRef.current && window.innerWidth < 768) {
      const width = sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({
        left: currentIndex * width,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center mb-2">
          <span className="text-[25px] font-sansation font-bold mb-4 bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent">
            — Testimonials
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">What Say Our Clients!</h2>
      </div>

      {/* Desktop & tablet view (2-column grid) */}
      <div className="hidden md:grid grid-cols-2 gap-4 justify-items-center">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col items-center justify-center text-center"
            style={{
              width: '530px',
              height: '414px',
              padding: '15px 10px',
              borderRadius: '25px',
              border: '1px solid #1363C6',
              backgroundColor: 'rgba(228, 230, 255, 0.22)',
              gap: '10px',
            }}
          >
            <h3 style={{ color: '#1363C6' }} className="text-[25px] font-robotoslab font-bold">
              {testimonial.name}
            </h3>
            <p style={{ color: '#666666' }} className="text-[20px] font-robotoslab mb-2">
              {testimonial.position}
            </p>
            <div className="mb-2">
              <StarRating rating={testimonial.rating} />
            </div>
            <p style={{ color: '#303030' }} className="text-[20px] font-robotoslab px-4">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile view: horizontal scroll with auto scroll effect */}
      <div
        ref={sliderRef}
        className="md:hidden flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ gap: '20px' }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 snap-center flex flex-col items-center justify-center text-center"
            style={{
              width: '90vw',
              maxWidth: '530px',
              height: '414px',
              padding: '15px 15px', // equal padding left and right
              borderRadius: '25px',
              border: '1px solid #1363C6',
              backgroundColor: 'rgba(228, 230, 255, 0.22)',
              gap: '10px',
              scrollSnapAlign: 'center',
            }}
          >
            <h3 style={{ color: '#1363C6' }} className="text-[25px] font-robotoslab font-bold">
              {testimonial.name}
            </h3>
            <p style={{ color: '#666666' }} className="text-[20px] font-robotoslab mb-2">
              {testimonial.position}
            </p>
            <div className="mb-2">
              <StarRating rating={testimonial.rating} />
            </div>
            <p style={{ color: '#303030' }} className="text-[20px] font-robotoslab px-4">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
