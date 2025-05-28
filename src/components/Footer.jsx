import React from 'react';

const Footer = () => {
  return (
    <div className="text-white" style={{ backgroundColor: '#001734' }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-white mb-2">
              Quantera
              <span className="bg-gradient-to-r from-[#1363C6] to-[#093060] bg-clip-text text-transparent">AI</span>
            </h3>
            <p className="text-gray-300 text-[18px] font-robotoslab text-sm mb-4">
              QuanteraAI Analytics Private Limited - Unlock the power of Artificial Intelligence, Machine Learning, and Data Science with QuanteraAI. Transform your business through innovative solutions and data-driven insights. Discover the future of technology with our expert team.
            </p>
            <div className="flex items-center space-x-3">
              <p className="text-white text-[18px] font-robotoslab font-semibold">Follow Us:</p>
              <a href="https://www.linkedin.com/company/quanteraaianalytics/" style={{ color: '#BEBEBE' }} className="hover:scale-105 transition-transform duration-200">
                {/* LinkedIn or Social Icon SVG */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.352783" y="0.0166016" width="39" height="39" rx="7" fill="white" />
                  <path
                    d="M32.3767 4.89162H7.41666C7.1376 4.89033 6.86105 4.94435 6.60299 5.05054C6.34492 5.15674 6.11045 5.31301 5.91312 5.51034C5.7158 5.70767 5.55952 5.94213 5.45333 6.2002C5.34713 6.45827 5.29312 6.73482 5.29441 7.01387V32.0194C5.29441 33.1504 6.23691 34.1416 7.41666 34.1416H32.2792C32.5584 34.1431 32.8351 34.0893 33.0933 33.9832C33.3516 33.8771 33.5863 33.7208 33.7838 33.5235C33.9813 33.3261 34.1377 33.0916 34.244 32.8334C34.3503 32.5753 34.4043 32.2986 34.403 32.0194V6.96675C34.4989 5.83575 33.5548 4.89162 32.3767 4.89162ZM13.928 29.7541H9.63641V15.836H13.9297L13.928 29.7541ZM11.7587 13.9022C11.4298 13.904 11.1039 13.8405 10.7998 13.7154C10.4957 13.5903 10.2194 13.4061 9.987 13.1735C9.75456 12.9409 9.57057 12.6645 9.44567 12.3603C9.32078 12.0561 9.25747 11.7302 9.25941 11.4014C9.25941 10.0347 10.3904 8.90212 11.7587 8.90212C13.1269 8.90212 14.2612 10.0347 14.2612 11.4014C14.2612 12.768 13.2212 13.9022 11.7587 13.9022ZM30.2057 29.7541H25.9124V23.0071C25.9124 21.4032 25.8653 19.281 23.6488 19.281C21.3835 19.281 21.0537 21.0734 21.0537 22.8657V29.7541H16.7604V15.836H20.9594V17.7697H21.0065C21.6192 16.6387 22.989 15.5061 25.1113 15.5061C29.4988 15.5061 30.2999 18.3369 30.2999 22.206V29.7541H30.2057Z"
                    fill="url(#paint0_linear_201_120)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_201_120"
                      x1="19.8521"
                      y1="4.8916"
                      x2="19.8521"
                      y2="34.1417"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1363C6" />
                      <stop offset="1" stopColor="#14183E" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>
          </div>

          {/* Popular Links */}
          <div className='flex flex-col items-start md:items-center'>
            <div>
              <h4 className="text-lg text-[18px] font-robotoslab font-semibold mb-4">Popular Links</h4>
              <ul style={{ color: '#BEBEBE' }} className="space-y-2 text-[18px] font-robotoslab text-sm gap-15px">
                <li><a href="/#about" className="hover:text-white">About Us</a></li>
                <li><a href="/services" className="hover:text-white">Services</a></li>
                <li><a href="/#features" className="hover:text-white">Features </a></li>
                <li><a href="/#contact" className="hover:text-white">Contact Us</a></li>
                {/* <li><a href="#" className="hover:text-white">Career</a></li> */}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-[18px] font-robotoslab mb-4">Our Services</h4>
            <ul style={{ color: '#BEBEBE' }} className="space-y-2 text-[18px] font-robotoslab text-sm gap-15px">
              <li><a href="/services#artificial-intelligence-ai-general-services" className="hover:text-white">Artificial Intelligence (AI)-Based Services</a></li>
              <li><a href="/services#open-data-creation-for-education-and-innovations" className="hover:text-white">Open Data Centers in Educational Institutions</a></li>
              <li><a href="/services#emerging-learning-training-programs" className="hover:text-white">Emerging Technology Training Programs</a></li>
              <li><a href="/services#spanish-language-program-for-students" className="hover:text-white">Spanish Language Program for Students</a></li>
              <li><a href="/services#internship-programs" className="hover:text-white">Internship Programs</a></li>
              <li><a href="/services#career-counseling-services" className="hover:text-white">Career Counseling Services</a></li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-lg text-[18px] font-robotoslab font-semibold mb-4">Get In Touch</h4>
            <ul style={{ color: '#BEBEBE' }} className="space-y-4 text-sm text-[18px] font-robotoslab gap-15px">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-[#BEBEBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                302, County Planet, KIBS Hospital Road, Vijay Nagar, Indore, M.P., India 452010
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-[#BEBEBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91-9827295020 / 7470500248
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-[#BEBEBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                quanteraai@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Center Line */}
      <div className="text-center text-gray-400 text-sm pb-6">
        © 2020 Quantera AI. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
