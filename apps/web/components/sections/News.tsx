"use client";

import { useState } from "react";
import Image from "next/image";

const newsItems = [
  {
    id: 1,
    title: "КООРДИНАЦИОННЫЕ ВСТРЕЧИ С МАГАТЭ В РАМКАХ ПОДГОТОВКИ К МИССИИ INIR",
    date: "09.02.2026",
    image: "/images/news1-img.jpg",
  },
  {
    id: 2,
    title: "РАЗВИТИЕ ЯДЕРНОЙ ЭНЕРГЕТИКИ В КАЗАХСТАНЕ",
    date: "15.01.2026",
    image: "/images/news2-img.jpg",
  },
  {
    id: 3,
    title: "ПОДПИСАНИЕ МЕМОРАНДУМА О СОТРУДНИЧЕСТВЕ С МЕЖДУНАРОДНЫМИ ПАРТНЁРАМИ",
    date: "22.12.2025",
    image: "/images/news3-img.jpg",
  },
  {
    id: 4,
    title: "МЕЖДУНАРОДНАЯ КОНФЕРЕНЦИЯ ПО ЯДЕРНОЙ БЕЗОПАСНОСТИ",
    date: "05.11.2025",
    image: "/images/news4-img.jpg",
  },
  {
    id: 5,
    title: "ВИЗИТ ДЕЛЕГАЦИИ МАГАТЭ НА ПРОИЗВОДСТВЕННЫЕ ОБЪЕКТЫ КАЭС",
    date: "18.10.2025",
    image: "/images/news5-img.jpg",
  },
];

const CARD_W   = 520;
const IMG_H    = 300;
const TEXT_H   = 130;
const SIDE_W   = 430;
const X_STEP   = 500;  // px between card centres
const SCALE    = 0.82; // scale of side cards

export default function News() {
  const [active, setActive] = useState(0);
  const n = newsItems.length;

  const navigate = (dir: number) => {
    setActive((prev) => (prev + dir + n) % n);
  };

  const getPos = (i: number): number => {
    let p = i - active;
    while (p >  Math.floor(n / 2)) p -= n;
    while (p < -Math.floor(n / 2)) p += n;
    return p;
  };

  return (
    <section className="py-16 w-full">

      {/* ── Carousel track ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: IMG_H + TEXT_H + 16 }}
      >
        {newsItems.map((item, i) => {
          const pos      = getPos(i);
          const isActive = pos === 0;
          const visible  = Math.abs(pos) <= 1;

          const scale   = isActive ? 1 : SCALE;
          const xOffset = pos * X_STEP;
          const opacity = visible ? 1 : 0;
          const zIndex  = isActive ? 3 : visible ? 2 : 0;

          const width = isActive ? CARD_W : SIDE_W;

          return (
            <div
              key={item.id}
              onClick={() => !isActive && navigate(pos > 0 ? 1 : -1)}
              className="absolute top-0"
              style={{
                left: "50%",
                width,
                transform: `translateX(calc(-50% + ${xOffset}px)) scale(${scale})`,
                transformOrigin: "bottom center",
                transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease, width 0.5s cubic-bezier(0.4,0,0.2,1)",
                opacity,
                zIndex,
                cursor: isActive ? "default" : "pointer",
              }}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{
                  height: IMG_H,
                  borderRadius: isActive ? "10px 10px 0 0" : 10,
                  transition: "border-radius 0.4s ease",
                }}
              >
                <Image
                  src={item.image}
                  fill
                  alt={item.title}
                  className="object-cover"
                />
              </div>

              {/* Text box — grows open on active, collapses on others */}
              <div
                className="bg-white overflow-hidden"
                style={{
                  borderRadius: "0 0 10px 10px",
                  maxHeight: isActive ? TEXT_H : 0,
                  opacity:    isActive ? 1 : 0,
                  padding:    isActive ? "18px 24px" : "0 24px",
                  transition: "max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, padding 0.4s ease",
                }}
              >
                <h3 className="font-medium uppercase tracking-wide text-gray-900 leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="font-light text-gray-500">{item.date}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Navigation arrows ── */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => navigate(-1)}
          aria-label="Назад"
          className="w-11 h-11 rounded-full bg-[#1E4080] flex items-center justify-center text-white text-2xl hover:bg-[#2a5299] transition-colors"
        >
          ‹
        </button>
        <button
          onClick={() => navigate(1)}
          aria-label="Вперёд"
          className="w-11 h-11 rounded-full bg-[#1E4080] flex items-center justify-center text-white text-2xl hover:bg-[#2a5299] transition-colors"
        >
          ›
        </button>
      </div>
    </section>
  );
}
