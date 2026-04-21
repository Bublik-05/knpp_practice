"use client";

import { useRef } from "react";

const agencies = [
  {
    name: "Казатомпром",
    fullName: 'АО «Казатомпром»',
    desc: "Национальный оператор по добыче урана. Крупнейший производитель природного урана в мире, обеспечивающий ресурсную базу атомной программы Казахстана.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="20" cy="20" r="4" fill="currentColor" />
        <ellipse cx="20" cy="20" rx="16" ry="7" strokeLinecap="round" />
        <ellipse cx="20" cy="20" rx="16" ry="7" transform="rotate(60 20 20)" strokeLinecap="round" />
        <ellipse cx="20" cy="20" rx="16" ry="7" transform="rotate(120 20 20)" strokeLinecap="round" />
      </svg>
    ),
    color: "from-[#1E4080] to-[#3C507D]",
  },
  {
    name: "КазАтомЭнерго",
    fullName: 'АО «КазАтомЭнерго»',
    desc: "Дочерняя структура, ответственная за эксплуатацию и техническое обслуживание объектов ядерной энергетики, включая вопросы ядерной безопасности.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 4L8 14v14a2 2 0 002 2h20a2 2 0 002-2V14L20 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 30V20h10v10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20v-4h6v4" />
      </svg>
    ),
    color: "from-[#112250] to-[#1E4080]",
  },
  {
    name: "ЯФ НЯЦ РК",
    fullName: "Ядерный физический институт НЯЦ РК",
    desc: "Научно-исследовательская организация в области ядерной физики и технологий. Проводит экспериментальные работы в поддержку проектов строительства АЭС.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 34L20 6l14 28H6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 26h18" />
        <circle cx="20" cy="17" r="2" fill="currentColor" />
      </svg>
    ),
    color: "from-[#0B1C3C] to-[#112250]",
  },
  {
    name: "КазЯдЭксп",
    fullName: 'ТОО «КазЯдерная Экспертиза»',
    desc: "Организация, специализирующаяся на проведении ядерной и радиационной экспертизы, надзоре за ядерными материалами и оценке безопасности объектов.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="18" cy="18" r="10" />
        <path strokeLinecap="round" d="M25.5 25.5L34 34" />
        <path strokeLinecap="round" d="M13 18h10M18 13v10" />
      </svg>
    ),
    color: "from-[#3C507D] to-[#112250]",
  },
  {
    name: "КазЭнергоПроект",
    fullName: 'АО «КазЭнергоПроект»',
    desc: "Проектная организация, разрабатывающая технико-экономическое обоснование и проектную документацию для объектов атомной и тепловой энергетики.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="10" width="28" height="22" rx="2" />
        <path strokeLinecap="round" d="M6 16h28" />
        <path strokeLinecap="round" d="M13 22h6M13 27h10" />
        <path strokeLinecap="round" d="M26 22l3 3-3 3" />
      </svg>
    ),
    color: "from-[#1E4080] to-[#0B1C3C]",
  },
];

// Duplicate for infinite loop
const items = [...agencies, ...agencies, ...agencies];

export default function SubsidiaryAgencies() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden w-full py-20 bg-[#F0F0F0]">

      {/* Header */}
      <div className="relative z-10 px-30 flex flex-col gap-3 mb-12">
        <span className="text-[#1E4080] uppercase tracking-widest text-sm font-medium">
          Структура компании
        </span>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl max-w-xl">
            Дочерние и аффилированные<br className="hidden lg:block" /> ведомства
          </h2>
          <p className="text-lg font-light leading-relaxed text-gray-600 max-w-lg">
            ТОО «КАЭС» координирует работу специализированных организаций, каждая из которых
            отвечает за отдельное направление реализации атомной программы Казахстана —
            от добычи урана до научных исследований и проектирования.
          </p>
        </div>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative z-10 overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6"
          style={{
            animation: "agencyScroll 30s linear infinite",
            width: "max-content",
          }}
        >
          {items.map((agency, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card header with gradient */}
              <div
                className={`bg-gradient-to-br ${agency.color} px-6 pt-6 pb-8 text-white flex items-start gap-4`}
              >
                <div className="shrink-0 opacity-80">{agency.icon}</div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60 font-medium mb-1">
                    {agency.name}
                  </p>
                  <h3 className="font-semibold text-lg leading-snug">{agency.fullName}</h3>
                </div>
              </div>

              {/* Card body */}
              <div className="bg-white px-6 py-5">
                <p className="text-[15px] font-light text-gray-600 leading-relaxed">
                  {agency.desc}
                </p>
                <div className="mt-4 h-0.5 w-10 bg-[#E0C58F] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F0F0F0] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F0F0F0] to-transparent z-20" />

      <style jsx>{`
        @keyframes agencyScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        div:hover > div[style*="agencyScroll"] {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
