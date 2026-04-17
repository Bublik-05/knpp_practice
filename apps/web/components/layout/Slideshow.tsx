"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const slides = [
  {
    id: "home",
    label: "Главная",
    href: "/",
    image: "/images/main-img.jpg",
    title: "Казахстанские атомные\nэлектрические станции",
    subtitle: "Энергия для будущего",
    path: ["Главная"],
  },
  {
    id: "about",
    label: "О компании",
    href: "/about",
    image: "/images/about-img.jpg",
    title: "О компании",
    subtitle: "ТОО «Казахстанские атомные электрические станции» (ТОО «КАЭС») создано в 2014 году",
    path: ["Главная", "О компании"],
  },
  {
    id: "news",
    label: "Новости",
    href: "/news",
    image: "/images/news-img.jpg",
    title: "Новости",
    subtitle: "Новости и события КАЭС",
    path: ["Главная", "Новости"],
  },
  {
    id: "atom",
    label: "Об атоме",
    href: "/atom",
    image: "/images/procurement-img.jpg",
    title: "Об атоме",
    subtitle: "История, безопасность и будущее атомной энергетики",
    path: ["Главная", "Об атоме"],
  },
];

const SLIDESHOW_ROUTES = ["/", "/about", "/news", "/atom"];

function getIndexFromPath(path: string) {
  if (path === "/") return slides.findIndex((s) => s.href === "/");
  if (path.startsWith("/about")) return slides.findIndex((s) => s.href === "/about");
  if (path.startsWith("/news")) return slides.findIndex((s) => s.href === "/news");
  if (path.startsWith("/atom")) return slides.findIndex((s) => s.href === "/atom");
  return 0;
}

export default function Slideshow() {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(() => getIndexFromPath(pathname));

  useEffect(() => {
    setActive(getIndexFromPath(pathname));
  }, [pathname]);

  const show = SLIDESHOW_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(r + "/")
  );
  if (!show) return null;

  return (
    <div className="flex w-full overflow-hidden" style={{ height: 700 }}>
      {slides.map((slide, i) => {
        const isActive = i === active;

        return (
          <div
            key={slide.id}
            onClick={() => !isActive && router.push(slide.href)}
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
                  ? "bg-gradient-to-r from-black/75 via-black/45 to-black/15"
                  : "bg-black/60"
              }`}
            />

            {/* Active slide content */}
            {isActive && (
              <div className="absolute inset-0 flex flex-col justify-center px-12">

                {/* Path breadcrumb */}
                <div className="flex items-center gap-1.5 mb-5">
                  {slide.path.map((segment, si) => (
                    <span key={si} className="flex items-center gap-1.5">
                      {si > 0 && (
                        <svg className="w-4 h-4 text-[#E0C58F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                      <span
                        className={`text-xs font-medium tracking-[0.15em] uppercase ${
                          si === slide.path.length - 1
                            ? "text-[#E0C58F]"
                            : "text-white/45"
                        }`}
                      >
                        {segment}
                      </span>
                    </span>
                  ))}
                </div>

                {/* Title */}
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

                {/* Subtitle */}
                {slide.subtitle && (
                  <p className="text-white/85 text-[20px] font-light leading-snug drop-shadow">
                    {slide.subtitle}
                  </p>
                )}
              </div>
            )}

            {/* Inactive slide — vertical label + path hint at bottom */}
            {!isActive && (
              <div className="absolute inset-0 flex flex-col items-center justify-between py-8">
                {/* Path hint at top */}
                <span className="text-[#E0C58F] text-[10px] tracking-widest uppercase rotate-180"
                  style={{ writingMode: "vertical-rl" }}>
                  {slide.path.join(" / ")}
                </span>

                {/* Label at bottom */}
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
