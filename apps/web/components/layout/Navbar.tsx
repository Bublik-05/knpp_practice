"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useRef } from "react";
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
  { label: "Закупки", href: "/procurements" },
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
      ],
      sideLinks: [],
    },
  },
  { label: "Вакансии", href: "/vacancies" },
  { label: "Контакты", href: "/contacts" },
];

function isLinkActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSection = searchParams.get("section");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchHovered, setSearchHovered] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchVisible = searchHovered || searchFocused;

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-3 h-16 flex items-center justify-between gap-2">

        {/* Logo — fixed size, never shrinks */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/KNPP.png"
            alt="KNPP"
            width={90}
            height={56}
            style={{ width: 90, height: "auto" }}
            priority
          />
        </Link>

        {/* Desktop nav links — nowrap, never wraps to second line */}
        <ul className="hidden md:flex items-center gap-0 flex-nowrap">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const hasMenu = !!link.megaMenu;
            const isMenuOpen = activeMenu === link.label;

            return (
              <li
                key={link.href}
                className="relative shrink-0"
                onMouseEnter={() => hasMenu && handleMouseEnter(link.label)}
                onMouseLeave={() => hasMenu && handleMouseLeave()}
              >
                <Link
                  href={link.href}
                  className={`px-3 py-1.5 text-[15px] whitespace-nowrap rounded transition-colors flex items-center ${isActive || isMenuOpen
                    ? "font-medium text-[#1E4080]"
                    : "font-light text-gray-600 hover:text-[#1E4080]"
                    }`}
                >
                  {link.label}
                </Link>

                {/* Mega menu dropdown */}
                {hasMenu && isMenuOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full w-max"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* invisible bridge gap */}
                    <div className="h-2 w-full" />
                    <div
                      className="bg-white shadow-lg border border-gray-100 rounded-b-xl overflow-hidden"
                      style={{ minWidth: "680px" }}
                    >
                      {/* Top row */}
                      <div className="flex items-center border-b border-gray-100 px-6 py-3">
                        {link.megaMenu!.topLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="whitespace-nowrap text-[14px] text-gray-700 font-light hover:text-[#1E4080] transition-colors px-4 first:pl-0 border-r border-gray-200 last:border-none"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                      {/* Side links */}
                      <div className="flex flex-col px-6 py-4 gap-3">
                        {link.megaMenu!.sideLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="text-[14px] font-light text-[#1E4080] hover:underline transition-colors w-fit"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2 shrink-0">

          {/* ── DESKTOP SEARCH — expands leftward, no layout shift ── */}
          <div
            className="hidden md:flex relative items-center"
            onMouseEnter={() => setSearchHovered(true)}
            onMouseLeave={() => setSearchHovered(false)}
          >
            {/* input: absolute, grows left from icon */}
            <div
              className={`absolute right-full mr-1 overflow-hidden transition-all duration-300 ease-in-out ${searchVisible ? "w-44 opacity-100" : "w-0 opacity-0"
                }`}
            >
              <input
                type="text"
                placeholder="Поиск..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full rounded-full border border-gray-400 focus:border-[#1B2A4A] px-3 py-1.5 text-[13px] outline-none transition-colors bg-white"
              />
            </div>
            <button aria-label="Поиск" className="p-2 text-[#1B2A4A] relative z-10">
              <SearchIcon className="w-6 h-6" />
            </button>
          </div>

          {/* ── MOBILE SEARCH — icon toggles to input ── */}
          <div className="flex md:hidden items-center">
            {mobileSearchOpen ? (
              /* Input + close button */
              <div className="flex items-center gap-1">
                <input
                  autoFocus
                  type="text"
                  placeholder="Поиск..."
                  onBlur={() => setMobileSearchOpen(false)}
                  className="w-40 rounded-full border border-gray-400 focus:border-[#1B2A4A] px-3 py-2 text-[12px] outline-none transition-colors"
                />
                <button
                  onMouseDown={() => setMobileSearchOpen(false)}
                  aria-label="Закрыть поиск"
                  className="p-1 text-gray-500"
                >
                  <svg width="23" height="23" viewBox="0 0 24 24" fill="none"
                    stroke="#1E4080" strokeWidth="1" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            ) : (
              /* Magnifying glass */
              <button
                onClick={() => setMobileSearchOpen(true)}
                aria-label="Поиск"
                className="p-2 text-[#1B2A4A]"
              >
                <SearchIcon className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Language toggle — border-transparent reserves space, no shift on hover */}
          <button className="hidden md:flex items-center justify-center px-4 py-1.5 bg-[#1E4080] text-white text-[13px] font-light rounded-full border border-transparent hover:bg-white hover:border-[#1E4080] hover:text-black transition-colors whitespace-nowrap">
            Рус
          </button>

          {/* Burger (mobile) — hidden while search input is open */}
          {!mobileSearchOpen && (
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Меню"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="#1E4080" strokeWidth="1" strokeLinecap="round">
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-6 py-3 text-[14px] border-b border-gray-50 ${isActive
                      ? "font-semibold text-[#1B2A4A] bg-gray-50"
                      : "text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    {link.label}
                  </Link>
                  {link.megaMenu && (
                    <ul className="bg-gray-50">
                      {link.megaMenu.sideLinks.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setMenuOpen(false)}
                            className="block px-10 py-2 text-[13px] text-gray-500 border-b border-gray-100 hover:text-[#1E4080]"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
            <li className="px-6 py-4">
              <button className="px-5 py-1.5 bg-[#1B2A4A] text-white text-[13px] font-medium rounded-full">
                Рус
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
