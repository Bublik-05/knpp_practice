"use client";

import { useState } from "react";
import Link from "next/link";

const EMAIL = "kense@knpp.kz";
const PHONE = "+7 (7172) 24 84 50";
const PHONE_RAW = "+77172248450";

const items: { q: string; a: React.ReactNode }[] = [
  {
    q: "Как подать заявку на вакансию в КАЭС?",
    a: (
      <>
        Актуальные вакансии размещены в разделе{" "}
        <Link href="/vacancies" className="text-[#1E4080] hover:underline font-medium">
          «Вакансии»
        </Link>{" "}
        на нашем сайте. Вы можете откликнуться через форму на странице конкретной вакансии
        или направить резюме на электронную почту{" "}
        <a href={`mailto:${EMAIL}`} className="text-[#1E4080] hover:underline font-medium">
          {EMAIL}
        </a>{" "}
        с указанием желаемой должности в теме письма.
      </>
    ),
  },
  {
    q: "Как стать поставщиком товаров или услуг для КАЭС?",
    a: (
      <>
        Информация о закупках и тендерах публикуется в разделе{" "}
        <Link href="/procurements" className="text-[#1E4080] hover:underline font-medium">
          «Закупки»
        </Link>
        . Для участия необходимо пройти квалификацию поставщика. Подробности и требования
        можно уточнить по электронной почте{" "}
        <a href={`mailto:${EMAIL}`} className="text-[#1E4080] hover:underline font-medium">
          {EMAIL}
        </a>{" "}
        или по телефону{" "}
        <a href={`tel:${PHONE_RAW}`} className="text-[#1E4080] hover:underline font-medium whitespace-nowrap">
          {PHONE}
        </a>
        .
      </>
    ),
  },
  {
    q: "Как связаться с пресс-службой КАЭС?",
    a: (
      <>
        Представители СМИ и партнёры могут направлять запросы на адрес{" "}
        <a href={`mailto:${EMAIL}`} className="text-[#1E4080] hover:underline font-medium">
          {EMAIL}
        </a>{" "}
        или звонить по телефону{" "}
        <a href={`tel:${PHONE_RAW}`} className="text-[#1E4080] hover:underline font-medium whitespace-nowrap">
          {PHONE}
        </a>
        . Мы стараемся отвечать на все обращения в течение двух рабочих дней.
      </>
    ),
  },
];

export default function CooperationSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`rounded-lg border transition-all duration-200 ${
              isOpen
                ? "border-[#1E4080]/30 bg-blue-50/40 shadow-sm"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full flex items-center justify-between px-6 py-5 text-left group"
            >
              <span
                className={`text-[16px] font-medium leading-snug pr-4 transition-colors ${
                  isOpen ? "text-[#1E4080]" : "text-gray-900 group-hover:text-[#1E4080]"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isOpen
                    ? "bg-[#1E4080] text-white rotate-180"
                    : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                }`}
              >
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
