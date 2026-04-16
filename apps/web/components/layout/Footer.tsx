"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <footer className="bg-[#112250] text-[#F5F0E9]">
      {/* Main section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* ── Left: logo + contacts ── */}
          <div className="flex flex-col gap-6 min-w-[520px]">
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
            <div className="flex items-start gap-3 text-[#F5F0E9]/90 font-light leading-snug">
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
            <div className="flex items-center gap-3 text-[#F5F0E9]/90 font-light">
              <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              <a href="mailto:kense@knpp.kz" className="underline underline-offset-2 hover:text-[#F5F0E9] transition-colors">
                kense@knpp.kz
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-[#F5F0E9]/90 font-light">
              <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013.09 4.18 2 2 0 015.09 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006.99 7l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>+7 (7172) 24 84 50</span>
            </div>

            {/* Yandex map embed */}
            <div className="w-full rounded overflow-hidden" style={{ height: "200px" }}>
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

          {/* ── Right: contact form ── */}
          <div className="flex-1 max-w-[540px]">
            <h2 className="text-3xl font-bold text-white mb-2 leading-snug">
              Не нашли то что нужно?
            </h2>
            <p className="text-[#D9CBC2] font-light text-xl mb-6">
              Свяжитесь с нами
            </p>

            {submitted ? (
              <div className="bg-[#3C507D]/40 border border-[#E0C58F]/30 rounded-xl px-8 py-10 text-center">
                <svg className="mx-auto mb-4" width="40" height="40" viewBox="0 0 24 24"
                  fill="none" stroke="#F5F0E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p className="text-[#F5F0E9] text-lg font-light">
                  Спасибо! Ваша заявка отправлена.
                </p>
                <p className="text-[#D9CBC2]/80 text-[14px] mt-2 font-light">
                  Мы свяжемся с вами в ближайшее время.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 border border-white/40 rounded-full text-[#D9CBC2] text-[14px] font-light hover:bg-[#E0C58F]/10 transition-colors"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full bg-[#3C507D] border border-[#D9CBC2] rounded-lg px-4 py-3 text-[#2C2C3A] placeholder-[#D9CBC2] text-[15px] font-light outline-none focus:border-[#E0C58F] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full bg-[#3C507D] border border-[#D9CBC2] rounded-lg px-4 py-3 text-[#2C2C3A] placeholder-[#D9CBC2] text-[15px] font-light outline-none focus:border-[#E0C58F] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="w-full bg-[#3C507D] border border-[#D9CBC2] rounded-lg px-4 py-3 text-[#2C2C3A] placeholder-[#D9CBC2] text-[15px] font-light outline-none focus:border-[#E0C58F] transition-colors"
                />
                <textarea
                  placeholder="Ваше сообщение"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full bg-[#3C507D] border border-[#D9CBC2] rounded-lg px-4 py-3 text-[#2C2C3A] placeholder-[#D9CBC2] text-[15px] font-light outline-none focus:border-[#E0C58F] transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="self-start px-8 py-3 bg-[#E0C58F] text-[#112250] text-[15px] font-medium rounded-full hover:bg-[#C9B07A] transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[#3C507D]">
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* Developer credit */}
          <p className="text-[#D9CBC2] font-light text-[14px]">
            Разработчик{" "}
            <a href="#" className="font-medium underline underline-offset-2 text-[#E0C58F] hover:text-[#F5F0E9] transition-colors">
              ТОО «BenchMark Consulting»
            </a>
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[#D9CBC2] text-[14px] font-light">Соц. сети:</span>
                    
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 bg-[#3C507D] rounded-full flex items-center justify-center text-[#F5F0E9] hover:bg-[#F5F0E9] hover:text-[#112250] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
                    
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 bg-[#3C507D] rounded-full flex items-center justify-center text-[#F5F0E9] hover:bg-[#F5F0E9] hover:text-[#112250] transition-colors"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
                    
            <a
              href="#"
              aria-label="TikTok"
              className="w-9 h-9 bg-[#3C507D] rounded-full flex items-center justify-center text-[#F5F0E9] hover:bg-[#F5F0E9] hover:text-[#112250] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
