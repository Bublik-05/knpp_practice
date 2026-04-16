"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const activities = [
  {
    id: 1,
    text: "Передача электроэнергии.",
    icon: "/images/activities/1atom.png",
    iconStyle: {
      bottom: "-120px",
      right: "-100px",
      width: "400px",
      height: "400px",
    },
  },
  {
    id: 2,
    text: "Обеспечение готовности электроэнергетики к работе с нагрузкой, регулирование и резервирование электроэнергии;",
    icon: "/images/activities/2atom.png",
    iconStyle: {
      bottom: "-60px",
      right: "-80px",
      width: "360px",
      height: "360px",
    },
  },
  {
    id: 3,
    text: "Исследования и экспериментальные разработки в области мирного использования атомной энергии;",
    icon: "/images/activities/3atom.png",
    iconStyle: {
      bottom: "-140px",
      right: "-110px",
      width: "420px",
      height: "420px",
    },
  },
  {
    id: 4,
    text: "Деятельность в области архитектуры для атомной промышленности и объектов атомной энергетики;",
    icon: "/images/activities/4atom.png",
    iconStyle: {
      bottom: "-120px",
      right: "-100px",
      width: "400px",
      height: "400px",
    },
  },
  {
    id: 5,
    text: "Деятельность в области инженерных изысканий и предоставление технических консультаций в этой области для атомной промышленности и объектов атомной энергетики;",
    icon: "/images/activities/5atom.png",
    iconStyle: {
      bottom: "-65px",
      right: "-85px",
      width: "370px",
      height: "370px",
    },
  },
];

const GAP = 30;
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
    <section className="relative overflow-hidden p-30 flex flex-col gap-10">

      {/* Атом — большой, сверху справа, блюр */}
      <Image
        src="/images/atom.png"
        alt=""
        width={500}
        height={500}
        className="pointer-events-none select-none absolute -top-24 -right-16 opacity-[0.06] blur-md"
        aria-hidden
      />

      {/* Атом — маленький, снизу по центру */}
      <Image
        src="/images/atom.png"
        alt=""
        width={200}
        height={200}
        className="pointer-events-none select-none absolute bottom-0 left-1/3 opacity-[0.04] blur-sm"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col gap-2">
        <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl">
          Виды деятельности
        </h2>
        <p className="font-medium text-xl leading-relaxed max-w-xl">
          Наша деятельность
        </p>
      </div>
      {/* ── Карусель ── */}
      <div ref={containerRef} className="relative z-10 overflow-hidden w-full">
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
              className="
                relative flex-shrink-0 bg-white rounded-lg overflow-hidden
                px-7 pt-7 pb-5
                flex flex-col justify-start
                shadow-md hover:shadow-xl
                transition-shadow duration-500
              "
              style={{
                width: cardW > 0 ? cardW : `calc((100% - ${(VISIBLE - 1) * GAP}px) / ${VISIBLE})`,
                height: 420,
              }}
            >
              {/* Текст активности */}
              <p className="relative z-10 text-gray-800 text-lg font-light leading-relaxed max-w-[65%]">
                {activity.text}
              </p>

              {/* Иконка — большая, в правом нижнем углу, частично обрезана */}
              <div
                className="absolute"
                style={{
                  bottom: activity.iconStyle.bottom,
                  right: activity.iconStyle.right,
                  width: activity.iconStyle.width,
                  height: activity.iconStyle.height,
                }}
              >
                <Image
                  src={activity.icon}
                  alt=""
                  fill
                  style={{ objectFit: "contain" }}
                  className="opacity-50"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Кнопки навигации ── */}
      <div className="relative z-10 flex justify-center gap-4 mt-10">
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
