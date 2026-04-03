"use client";

import { useState, useMemo } from "react";
import NewsFilter, { type FilterKey } from "./NewsFilter";
import NewsGrid from "./NewsGrid";
import type { NewsItem } from "@/lib/news";

interface Props {
  items: NewsItem[];
}

export default function NewsContent({ items }: Props) {
  const [filter, setFilter] = useState<FilterKey>("Новости");

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

  return (
    <div className="flex flex-1 w-full pt-30">
      <NewsFilter active={filter} onChange={setFilter} counts={counts} />

      <div className="flex-1 p-10">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 ">
            {filter}
          </h1>
          <p className="font-light text-gray-500 mt-1">
            {filtered.length} {filtered.length === 1 ? "публикация" : filtered.length < 5 ? "публикации" : "публикаций"}
          </p>
        </div>

        <NewsGrid items={filtered} />
      </div>
    </div>
  );
}