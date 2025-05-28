import { useState, useEffect } from 'react';
import { Users, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const WhyChooseUsPage = () => {
  return (
    <div className="bg-blue-50 w-full py-10 px-4 flex flex-col items-center">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center mb-2">
          <span className="text-[25px] font-sansation font-bold mb-4 bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent">— Why Choose Us</span>
        </div>
        <h1 style={{ color: '#000000' }} className="text-[50px] font-robotoslab md:text-4xl font-bold  mb-4">
          We're Best in AI Industry with 5 Years of Experience
        </h1>
        <p style={{ color: '#515151' }} className="text-[20px] font-robotoslab">
          Data Analysis and AI Based Training and Short Term Courses
        </p>
      </div>

      {/* Services Section */}
      <div className="w-full max-w-lg space-y-3 mb-10">
        <ServiceButton text="Data Consistency" />
        <ServiceButton text="Personalized Customer Services" />
        <ServiceButton text="Business Intelligence and Reporting" />
        <ServiceButton text="Web and Mobile Development" />
      </div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row gap-16 w-90 max-w-lg">
        <StatCard
          icon={
            <svg
              width="32"
              height="32"
              viewBox="0 0 60 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.4915 40.3279C49.1598 37.2203 45.8316 34.9943 42.0554 34.0166L41.9377 33.9914L39.2169 38.5519C39.2151 39.1591 38.9714 39.7409 38.539 40.1703C38.1066 40.5997 37.5207 40.8417 36.9092 40.8435C35.64 40.8435 34.6015 39.8123 33.39 36.7781V36.7048C33.39 35.945 33.0861 35.2164 32.5451 34.6792C32.0041 34.142 31.2704 33.8402 30.5054 33.8402C29.7403 33.8402 29.0066 34.142 28.4657 34.6792C27.9247 35.2164 27.6208 35.945 27.6208 36.7048V36.7804V36.7758C26.3285 39.8123 25.2808 40.8412 24.0138 40.8412C23.4024 40.8394 22.8165 40.5974 22.3841 40.168C21.9517 39.7386 21.708 39.1568 21.7062 38.5496L19.0708 33.98C15.2682 34.9404 11.9094 37.1603 9.54923 40.2729L9.51692 40.3164C8.58382 41.837 8.06307 43.5715 8.00538 45.3512V45.3673C8.01692 45.711 8.00538 46.1121 8.00538 46.5131V51.0964C8.00538 52.312 8.49165 53.4778 9.3572 54.3373C10.2228 55.1969 11.3967 55.6798 12.6208 55.6798H48.39C49.6141 55.6798 50.788 55.1969 51.6536 54.3373C52.5191 53.4778 53.0054 52.312 53.0054 51.0964V46.5131C53.0054 46.1144 52.9938 45.711 53.0054 45.3673C52.9496 43.5665 52.4197 41.8116 51.4685 40.2775L51.4938 40.3233L51.4915 40.3279ZM18.3877 12.8164C18.3877 19.5081 22.5877 29.3394 30.5031 29.3394C38.28 29.3394 42.6185 19.5081 42.6185 12.8164V12.6675C42.6185 11.0875 42.3051 9.52302 41.6962 8.06332C41.0874 6.60362 40.195 5.27731 39.07 4.1601C37.9449 3.0429 36.6093 2.15668 35.1394 1.55205C33.6695 0.947428 32.0941 0.63623 30.5031 0.63623C28.9121 0.63623 27.3366 0.947428 25.8667 1.55205C24.3968 2.15668 23.0612 3.0429 21.9362 4.1601C20.8112 5.27731 19.9188 6.60362 19.3099 8.06332C18.7011 9.52302 18.3877 11.0875 18.3877 12.6675V12.8233V12.8164ZM44.3123 16.7581C44.3123 21.1169 47.0492 27.5244 52.2046 27.5244C57.27 27.5244 60.0969 21.1191 60.0969 16.7581V16.6389C60.0969 14.5597 59.2652 12.5656 57.7846 11.0954C56.3041 9.62512 54.2961 8.79915 52.2023 8.79915C50.1085 8.79915 48.1005 9.62512 46.62 11.0954C45.1394 12.5656 44.3077 14.5597 44.3077 16.6389V16.765V16.7581H44.3123ZM0.00461538 20.4248C0.00461538 24.7835 2.74154 31.191 7.89692 31.191C12.9623 31.191 15.7892 24.7858 15.7892 20.4248V20.3056C15.7892 18.2264 14.9575 16.2323 13.477 14.762C11.9964 13.2918 9.9884 12.4658 7.89462 12.4658C5.80083 12.4658 3.79281 13.2918 2.31228 14.762C0.831752 16.2323 0 18.2264 0 20.3056L0 20.4316V20.4248H0.00461538Z"
                fill="white"
              />
            </svg>
          }
          number={80}
          text="Happy Clients"
        />



        <StatCard
          icon={<svg width="42" height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M40.375 0.906047C41.5375 1.93355 41.6462 3.71105 40.6187 4.88105L19.0562 29.256C18.8072 29.5376 18.5043 29.7664 18.1653 29.9289C17.8264 30.0914 17.4583 30.1843 17.0829 30.2021C16.7074 30.22 16.3322 30.1624 15.9794 30.0327C15.6265 29.9031 15.3033 29.704 15.0287 29.4473L0.96622 16.3223C0.425235 15.8125 0.108089 15.1092 0.0841072 14.3662C0.0601254 13.6232 0.331259 12.901 0.83824 12.3573C1.34522 11.8137 2.04681 11.4929 2.78965 11.465C3.53249 11.4371 4.25616 11.7044 4.80247 12.2085L16.765 23.346L36.415 1.14605C36.66 0.868899 36.9572 0.642802 37.2897 0.480705C37.6222 0.318609 37.9834 0.223695 38.3527 0.201402C38.7219 0.179108 39.0919 0.229872 39.4415 0.350786C39.7911 0.4717 40.1134 0.660389 40.39 0.906047H40.375Z" fill="white" />
          </svg>
          }
          number={100}
          text="Project Complete"
        />
      </div>
    </div>
  );
};

function ServiceButton({ text }) {
  return (
    <div className="bg-white border-2 border-[#1363C6] rounded-[8px] py-3 px-6 flex items-center transition-all duration-300 cursor-pointer">
      <div className="h-2 w-2 rounded-full bg-[#1363C6] mr-3 transition-colors duration-300"></div>
      <span style={{ color: '#1363C6' }} className="text-[20px]">{text}</span>
    </div>

  );
}


function StatCard({ icon, number, text }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(number);
      const duration = 1500;
      const increment = Math.ceil(end / (duration / 30)); // 30ms interval

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(start);
      }, 30);
    }
  }, [inView, number]);

  return (
    <div
      ref={ref}
      className="flex items-center bg-[#012A5D] rounded-lg p-4 flex-1 "
    >
      <div className="mr-4">{icon}</div>
      <div className="text-white">
        <h2 className="text-3xl font-bold">{count}</h2>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}

export default WhyChooseUsPage;