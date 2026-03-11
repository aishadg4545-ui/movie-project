import React, { useState } from "react";

const faqs = [
  { id: "01", question: "What is StreamVibe?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
  { id: "02", question: "How much does StreamVibe cost?", answer: "Plans start from $9.99/month." },
  { id: "03", question: "What content is available on StreamVibe?", answer: "Movies, series, and originals." },
  { id: "04", question: "How can I watch StreamVibe?", answer: "Mobile, web, smart TVs and more." },
  { id: "05", question: "How do I sign up for StreamVibe?", answer: "Create an account and choose a plan." },
  { id: "06", question: "What is the StreamVibe free trial?", answer: "7-day free trial available." },
  { id: "07", question: "How do I contact StreamVibe customer support?", answer: "Email or live chat support." },
  { id: "08", question: "What are the StreamVibe payment methods?", answer: "Visa, Mastercard, PayPal." },
];

function Questions() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="bg-black text-white px-5 md:px-10 py-20">
      {/* Header */}
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-gray-400 mt-3">Got questions? We've got answers! Everything you need to know about StreamVibe.</p>
        </div>
        <button className="bg-red-600 hover:bg-red-700 px-7 py-3.5 rounded-xl font-semibold transition shrink-0">
          Ask a Question
        </button>
      </div>

      {/* Grid с вопросами */}
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-x-10">
        {faqs.map((item) => (
          <div key={item.id} className="border-b border-red-600/30">
            <button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full flex justify-between items-center py-6 text-left group"
            >
              <div className="flex items-center gap-4">
                <span className="bg-zinc-800 px-4 py-3 rounded-lg text-sm font-bold border border-white/5">{item.id}</span>
                <h3 className="font-medium text-lg">{item.question}</h3>
              </div>
              <i className={`fa-solid ${openId === item.id ? "fa-minus" : "fa-plus"} transition-transform duration-300`} />
            </button>

            {/* Ответ */}
            <div className={`overflow-hidden transition-all duration-300 ${openId === item.id ? "max-h-40 pb-6" : "max-h-0"}`}>
              <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Questions;