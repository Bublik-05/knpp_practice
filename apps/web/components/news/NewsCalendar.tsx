"use client";

import { useState, useMemo } from "react";
import type { NewsItem } from "@/lib/news";

interface Props {
  items: NewsItem[];
  onDateSelect: (date: string | null) => void;
  selectedDate: string | null;
}

const MONTH_NAMES = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
];

const DAY_NAMES = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

/**
 * Normalise a date string from NewsItem to "YYYY-MM-DD".
 * Handles two known formats:
 *   - ISO:       "2026-02-09"   (from API)
 *   - DD.MM.YYYY "09.02.2026"   (fallback data)
 */
function normaliseDateStr(raw: string): string | null {
  if (!raw || raw === "Без даты") return null;

  // ISO or ISO-datetime: starts with 4-digit year
  if (/^\d{4}-\d{2}-\d{2}/.test(raw)) {
    return raw.slice(0, 10);
  }

  // DD.MM.YYYY
  const match = raw.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (match) {
    return `${match[3]}-${match[2]}-${match[1]}`;
  }

  return null;
}

export default function NewsCalendar({ items, onDateSelect, selectedDate }: Props) {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-based

  // Set of "YYYY-MM-DD" strings that have at least one news item
  const datesWithNews = useMemo(() => {
    const set = new Set<string>();
    for (const item of items) {
      const d = normaliseDateStr(item.date);
      if (d) set.add(d);
    }
    return set;
  }, [items]);

  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  // Navigation
  const goPrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const goNext = () => {
    const isCurrentMonth =
      currentYear === today.getFullYear() && currentMonth === today.getMonth();
    if (isCurrentMonth) return; // don't go into the future

    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const isNextDisabled =
    currentYear === today.getFullYear() && currentMonth === today.getMonth();

  // Build calendar grid (Mon-first)
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const totalDays = lastDay.getDate();

  // Weekday of the 1st: 0=Sun..6=Sat → convert to Mon=0..Sun=6
  let startWeekday = firstDay.getDay() - 1;
  if (startWeekday < 0) startWeekday = 6;

  // Days from the previous month to fill the first row
  const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();

  const cells: { day: number; type: "prev" | "current" | "next" }[] = [];

  for (let i = startWeekday - 1; i >= 0; i--) {
    cells.push({ day: prevMonthLastDay - i, type: "prev" });
  }
  for (let d = 1; d <= totalDays; d++) {
    cells.push({ day: d, type: "current" });
  }
  const remaining = 7 - (cells.length % 7);
  if (remaining < 7) {
    for (let d = 1; d <= remaining; d++) {
      cells.push({ day: d, type: "next" });
    }
  }

  const handleDayClick = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    if (!datesWithNews.has(dateStr)) return;
    onDateSelect(selectedDate === dateStr ? null : dateStr);
  };

  return (
    <div className="rounded-lg bg-white border border-gray-200 p-4 shadow-sm select-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={goPrev}
          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500"
          aria-label="Предыдущий месяц"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="font-medium text-gray-900 text-sm">
          {MONTH_NAMES[currentMonth]} {currentYear}
        </span>

        <button
          type="button"
          onClick={goNext}
          disabled={isNextDisabled}
          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Следующий месяц"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 mb-1">
        {DAY_NAMES.map((d) => (
          <div key={d} className="text-xs text-gray-400 text-center py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-y-0.5">
        {cells.map((cell, idx) => {
          if (cell.type !== "current") {
            return (
              <div key={`${cell.type}-${cell.day}-${idx}`} className="w-8 h-8 flex items-center justify-center text-sm text-gray-300 mx-auto">
                {cell.day}
              </div>
            );
          }

          const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(cell.day).padStart(2, "0")}`;
          const hasNews = datesWithNews.has(dateStr);
          const isSelected = selectedDate === dateStr;
          const isToday = dateStr === todayStr;

          let cls =
            "w-8 h-8 flex items-center justify-center text-sm rounded-full mx-auto transition-colors";

          if (isSelected) {
            cls += " bg-[#1E4080] text-white";
          } else if (hasNews) {
            cls += " bg-[#eef4ff] text-[#1E4080] font-medium cursor-pointer hover:bg-[#1E4080] hover:text-white";
          } else {
            cls += " text-gray-600";
          }

          if (isToday && !isSelected) {
            cls += " ring-1 ring-[#1E4080]";
          }

          return (
            <button
              key={dateStr}
              type="button"
              onClick={() => handleDayClick(cell.day)}
              className={cls}
              aria-pressed={isSelected}
              aria-label={`${cell.day} ${MONTH_NAMES[currentMonth]}${hasNews ? ", есть новости" : ""}`}
            >
              {cell.day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
