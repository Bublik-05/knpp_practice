"use client";

import { useState, useMemo, useEffect } from "react";
import NewsFilter, { type FilterKey } from "../news/NewsFilter";
import NewsGrid from "../news/NewsGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import NewsCalendar from "@/components/news/NewsCalendar";
import MediaSection from "@/components/news/MediaSection";
import type { NewsItem } from "@/lib/news";

interface Props {
  items: NewsItem[];
}

const ITEMS_PER_PAGE = 9;

type ActiveTab = "news" | "media";

/**
 * Normalise a date string to "YYYY-MM-DD" for comparison.
 * Handles ISO ("2026-02-09") and DD.MM.YYYY ("09.02.2026").
 */
function normaliseDateStr(raw: string): string | null {
  if (!raw || raw === "Без даты") return null;
  if (/^\d{4}-\d{2}-\d{2}/.test(raw)) return raw.slice(0, 10);
  const match = raw.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (match) return `${match[3]}-${match[2]}-${match[1]}`;
  return null;
}

export default function NewsContent({ items }: Props) {
  const [filter, setFilter] = useState<FilterKey>("Новости");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<ActiveTab>("news");
  const [filterDate, setFilterDate] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = items.filter((n) => n.category === filter);
    if (filterDate) {
      result = result.filter((n) => normaliseDateStr(n.date) === filterDate);
    }
    return result;
  }, [filter, items, filterDate]);

  const counts: Record<FilterKey, number> = useMemo(
    () => ({
      Новости: items.filter((n) => n.category === "Новости").length,
      События: items.filter((n) => n.category === "События").length,
      "Пресс-релизы": items.filter((n) => n.category === "Пресс-релизы").length,
    }),
    [items],
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    if (filterDate) return filtered; // show all results when date is selected
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filtered.slice(start, end);
  }, [filtered, currentPage, filterDate]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, filterDate]);

  const handleDateSelect = (date: string | null) => {
    setFilterDate(date);
  };

  return (
    <div className="flex flex-col md:flex-row flex-1 w-full">
      {/* Sidebar (NewsFilter) — only visible on news tab, hidden on mobile */}
      {activeTab === "news" && (
        <div className="hidden md:block">
          <NewsFilter active={filter} onChange={setFilter} counts={counts} />
        </div>
      )}

      <div className="flex-1 p-4 md:p-10">
        <Breadcrumb
          items={[{ label: "Пресс-центр" }]}
          className="mb-6"
        />

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab("news")}
            className={`rounded-lg px-6 py-2.5 font-medium transition-colors text-lg ${
              activeTab === "news"
                ? "bg-[#1E4080] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Новости
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("media")}
            className={`rounded-lg px-6 py-2.5 font-medium transition-colors text-lg ${
              activeTab === "media"
                ? "bg-[#1E4080] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Мультимедиа
          </button>
        </div>

        {/* Mobile filter tabs */}
        {activeTab === "news" && (
          <div className="flex md:hidden gap-2 mb-4 overflow-x-auto pb-1">
            {(["Новости", "События", "Пресс-релизы"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  filter === f ? "bg-[#1E4080] text-white" : "bg-gray-100 text-gray-600"
                }`}
              >
                {f} ({counts[f]})
              </button>
            ))}
          </div>
        )}

        {activeTab === "news" && (
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Calendar sidebar */}
            <div className="w-full lg:w-72 lg:shrink-0">
              <NewsCalendar
                items={items}
                onDateSelect={handleDateSelect}
                selectedDate={filterDate}
              />
            </div>

            {/* News content */}
            <div className="flex-1 min-w-0">
              <div className="mb-8">
                <h1 className="text-5xl font-bold text-gray-900">
                  {filter}
                </h1>
                <p className="font-light text-gray-500 mt-1">
                  {filterDate
                    ? `${filtered.length} ${
                        filtered.length === 1
                          ? "публикация"
                          : filtered.length < 5
                            ? "публикации"
                            : "публикаций"
                      } за выбранную дату`
                    : `${filtered.length} ${
                        filtered.length === 1
                          ? "публикация"
                          : filtered.length < 5
                            ? "публикации"
                            : "публикаций"
                      }`}
                </p>
              </div>

              <NewsGrid items={paginatedItems} />

              {/* Pagination — hide when date is selected */}
              {!filterDate && totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Назад
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    const isActive = page === currentPage;
                    return (
                      <button
                        key={page}
                        type="button"
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg transition-colors ${
                          isActive
                            ? "bg-[#1E4080] text-white"
                            : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Вперёд
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "media" && <MediaSection />}
      </div>
    </div>
  );
}
