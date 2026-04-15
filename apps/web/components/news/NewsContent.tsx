"use client";

import { useState, useMemo, useEffect } from "react";
import NewsFilter, { type FilterKey } from "../news/NewsFilter";
import NewsGrid from "../news/NewsGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import type { NewsItem } from "@/lib/news";

interface Props {
  items: NewsItem[];
}

const ITEMS_PER_PAGE = 9;

export default function NewsContent({ items }: Props) {
  const [filter, setFilter] = useState<FilterKey>("Новости");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(
    () => items.filter((n) => n.category === filter),
    [filter, items],
  );

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
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filtered.slice(start, end);
  }, [filtered, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  return (
    <div className="flex flex-1 w-full">
      <NewsFilter active={filter} onChange={setFilter} counts={counts} />

      <div className="flex-1 p-10">
        <Breadcrumb
          items={[{ label: "Новости" }]}
          className="mb-6"
        />
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900">
            {filter}
          </h1>
          <p className="font-light text-gray-500 mt-1">
            {filtered.length}{" "}
            {filtered.length === 1
              ? "публикация"
              : filtered.length < 5
                ? "публикации"
                : "публикаций"}
          </p>
        </div>

        <NewsGrid items={paginatedItems} />

        {totalPages > 1 && (
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
                  className={`w-10 h-10 rounded-lg transition-colors ${isActive
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
  );
}