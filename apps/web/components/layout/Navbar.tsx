"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import SearchIcon from "@/components/ui/icons/SearchIcon";

type SubLink = { label: string; href: string };

type NavLink = {
  label: string;
  href: string;
  megaMenu?: {
    topLinks: SubLink[];
    sideLinks: SubLink[];
  };
};

type MenuColumn = {
  label: string;
  href: string;
  subLinks?: SubLink[];
};

const navLinks: NavLink[] = [
  { label: "Главное", href: "/" },
  {
    label: "О компании",
    href: "/about",
    megaMenu: {
      topLinks: [
        { label: "О компании", href: "/about?section=about" },
        { label: "Руководство", href: "/about?section=leadership" },
        { label: "Безопасность", href: "/about?section=safety" },
        { label: "Комплаенс", href: "/about?section=compliance" },
        { label: "НПА", href: "/about?section=npa" },
        { label: "План развития", href: "/about?section=development" },
      ],
      sideLinks: [
        { label: 'О ТОО "КАЭС"', href: "/about?section=about" },
        { label: "Виды деятельности ТОО «КАЭС»", href: "/about?section=activities" },
        { label: "Дополнительная информация", href: "/about?section=additional" },
        { label: "Галерея", href: "/about?section=gallery" },
      ],
    },
  },
  { label: "Новости", href: "/news" },
  {
    label: "Об Атоме",
    href: "/atom",
    megaMenu: {
      topLinks: [
        { label: "История", href: "/atom?section=history" },
        { label: "Как работает атомный реактор", href: "/atom?section=operation" },
        { label: "Типы реакторов", href: "/atom?section=types" },
        { label: "Безопасность", href: "/atom?section=safety" },
        { label: "Атомная энергия и экология", href: "/atom?section=environment" },
        { label: "Мифы и факты об АЭС", href: "/atom?section=myths" },
        { label: "Интерактив / мультимедиа", href: "/atom?section=multimedia" },
      ],
      sideLinks: [],
    },
  },
  { label: "Закупки", href: "/procurements" },
  { label: "Вакансии", href: "/vacancies" },
  { label: "FAQ", href: "/faq" },
  { label: "Контакты", href: "/contacts" },
];

const menuColumns: MenuColumn[] = [
  {
    label: "О компании",
    href: "/about",
    subLinks: [
      { label: "О компании", href: "/about?section=about" },
      { label: "Руководство", href: "/about?section=leadership" },
      { label: "Безопасность", href: "/about?section=safety" },
      { label: "Комплаенс", href: "/about?section=compliance" },
      { label: "НПА", href: "/about?section=npa" },
      { label: "План развития", href: "/about?section=development" },
      { label: 'О ТОО "КАЭС"', href: "/about?section=company" },
      { label: "Виды деятельности ТОО «КАЭС»", href: "/about?section=activities" },
      { label: "Дополнительная информация", href: "/about?section=additional" },
      { label: "Галерея", href: "/about?section=gallery" },
    ],
  },
  {
    label: "Об Атоме",
    href: "/atom",
    subLinks: [
      { label: "История", href: "/atom?section=history" },
      { label: "Как работает атомный реактор", href: "/atom?section=operation" },
      { label: "Типы реакторов", href: "/atom?section=types" },
      { label: "Безопасность", href: "/atom?section=safety" },
      { label: "Атомная энергия и экология", href: "/atom?section=environment" },
      { label: "Мифы и факты об АЭС", href: "/atom?section=myths" },
      { label: "Интерактив / мультимедиа", href: "/atom?section=multimedia" },
    ],
  },
  {
    label: "Новости",
    href: "/news",
    subLinks: [
      { label: "Все новости", href: "/news" },
    ],
  },
  {
    label: "Закупки",
    href: "/procurements",
    subLinks: [
      { label: "Все закупки", href: "/procurements" },
    ],
  },
  {
    label: "Вакансии",
    href: "/vacancies",
    subLinks: [
      { label: "Все вакансии", href: "/vacancies" },
    ],
  },
  {
    label: "Проекты",
    href: "/projects",
    subLinks: [
      { label: "Все проекты", href: "/projects" },
    ],
  },
  {
    label: "FAQ",
    href: "/faq",
    subLinks: [
      { label: "Часто задаваемые вопросы", href: "/faq" },
    ],
  },
  {
    label: "Контакты",
    href: "/contacts",
    subLinks: [
      { label: "Связаться с нами", href: "/contacts" },
    ],
  },
];

function isLinkActive(pathname: string, href: string) {
  const base = href.split("?")[0];
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);   // mobile
  const [megaOpen, setMegaOpen] = useState(false);   // burger drawer
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchHovered, setSearchHovered] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchVisible = searchHovered || searchFocused;

  useEffect(() => { setMegaOpen(false); setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = megaOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [megaOpen]);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 100);
  };

  return (
    <>
      {/* ─────────────────── NAVBAR ─────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        {/* Single row, max-w-7xl, same px-8 as the rest of the site */}
        <nav className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between gap-4">

          {/* LEFT: burger + logo */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => setMegaOpen(true)}
              aria-label="Открыть меню"
              className="p-1.5 text-[#1B2A4A] hover:text-[#1E4080] transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            <Link href="/" className="shrink-0">
              <Image src="/images/KNPP.png" alt="KNPP" width={90} height={56}
                style={{ width: 90, height: "auto" }} priority />
            </Link>
          </div>

          {/* CENTER: desktop nav links — spread across full remaining width */}
          <ul className="hidden md:flex items-center justify-center gap-3 flex-1 min-w-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const hasMenu = !!link.megaMenu;
              const isMenuOpen = activeMenu === link.label;

              return (
                <li key={link.href} className="relative shrink-0"
                  onMouseEnter={() => hasMenu && handleMouseEnter(link.label)}
                  onMouseLeave={() => hasMenu && handleMouseLeave()}>
                  <Link
                    href={link.href}
                    className={`px-2 py-1.5 text-[14px] whitespace-nowrap rounded transition-colors ${isActive || isMenuOpen
                      ? "font-medium text-[#1E4080]"
                      : "font-light text-gray-600 hover:text-[#1E4080]"}`}
                  >
                    {link.label}
                  </Link>

                  {/* Hover dropdown */}
                  {hasMenu && isMenuOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-max"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}>
                      <div className="h-2 w-full" />
                      <div className="bg-white shadow-lg border border-gray-100 rounded-b-xl overflow-hidden"
                        style={{ minWidth: 600 }}>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-gray-100 px-6 py-3">
                          {link.megaMenu!.topLinks.map((sub) => (
                            <Link key={sub.label} href={sub.href}
                              className="whitespace-nowrap text-[13px] text-gray-700 font-light hover:text-[#1E4080] transition-colors">
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                        {link.megaMenu!.sideLinks.length > 0 && (
                          <div className="flex flex-col px-6 py-4 gap-2.5">
                            {link.megaMenu!.sideLinks.map((sub) => (
                              <Link key={sub.label} href={sub.href}
                                className="text-[13px] font-light text-[#1E4080] hover:underline transition-colors w-fit">
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* RIGHT: search + lang + mobile burger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop search */}
            <div className="hidden md:flex relative items-center"
              onMouseEnter={() => setSearchHovered(true)}
              onMouseLeave={() => setSearchHovered(false)}>
              <div className={`absolute right-full mr-1 overflow-hidden transition-all duration-300 ${searchVisible ? "w-44 opacity-100" : "w-0 opacity-0"}`}>
                <input type="text" placeholder="Поиск..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-full rounded-full border border-gray-300 focus:border-[#1B2A4A] px-3 py-1.5 text-[13px] outline-none bg-white" />
              </div>
              <button aria-label="Поиск" className="p-1.5 text-[#1B2A4A] relative z-10">
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile search */}
            <div className="flex md:hidden items-center">
              {mobileSearchOpen ? (
                <div className="flex items-center gap-1">
                  <input autoFocus type="text" placeholder="Поиск..."
                    onBlur={() => setMobileSearchOpen(false)}
                    className="w-36 rounded-full border border-gray-300 px-3 py-1.5 text-[12px] outline-none" />
                  <button onMouseDown={() => setMobileSearchOpen(false)} className="p-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E4080" strokeWidth="1.5" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              ) : (
                <button onClick={() => setMobileSearchOpen(true)} className="p-1.5 text-[#1B2A4A]">
                  <SearchIcon className="w-5 h-5" />
                </button>
              )}
            </div>

            <button className="hidden md:flex items-center justify-center px-4 py-1.5 bg-[#1E4080] text-white text-[13px] font-light rounded-full border border-transparent hover:bg-white hover:border-[#1E4080] hover:text-[#1E4080] transition-colors whitespace-nowrap">
              Рус
            </button>

            {!mobileSearchOpen && (
              <button className="md:hidden p-1.5 text-[#1E4080]"
                onClick={() => setMenuOpen((v) => !v)} aria-label="Меню">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  {menuOpen
                    ? (<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>)
                    : (<><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>)}
                </svg>
              </button>
            )}
          </div>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className={`block px-8 py-3 text-[14px] border-b border-gray-50 ${pathname === link.href ? "font-semibold text-[#1E4080] bg-gray-50" : "font-light text-gray-600"}`}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* ─────────────────── MEGA MENU PANEL ─────────────────── */}

      {/* Backdrop */}
      <div
        onClick={() => setMegaOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/30 transition-opacity duration-200 ${megaOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Panel — drops down from top, sits just below the navbar (64px) */}
      <div
        className={`fixed left-0 right-0 top-0 z-[65] bg-white shadow-xl border-b border-gray-100 transition-transform duration-300 ease-in-out overflow-y-auto ${megaOpen ? "translate-y-0" : "-translate-y-full"}`}
        style={{ paddingTop: 50, maxHeight: "80vh" }}
      >
        <div className="max-w-7xl mx-auto px-8 py-8">

          {/* Close row */}
          <div className="flex items-center justify-between mb-6">
            <span className=" text-gray-500 font-light">Все разделы сайта</span>
            <button
              onClick={() => setMegaOpen(false)}
              className="flex items-center gap-2 text-gray-500 hover:text-[#1E4080] transition-colors"
            >
              Закрыть
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Columns */}
          <div className="grid gap-x-8 gap-y-8"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))" }}>
            {menuColumns.map((col) => {
              const isActive = isLinkActive(pathname, col.href);
              return (
                <div key={col.href}>
                  {/* Section title */}
                  <div className="pb-2 mb-3 border-b border-gray-200">
                    <Link
                      href={col.href}
                      onClick={() => setMegaOpen(false)}
                      className={`text-lg font-bold transition-colors hover:text-[#1E4080] ${isActive ? "text-[#1E4080]" : "text-[#111c36]"}`}
                    >
                      {col.label}
                    </Link>
                  </div>

                  {/* Sub-links */}
                  {col.subLinks && (
                    <ul className="flex flex-col gap-2">
                      {col.subLinks.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            onClick={() => setMegaOpen(false)}
                            className="font-light text-gray-600 hover:text-[#1E4080] transition-colors leading-snug block"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* Social icons row at bottom */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
            <span className="text-[13px] text-gray-400 font-light">Мы в соцсетях:</span>
            <a href="#" aria-label="Facebook"
              className="w-8 h-8 bg-[#1E4080] rounded-full flex items-center justify-center hover:bg-[#2a4d8f] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram"
              className="w-8 h-8 bg-[#1E4080] rounded-full flex items-center justify-center hover:bg-[#2a4d8f] transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok"
              className="w-8 h-8 bg-[#1E4080] rounded-full flex items-center justify-center hover:bg-[#2a4d8f] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
