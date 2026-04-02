"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const activities = [
  {
    id: 1,
    text: "Передача электроэнергии.",
    icon: "/icons/activities/disket.png",
  },
  {
    id: 2,
    text: "Обеспечение готовности электроэнергетики к работе с нагрузкой, регулирование и резервирование электроэнергии;",
    icon: "/icons/activities/bashnya.svg",
  },
  {
    id: 3,
    text: "Исследования и экспериментальные разработки в области мирного использования атомной энергии;",
    icon: "/icons/activities/ball.svg",
  },
  {
    id: 4,
    text: "Деятельность в области архитектуры для атомной промышленности и объектов атомной энергетики;",
    icon: "/icons/activities/disket.png",
  },
  {
    id: 5,
    text: "Деятельность в области инженерных изысканий и предоставление технических консультаций в этой области для атомной промышленности и объектов атомной энергетики;",
    icon: "/icons/activities/bashnya.svg",
  },
];

const GAP = 20;  
const VISIBLE = 3;

export default function Activities() {
  const [current, setCurrent] = useState(0);
  const [cardW, setCardW] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const maxIndex = activities.length - VISIBLE;

  // Считаем ширину карточки при изменении контейнера
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const calc = () => {
      const w = el.getBoundingClientRect().width;
      setCardW((w - (VISIBLE - 1) * GAP) / VISIBLE);
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const step = cardW + GAP;

  return (
    <section className="p-30 ">

      {/* ── Карусель ── */}
      <div ref={containerRef} className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            gap: GAP,
            transform: `translateX(-${current * step}px)`,
          }}
        >
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="relative flex-shrink-0 bg-white rounded-lg overflow-hidden"
              style={{
                width: cardW > 0 ? cardW : `calc((100% - ${(VISIBLE - 1) * GAP}px) / ${VISIBLE})`,
                height: 420,
              }}
            >
              {/* Текст активности */}
              <p className="relative z-10 p-8 text-gray-800 text-lg font-light leading-relaxed max-w-[65%]">
                {activity.text}
              </p>

              {/* Иконка — большая, в правом нижнем углу, частично обрезана */}
              <div
                className="absolute bottom-[-20px] right-[-10px]"
                style={{ width: 230, height: 230 }}
              >
                <Image
                  src={activity.icon}
                  alt=""
                  fill
                  style={{ objectFit: "contain" }}
                  className="opacity-60"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Кнопки навигации ── */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          aria-label="Назад"
          className="
            w-12 h-12 rounded-full bg-[#1E4080] text-white
            flex items-center justify-center text-xl
            hover:bg-[#163366] transition-colors duration-200
            disabled:opacity-35 disabled:cursor-not-allowed
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setCurrent((c) => Math.min(maxIndex, c + 1))}
          disabled={current === maxIndex}
          aria-label="Вперёд"
          className="
            w-12 h-12 rounded-full bg-[#1E4080] text-white
            flex items-center justify-center text-xl
            hover:bg-[#163366] transition-colors duration-200
            disabled:opacity-35 disabled:cursor-not-allowed
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
