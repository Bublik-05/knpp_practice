"use client";

import { useState } from "react";

const items = [
  {
    q: "Что такое АЭС и как она работает?",
    a: "Атомная электростанция использует энергию ядерного деления для производства электричества. В реакторе атомы урана распадаются, выделяя тепло. Оно превращает воду в пар, который вращает турбину, соединённую с генератором. Сам реактор при этом полностью изолирован от окружающей среды несколькими физическими барьерами.",
  },
  {
    q: "Насколько безопасна атомная энергетика?",
    a: "Современные АЭС поколения III и III+ оснащены многоуровневыми системами безопасности, включая пассивные системы охлаждения, не требующие внешнего электропитания. По статистике МАГАТЭ, атомная энергетика является одной из наиболее безопасных форм генерации по числу несчастных случаев на единицу произведённой энергии.",
  },
  {
    q: "Что происходит с ядерными отходами?",
    a: "Ядерные отходы делятся на категории по уровню активности. Высокоактивные отходы (около 3% от общего объёма) после переработки хранятся в специализированных контейнерах. В долгосрочной перспективе рассматривается их захоронение в геологически стабильных подземных хранилищах. Объём отходов АЭС значительно меньше, чем угольных или газовых станций аналогичной мощности.",
  },
];

export default function GeneralSection() {
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
