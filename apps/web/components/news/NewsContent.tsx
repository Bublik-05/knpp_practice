"use client";

import { useState, useMemo, useEffect } from "react";
import NewsFilter, { type FilterKey } from "../news/NewsFilter";
import NewsGrid from "../news/NewsGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import MediaSection from "@/components/news/MediaSection";
import type { NewsItem } from "@/lib/news";

interface Props {
  items: NewsItem[];
}

const ITEMS_PER_PAGE = 9;

export default function NewsContent({ items }: Props) {
  const [filter, setFilter] = useState<FilterKey>("Календарь событий");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(
    () => items,
    [items],
  );

  const counts: Partial<Record<FilterKey, number>> = {};

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  useEffect(() => { setCurrentPage(1); }, [filter]);

  return (
    <div className="flex flex-col flex-1 w-full">

      {/* ── Top bar: breadcrumb only ── */}
      <div className="px-4 md:px-10 py-10">
        <Breadcrumb items={[{ label: "Пресс-центр" }]} />
      </div>

      <div className="flex flex-1 w-full">

        {/* ── Sidebar filter ── */}
        <div className="hidden md:block">
          <NewsFilter active={filter} onChange={setFilter} counts={counts} />
        </div>

        {/* ── Mobile pills ── */}
        <div className="flex-1 px-4 md:pb-10">
          <div className="flex md:hidden gap-2 mb-5 overflow-x-auto pb-1">
            {(["Календарь событий", "Мультимедиа"] as FilterKey[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  filter === f ? "bg-[#1E4080] text-white" : "bg-gray-100 text-gray-600"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* ── Календарь событий ── */}
          {filter === "Календарь событий" && (
            <>
              <div className="mb-8">
                <h1 className="text-5xl font-bold text-gray-900">Календарь событий</h1>
                <p className="font-light text-gray-500 mt-1">
                  {filtered.length}{" "}
                  {filtered.length === 1 ? "публикация" : filtered.length < 5 ? "публикации" : "публикаций"}
                </p>
              </div>

              <NewsGrid items={paginatedItems} />

              {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Назад
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg transition-colors ${
                        page === currentPage
                          ? "bg-[#1E4080] text-white"
                          : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Вперёд
                  </button>
                </div>
              )}
            </>
          )}

          {/* ── Мультимедиа ── */}
          {filter === "Мультимедиа" && (
            <div>
              <div className="mb-8">
                <h1 className="text-5xl font-bold text-gray-900">Мультимедиа</h1>
                <p className="font-light text-gray-500 mt-1">Видеоэкскурсии и интервью с экспертами</p>
              </div>
              <MediaSection />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
