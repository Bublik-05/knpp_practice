"use client";

import { useState } from "react";

const items = [
  {
    q: "Зачем Казахстану нужна АЭС?",
    a: "Казахстан сталкивается с растущим спросом на электроэнергию и необходимостью сокращения выбросов CO₂. Атомная энергетика обеспечивает стабильную, низкоуглеродную генерацию независимо от погодных условий. Страна обладает крупнейшими в мире запасами урана, что делает развитие собственной атомной отрасли стратегически обоснованным.",
  },
  {
    q: "Какие площадки рассматриваются для строительства?",
    a: "Основными рассматриваемыми площадками являются район Балхаша и Майнкум на юге Казахстана. Выбор основывается на геологических, гидрологических и демографических исследованиях, а также на соответствии требованиям МАГАТЭ к размещению ядерных объектов.",
  },
  {
    q: "Когда планируется ввод АЭС в эксплуатацию?",
    a: "Согласно предварительным планам, первый энергоблок может быть введён в эксплуатацию ориентировочно в 2035 году. Сроки зависят от результатов выбора площадки, согласования технологии и завершения финансовых договорённостей с партнёрами.",
  },
];

export default function ProjectSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx}
            className={`rounded-lg border transition-all duration-200 ${isOpen ? "border-[#1E4080]/30 bg-blue-50/40 shadow-sm" : "border-gray-200 bg-white hover:border-gray-300"}`}>
            <button onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full flex items-center justify-between px-6 py-5 text-left group">
              <span className={`text-[16px] font-medium leading-snug pr-4 transition-colors ${isOpen ? "text-[#1E4080]" : "text-gray-900 group-hover:text-[#1E4080]"}`}>
                {item.q}
              </span>
              <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${isOpen ? "bg-[#1E4080] text-white rotate-180" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-0">
                <div className="border-t border-[#1E4080]/10 pt-4">
                  <p className="text-lg text-gray-700 font-light leading-relaxed">{item.a}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
