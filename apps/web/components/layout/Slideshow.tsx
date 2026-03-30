"use client";

import { useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: "home",
    label: "Главная",
    href: "/",
    image: "/images/main-img.jpg",
    title: "Казахстанские атомные\nэлектрические станции",
    subtitle: "Энергия для будущего",
  },
  {
    id: "about",
    label: "О компании",
    href: "/about",
    image: "/images/about-img.jpg",
    title: "О компании",
    subtitle:
      "ТОО «Казахстанские атомные электрические станции» (ТОО «КАЭС») создано в 2014 году",
  },
  {
    id: "news",
    label: "Новости",
    href: "/news",
    image: "/images/news-img.jpg",
    title: "Новости",
    subtitle: "Новости и события КАЭС",
  },
  {
    id: "procurement",
    label: "Закупки",
    href: "/procurement",
    image: "/images/procurement-img.jpg",
    title: "Закупки",
    subtitle: "Тендеры и закупочная деятельность",
  },
];

export default function Slideshow() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex w-full overflow-hidden" style={{ height: 600 }}>
      {slides.map((slide, i) => {
        const isActive = i === active;

        return (
          <div
            key={slide.id}
            onClick={() => !isActive && setActive(i)}
            className={`
              relative overflow-hidden
              transition-all duration-500 ease-in-out
              ${isActive ? "flex-[6] cursor-default" : "flex-[0.8] cursor-pointer hover:flex-[1]"}
            `}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div
              className={`absolute inset-0 transition-all duration-500 ${
                isActive
                  ? "bg-gradient-to-r from-black/55 via-black/20 to-transparent"
                  : "bg-black/50"
              }`}
            />

            {/* Active slide — title + subtitle + link */}
            {isActive && (
              <div className="absolute inset-0 flex flex-col justify-center px-12">
                <h2
                  className="text-white font-bold drop-shadow-lg mb-4"
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)",
                    lineHeight: 1.2,
                    whiteSpace: "pre-line",
                  }}
                >
                  {slide.title}
                </h2>
                {slide.subtitle && (
                  <p className="text-white/85 text-[20px] font-light leading-snug drop-shadow">
                    {slide.subtitle}
                  </p>
                )}
                <Link
                  href={slide.href}
                  className="mt-8 w-fit text-[16x] font-light text-white border border-white/60 px-5 py-2 rounded-full hover:bg-white hover:text-[#1E4080] transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  Подробнее
                </Link>
              </div>
            )}

            {/* Inactive slide — vertical label */}
            {!isActive && (
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <span
                  className="text-white text-2xl font-medium tracking-wide whitespace-nowrap select-none"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {slide.label}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}