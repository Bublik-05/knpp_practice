"use client";

import { useMemo, useState } from "react";

export type FilterKey = "Календарь событий" | "Мультимедиа";

interface Props {
  active: FilterKey;
  onChange: (f: FilterKey) => void;
  counts: Partial<Record<FilterKey, number>>;
}

const tabs: FilterKey[] = ["Календарь событий", "Мультимедиа"];

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

const WEEK_DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const MONTHS_FULL = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

function getDateKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function getCalendarDays(viewDate: Date) {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const firstWeekDay = (firstDay.getDay() + 6) % 7;
  const startDate = new Date(year, month, 1 - firstWeekDay);

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + index);
    return day;
  });
}

// Пока это просто макетная подсветка.
// Потом сюда можно подставить реальные даты новостей.
function getHighlightedKeys(year: number, month: number) {
  return new Set(
    [3, 7, 12, 18, 24, 28].map((day) => {
      const m = String(month + 1).padStart(2, "0");
      const d = String(day).padStart(2, "0");
      return `${year}-${m}-${d}`;
    })
  );
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function CalendarBlock() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [viewDate, setViewDate] = useState<Date>(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const calendarDays = useMemo(() => getCalendarDays(viewDate), [viewDate]);
  const highlightedKeys = useMemo(
    () => getHighlightedKeys(viewDate.getFullYear(), viewDate.getMonth()),
    [viewDate]
  );

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, i) => currentYear - 10 + i);

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleYearChange = (year: number) => {
    setViewDate(new Date(year, viewDate.getMonth(), 1));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-white"
            aria-label="Предыдущий месяц"
          >
            ‹
          </button>

          <div className="flex items-center gap-2">
            <span className="min-w-[96px] text-center text-[15px] font-semibold text-gray-900">
              {MONTHS_FULL[viewDate.getMonth()]}
            </span>

            <select
              value={viewDate.getFullYear()}
              onChange={(e) => handleYearChange(Number(e.target.value))}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-[13px] text-gray-700 outline-none"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={handleNextMonth}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-white"
            aria-label="Следующий месяц"
          >
            ›
          </button>
        </div>

        <div className="flex flex-col gap-2 pt-4">
          <div className="grid grid-cols-7 gap-1">
            {WEEK_DAYS.map((day) => (
              <div
                key={day}
                className="flex h-9 items-center justify-center text-[12px] font-medium text-gray-400"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day) => {
              const isCurrentMonth = day.getMonth() === viewDate.getMonth();
              const isSelected = isSameDay(day, selectedDate);
              const key = getDateKey(day);
              const hasNews = highlightedKeys.has(key);

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedDate(day)}
                  className={`relative h-10 rounded-lg text-[13px] transition-colors ${isSelected
                    ? "bg-[#1E4080] text-white"
                    : isCurrentMonth
                      ? hasNews
                        ? "bg-[#EAF1FF] text-[#1E4080] hover:bg-[#dce8ff]"
                        : "text-gray-700 hover:bg-white"
                      : hasNews
                        ? "bg-[#F4F7FF] text-[#90A3C7] hover:bg-white"
                        : "text-gray-300 hover:bg-white"
                    }`}
                >
                  {day.getDate()}

                  {hasNews && !isSelected && (
                    <span className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#1E4080]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-gray-100 px-4 py-3">
        <p className="text-[14px] text-gray-700">{formatDate(selectedDate)}</p>
      </div>
    </div>
  );
}

/* ── Основной компонент фильтра ───────────────────────── */
export default function NewsFilter({ active, onChange }: Props) {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [direction, setDirection] = useState("");

  function handleApply() {
    // расширить при необходимости
  }

  return (
    <aside className="px-8 shrink-0">
      <div className="sticky ">
        <div className="flex flex-col gap-3 rounded-lg bg-white shadow-sm">
          <div className="flex rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onChange(tab)}
                className={`
                  flex-1 whitespace-nowrap rounded-t-lg px-3 py-3 text-[14px] font-medium
                  transition-colors duration-150
                  ${active === tab
                    ? "bg-[#1E4080] text-white"
                    : "text-gray-600 hover:text-gray-800"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6 p-6">
            <div className="flex flex-col gap-2">
              <label className="text-[15px] font-semibold text-gray-900">
                Ключевые слова
              </label>
              <input
                type="text"
                placeholder="Ключевые слова"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full rounded-xl border-none bg-gray-100 px-4 py-3 text-[14px] text-gray-700 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[15px] font-semibold text-gray-900">
                Дата публикации
              </label>

              <CalendarBlock />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[15px] font-semibold text-gray-900">
                Категория деятельности
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full appearance-none rounded-xl border-none bg-gray-100 px-4 py-3 text-[14px] outline-none"
                style={{ color: category ? "#374151" : "#9ca3af" }}
              >
                <option value="" disabled hidden>
                  Не выбрано
                </option>
                {categoryOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-gray-800">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[15px] font-semibold text-gray-900">
                Направление
              </label>
              <select
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
                className="w-full appearance-none rounded-xl border-none bg-gray-100 px-4 py-3 text-[14px] outline-none"
                style={{ color: direction ? "#374151" : "#9ca3af" }}
              >
                <option value="" disabled hidden>
                  Не выбрано
                </option>
                {directionOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-gray-800">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleApply}
              className="w-full rounded-xl bg-[#1E4080] py-4 text-[15px] font-medium text-white transition-colors duration-150 hover:bg-[#163366]"
            >
              Применить
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
