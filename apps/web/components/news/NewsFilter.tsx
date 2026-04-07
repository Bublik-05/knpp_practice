"use client";

import { useState, useEffect, useRef } from "react";

export type FilterKey = "Новости" | "События" | "Пресс-релизы";

interface Props {
  active: FilterKey;
  onChange: (f: FilterKey) => void;
  counts: Record<FilterKey, number>;
}

const tabs: FilterKey[] = ["Новости", "События", "Пресс-релизы"];

const categoryOptions = [
  "Ядерная энергетика",
  "Экология",
  "Безопасность",
  "Технологии",
];

const directionOptions = [
  "Проектирование",
  "Строительство",
  "Эксплуатация",
  "Регулирование",
];

const MONTHS_SHORT = [
  "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
  "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек",
];

/* ── Кастомный пикер месяц / год ──────────────────────── */
interface MonthYear { year: number; month: number }

interface PickerProps {
  value: MonthYear | null;
  onChange: (v: MonthYear | null) => void;
  placeholder: string;
  alignRight?: boolean;
}

function MonthYearPicker({ value, onChange, placeholder, alignRight }: PickerProps) {
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(value?.year ?? new Date().getFullYear());
  const [yearDraft, setYearDraft] = useState(String(value?.year ?? new Date().getFullYear()));
  const containerRef = useRef<HTMLDivElement>(null);

  // Закрыть при клике вне
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node))
        setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Синхронизировать черновик года при открытии
  function handleOpen() {
    const y = value?.year ?? new Date().getFullYear();
    setViewYear(y);
    setYearDraft(String(y));
    setOpen(true);
  }

  function stepYear(delta: number) {
    setViewYear((y) => {
      const next = y + delta;
      setYearDraft(String(next));
      return next;
    });
  }

  function handleYearType(raw: string) {
    setYearDraft(raw);
    const n = parseInt(raw, 10);
    if (!isNaN(n) && n >= 1900 && n <= 2100) setViewYear(n);
  }

  function pickMonth(month: number) {
    onChange({ year: viewYear, month });
    setOpen(false);
  }

  const label = value ? `${MONTHS_SHORT[value.month - 1]} ${value.year}` : "";

  return (
    <div ref={containerRef} className="relative flex-1 min-w-0">
      {/* Поле ввода */}
      <input
        type="text"
        readOnly
        placeholder={placeholder}
        value={label}
        onClick={handleOpen}
        className="w-full bg-transparent outline-none border-none text-[14px] text-gray-700 placeholder-gray-400 cursor-pointer caret-transparent"
      />

      {/* Дропдаун */}
      {open && (
        <div
          className={`absolute top-full z-50 mt-2 bg-white rounded-2xl shadow-2xl p-4 w-[220px] ${alignRight ? "right-0" : "left-0"
            }`}
        >
          {/* Навигация по году */}
          <div className="flex items-center justify-between mb-3">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => stepYear(-1)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-lg font-light"
            >
              ‹
            </button>

            <input
              type="text"
              value={yearDraft}
              onChange={(e) => handleYearType(e.target.value)}
              onMouseDown={(e) => e.stopPropagation()}
              className="w-16 text-center text-[15px] font-semibold text-gray-900 outline-none border-b border-gray-200 bg-transparent pb-0.5"
            />

            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => stepYear(1)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-lg font-light"
            >
              ›
            </button>
          </div>

          {/* Сетка месяцев */}
          <div className="grid grid-cols-3 gap-1">
            {MONTHS_SHORT.map((m, i) => {
              const isActive = value?.year === viewYear && value?.month === i + 1;
              return (
                <button
                  key={m}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => pickMonth(i + 1)}
                  className={`py-2 rounded-lg text-[13px] font-medium transition-colors duration-100 ${isActive
                      ? "bg-[#1E4080] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  {m}
                </button>
              );
            })}
          </div>

          {/* Кнопка сброса */}
          {value && (
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => { onChange(null); setOpen(false); }}
              className="mt-3 w-full text-[12px] text-gray-400 hover:text-red-400 transition-colors text-center"
            >
              Очистить
            </button>
          )}
        </div>
      )}
    </div>
  );
}

/* ── Основной компонент фильтра ───────────────────────── */
export default function NewsFilter({ active, onChange }: Props) {
  const [keyword, setKeyword] = useState("");
  const [dateFrom, setDateFrom] = useState<{ year: number; month: number } | null>(null);
  const [dateTo, setDateTo] = useState<{ year: number; month: number } | null>(null);
  const [category, setCategory] = useState("");
  const [direction, setDirection] = useState("");

  function handleApply() {
    // Расширить при необходимости
  }

  return (
    <aside className="px-8 shrink-0">
      <div
        className="sticky top-16 pt-10"
        style={{ height: "calc(100vh - 4rem)", overflowY: "auto" }}
      >
        {/* Card */}
        <div className="bg-white rounded-lg shadow-sm flex flex-col gap-3">

          {/* ── Табы ── */}
          <div className="flex rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onChange(tab)}
                className={`
                  flex-1 font-medium py-3 px-3 rounded-t-lg
                  transition-colors duration-150 whitespace-nowrap text-[14px]
                  ${active === tab
                    ? "bg-[#1E4080] text-white"
                    : "text-gray-600 hover:text-gray-800"}
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col p-6 gap-6">

            {/* ── Ключевые слова ── */}
            <div className="flex flex-col gap-2">
              <label className="text-[15px] font-semibold text-gray-900">
                Ключевые слова
              </label>
              <input
                type="text"
                placeholder="Ключевые слова"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full bg-gray-100 rounded-xl px-4 py-3 text-[14px] text-gray-700 placeholder-gray-400 outline-none border-none"
              />
            </div>

            {/* ── Период публикации ── */}
            <div className="flex flex-col gap-2">
              <label className="text-[15px] font-semibold text-gray-900">
                Период публикации
              </label>
              <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 gap-2">
                <MonthYearPicker
                  value={dateFrom}
                  onChange={setDateFrom}
                  placeholder="Начало"
                />
                <span className="text-gray-400 text-[14px] shrink-0">→</span>
                <MonthYearPicker
                  value={dateTo}
                  onChange={setDateTo}
                  placeholder="Конец"
                  alignRight
                />
                {/* Иконка календаря */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
            </div>

            {/* ── Категория деятельности ── */}
            <div className="flex flex-col gap-2">
              <label className="text-[15px] font-semibold text-gray-900">
                Категория деятельности
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-gray-100 rounded-xl px-4 py-3 text-[14px] outline-none border-none appearance-none"
                style={{ color: category ? "#374151" : "#9ca3af" }}
              >
                <option value="" disabled hidden>Не выбрано</option>
                {categoryOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-gray-800">{opt}</option>
                ))}
              </select>
            </div>

            {/* ── Направление ── */}
            <div className="flex flex-col gap-2">
              <label className="text-[15px] font-semibold text-gray-900">
                Направление
              </label>
              <select
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
                className="w-full bg-gray-100 rounded-xl px-4 py-3 text-[14px] outline-none border-none appearance-none"
                style={{ color: direction ? "#374151" : "#9ca3af" }}
              >
                <option value="" disabled hidden>Не выбрано</option>
                {directionOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-gray-800">{opt}</option>
                ))}
              </select>
            </div>

            {/* ── Применить ── */}
            <button
              onClick={handleApply}
              className="w-full bg-[#1E4080] text-white py-4 rounded-xl text-[15px] font-medium hover:bg-[#163366] transition-colors duration-150"
            >
              Применить
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
