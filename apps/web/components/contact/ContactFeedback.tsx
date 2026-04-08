"use client";

import ContactForm from "./ContactForm";

export default function ContactFeedback() {
  return (
    <div className="w-full bg-[#F0F0F0]">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Форма обратной связи
            </h2>
            <ContactForm />
          </div>

          {/* Atom on the right */}
          <div className="hidden md:flex items-center justify-center">
            <img
              src="/images/atom.png"
              alt=""
              aria-hidden
              className="w-[1000px] max-w-none drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
