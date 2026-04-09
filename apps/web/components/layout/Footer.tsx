import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Главное", href: "/" },
  { label: "О компании", href: "/about" },
  { label: "Новости", href: "/news" },
  { label: "Закупки", href: "/procurement" },
  { label: "Об Атоме", href: "/atom" },
  { label: "Вакансии", href: "/vacancies" },
  { label: "Контакты", href: "/contacts" },
];

export default function Footer() {
  return (
    <footer className="bg-[#7280A0] text-white">
      {/* Main section */}
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* ── Left: logo + contacts ── */}
          <div className="flex flex-col gap-6 min-w-[220px]">
            <Link href="/">
              <Image
                src="/images/KNPP.png"
                alt="KNPP"
                width={90}
                height={56}
                style={{ width: 90, height: "auto" }}
              />
            </Link>

            {/* Address */}
            <div className="flex items-start gap-3 text-white/90 font-light leading-snug">
              <svg className="mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <div>
                <p>БЦ &quot;Аура&quot;</p>
                <p>Проспект Мангилик Ел, 57а</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-white/90 font-light">
              <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              <a href="mailto:kense@knpp.kz" className="underline underline-offset-2 hover:text-white transition-colors">
                kense@knpp.kz
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-white/90 font-light">
              <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013.09 4.18 2 2 0 015.09 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006.99 7l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>+7 (7172) 24 84 50</span>
            </div>
          </div>

          {/* ── Right: nav links + map ── */}
          <div className="flex flex-col gap-5 flex-1 max-w-[540px]">
            {/* Nav links */}
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 font-light hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Yandex map embed */}
            <div className="w-full rounded overflow-hidden" style={{ height: "260px" }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=71.430564%2C51.128207&z=14&pt=71.430564%2C51.128207%2Cpm2rdm&lang=ru_RU"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                title="Карта"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* Developer credit */}
          <p className="text-white/80 font-light text-[14px]">
            Разработчик{" "}
            <a href="#" className="font-medium underline underline-offset-2 text-[#071D47] hover:text-white transition-colors">
              ТОО «BenchMark Consulting»
            </a>
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <span className="text-white/80 text-[14px] font-light">Соц. сети:</span>

            {/* Facebook */}
            <a href="#" aria-label="Facebook"
              className="w-9 h-9 bg-[#1E3A6E] rounded-full flex items-center justify-center hover:bg-[#2a4d8f] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" aria-label="Instagram"
              className="w-9 h-9 bg-[#1E3A6E] rounded-full flex items-center justify-center hover:bg-[#2a4d8f] transition-colors">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
              </svg>
            </a>

            {/* TikTok */}
            <a href="#" aria-label="TikTok"
              className="w-9 h-9 bg-[#1E3A6E] rounded-full flex items-center justify-center hover:bg-[#2a4d8f] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
