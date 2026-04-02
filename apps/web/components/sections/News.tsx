"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { NewsItem } from "@/lib/news";

const CARD_W = 520;
const IMG_H = 300;
const TEXT_H = 130;
const SIDE_W = 430;
const X_STEP = 500;
const SCALE = 0.82;

interface Props {
  items: NewsItem[];
}

export default function News({ items }: Props) {
  const newsItems = useMemo(() => items.slice(0, 5), [items]);
  const [active, setActive] = useState(0);
  const n = newsItems.length;

  if (n === 0) {
    return (
      <section className="py-16 w-full">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-500">
          В админке пока нет опубликованных избранных новостей.
        </div>
      </section>
    );
  }

  const navigate = (dir: number) => {
    setActive((prev) => (prev + dir + n) % n);
  };

  const getPos = (i: number): number => {
    let p = i - active;
    while (p > Math.floor(n / 2)) p -= n;
    while (p < -Math.floor(n / 2)) p += n;
    return p;
  };

  return (
    <section className="py-16 w-full">
      <div
        className="relative w-full overflow-hidden"
        style={{ height: IMG_H + TEXT_H + 16 }}
      >
        {newsItems.map((item, i) => {
          const pos = getPos(i);
          const isActive = pos === 0;
          const visible = Math.abs(pos) <= 1;

          const scale = isActive ? 1 : SCALE;
          const xOffset = pos * X_STEP;
          const opacity = visible ? 1 : 0;
          const zIndex = isActive ? 3 : visible ? 2 : 0;
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
                transition:
                  "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease, width 0.5s cubic-bezier(0.4,0,0.2,1)",
                opacity,
                zIndex,
                cursor: isActive ? "default" : "pointer",
              }}
            >
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

              <div
                className="bg-white overflow-hidden"
                style={{
                  borderRadius: "0 0 10px 10px",
                  maxHeight: isActive ? TEXT_H : 0,
                  opacity: isActive ? 1 : 0,
                  padding: isActive ? "18px 24px" : "0 24px",
                  transition:
                    "max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, padding 0.4s ease",
                }}
              >
                <h3 className="font-medium uppercase tracking-wide text-gray-900 leading-snug mb-2 line-clamp-3">
                  {item.title}
                </h3>
                <p className="font-light text-gray-500">{item.date}</p>
              </div>
            </div>
          );
        })}
      </div>

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