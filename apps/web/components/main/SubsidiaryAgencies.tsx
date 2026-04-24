"use client";

const partners = [
  {
    name: "Акорда",
    href: "https://www.akorda.kz/ru",
    image: "/images/partners/akorda.jpg",
  },
  {
    name: "Сайт Премьер-Министра",
    href: "https://primeminister.kz/ru",
    image: "/images/partners/primeminister.jpeg",
  },
  {
    name: "Агентство РК по атомной энергии",
    href: "https://www.gov.kz/memleket/entities/atom-energiyasy",
    image: "/images/partners/atom-agency.png",
  },
  {
    name: "НЯЦ",
    href: "https://www.nnc.kz/ru",
    image: "/images/partners/nnc.png",
  },
  {
    name: "ИЯФ",
    href: "https://inp.kz/ru",
    image: "/images/partners/iyaf.png",
  },
];

// Duplicate for infinite loop
const items = [...partners, ...partners, ...partners];

export default function SubsidiaryAgencies() {
  return (
    <section className="relative overflow-hidden w-full py-20">
      {/* Auto-scrolling carousel */}
      <div className="relative z-10 overflow-hidden">
        <div
          className="flex gap-8"
          style={{
            animation: "agencyScroll 30s linear infinite",
            width: "max-content",
          }}
        >
          {items.map((partner, i) => (
            <a
              key={i}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[220px] h-[210px] flex items-center justify-center p-6"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </a>
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
