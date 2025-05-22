import { useState } from 'react';

const FAQPage = () => {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    { id: 1, question: "Who can enroll in your training programs?", answer: "Anyone from students to professionals interested in AI and data science can enroll." },
    { id: 2, question: "What is the process for establishing a Data Center in a college?", answer: "We follow a collaborative process involving infrastructure assessment, planning, and setup in coordination with the institution." },
    { id: 3, question: "Are the internships remote or physical?", answer: "We offer both remote and on-site internship opportunities based on the project and candidate preference." },
    { id: 4, question: "Do you provide certifications for language courses?", answer: "Yes, upon completion of the language course, we provide industry-recognized certifications." },
    { id: 5, question: "Are your programs aligned with school/college curriculum?", answer: "Our programs are designed to complement academic curricula and enhance practical knowledge." },
    { id: 6, question: "Is financial assistance or scholarship available?", answer: "We offer need-based scholarships and financial aid for eligible candidates." },
    { id: 7, question: "How are career counselling sessions conducted?", answer: "Sessions are conducted via Zoom/Google Meet with experts from industry and academia." }
  ];

  const toggleFAQ = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="max-w-2xl mx-auto my-10 px-4">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center mb-2">
          <span className="text-[25px] font-sansation font-bold mb-4 bg-gradient-to-r from-[#1363C6] to-[#14183E] bg-clip-text text-transparent">— Popular FAQs</span>
        </div>
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border-2 border-[#1363C6] rounded-lg p-4 cursor-pointer transition duration-300"
          >
            <div 
              className="flex items-center justify-between"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex items-start">
                <span className="text-[#1363C6] font-bold mr-2">✦</span>
                <p className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#1363C6] to-[#14183E]">
                  {faq.question}
                </p>
              </div>
              <span className="text-[#1363C6] text-xl font-bold ml-4 transition-transform duration-300">
                {openId === faq.id ? '−' : '+'}
              </span>
            </div>
            {openId === faq.id && (
              <div className="mt-3 pl-6">
                <p className="text-sm text-gray-700 transition-all duration-300">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;