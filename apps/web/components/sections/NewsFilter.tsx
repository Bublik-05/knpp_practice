"use client";

import { useState } from "react";

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

export default function NewsFilter({ active, onChange }: Props) {
  const [keyword, setKeyword] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [category, setCategory] = useState("");
  const [direction, setDirection] = useState("");

  function handleApply() {
    // Применение доп. фильтров — расширить при необходимости
  }

  return (
    <aside className="shrink-0">
      <div
        className="sticky top-16 pt-10"
        style={{ height: "calc(100vh - 4rem)", overflowY: "auto" }}
      >
        {/* Card */}
        <div className="bg-white rounded-lg shadow-sm flex flex-col gap-3">

          {/* ── Tabs ── */}
          <div className="flex rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onChange(tab)}
                className={`
                  flex-1 font-medium py-3 px-3 rounded-t-lg
                  transition-colors duration-150 whitespace-nowrap
                  ${
                    active === tab
                      ? "bg-[#1E4080] text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-800"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex flex-col p-6 gap-6">

            {/* ── Ключевые слова ── */}
            <div className="flex flex-col gap-2">
              <label className="text-[15px] font-semibold text-gray-900 font-[family-name:var(--font-tt-firs)]">
                Ключевые слова
              </label>
              <input
                type="text"
                placeholder="Ключевые слова"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="
                  w-full bg-gray-100 rounded-xl px-4 py-3
                  text-[14px] text-gray-700 placeholder-gray-400
                  outline-none border-none
                  font-[family-name:var(--font-tt-firs)]
                "
              />
            </div>

            {/* ── Период публикации ── */}
            <div className="flex flex-col gap-2">
              <label className="text-[15px] font-semibold text-gray-900 font-[family-name:var(--font-tt-firs)]">
                Период публикации
              </label>
              <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 gap-2">
                <input
                  type="text"
                  placeholder="Начальная дата"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
                  className="
                    flex-1 bg-transparent outline-none border-none
                    text-[14px] text-gray-700 placeholder-gray-400 min-w-0
                    font-[family-name:var(--font-tt-firs)]
                  "
                />
                <span className="text-gray-400 text-[14px] shrink-0">→</span>
                <input
                  type="text"
                  placeholder="Конечная дата"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
                  className="
                    flex-1 bg-transparent outline-none border-none
                    text-[14px] text-gray-700 placeholder-gray-400 min-w-0
                    font-[family-name:var(--font-tt-firs)]
                  "
                />
                {/* Calendar icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              </div>
            </div>

            {/* ── Категория деятельности ── */}
            <div className="flex flex-col gap-2">
              <label className="text-[15px] font-semibold text-gray-900 font-[family-name:var(--font-tt-firs)]">
                Категория деятельности
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
                  w-full bg-gray-100 rounded-xl px-4 py-3
                  text-[14px] placeholder-gray-400 outline-none border-none
                  appearance-none
                  font-[family-name:var(--font-tt-firs)]
                  text-gray-400
                "
                style={{ color: category ? "#374151" : "#9ca3af" }}
              >
                <option value="" disabled hidden>Не выбрано</option>
                {categoryOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-gray-800">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* ── Направление ── */}
            <div className="flex flex-col gap-2">
              <label className="text-[15px] font-semibold text-gray-900 font-[family-name:var(--font-tt-firs)]">
                Направление
              </label>
              <select
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
                className="
                  w-full bg-gray-100 rounded-xl px-4 py-3
                  text-[14px] outline-none border-none
                  appearance-none
                  font-[family-name:var(--font-tt-firs)]
                "
                style={{ color: direction ? "#374151" : "#9ca3af" }}
              >
                <option value="" disabled hidden>Не выбрано</option>
                {directionOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-gray-800">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            {/* ── Применить ── */}
            <button
              onClick={handleApply}
              className="
                w-full bg-[#1E4080] text-white
                py-4 rounded-xl text-[15px] font-medium
                hover:bg-[#163366] transition-colors duration-150
                font-[family-name:var(--font-tt-firs)]
              "
            >
              Применить
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
