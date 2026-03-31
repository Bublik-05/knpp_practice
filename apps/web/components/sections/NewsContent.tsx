"use client";

import { useState, useMemo } from "react";
import NewsFilter, { type FilterKey } from "./NewsFilter";
import NewsGrid,   { type NewsItem }  from "./NewsGrid";

const ALL_NEWS: NewsItem[] = [
  {
    id: 1,
    category: "Новости",
    title: "Координационные встречи с МАГАТЭ в рамках подготовки к миссии INIR",
    date: "09.02.2026",
    image: "/images/news1-img.jpg",
  },
  {
    id: 2,
    category: "Новости",
    title: "Развитие ядерной энергетики в Казахстане: итоги года",
    date: "15.01.2026",
    image: "/images/news2-img.jpg",
  },
  {
    id: 3,
    category: "Новости",
    title: "Подписание меморандума о сотрудничестве с международными партнёрами",
    date: "22.12.2025",
    image: "/images/news3-img.jpg",
  },
  {
    id: 4,
    category: "События",
    title: "Международная конференция по ядерной безопасности в Алматы",
    date: "05.11.2025",
    image: "/images/news4-img.jpg",
  },
  {
    id: 5,
    category: "События",
    title: "Визит делегации МАГАТЭ на производственные объекты КАЭС",
    date: "18.10.2025",
    image: "/images/news5-img.jpg",
  },
  {
    id: 6,
    category: "События",
    title: "Форум энергетиков Центральной Азии — 2025",
    date: "01.09.2025",
    image: "/images/news1-img.jpg",
  },
  {
    id: 7,
    category: "Пресс-релизы",
    title: "Официальное заявление о начале второго этапа проектирования АЭС",
    date: "15.08.2025",
    image: "/images/news2-img.jpg",
  },
  {
    id: 8,
    category: "Пресс-релизы",
    title: "КАЭС публикует отчёт об экологической безопасности за первое полугодие",
    date: "30.07.2025",
    image: "/images/news3-img.jpg",
  },
  {
    id: 9,
    category: "Пресс-релизы",
    title: "Комментарий пресс-службы по результатам переговоров с EDF",
    date: "14.07.2025",
    image: "/images/news4-img.jpg",
  },
];

export default function NewsContent() {
  const [filter, setFilter] = useState<FilterKey>("Новости");

  const filtered = useMemo(
    () => ALL_NEWS.filter((n) => n.category === filter),
    [filter],
  );

  const counts: Record<FilterKey, number> = useMemo(
    () => ({
      "Новости":      ALL_NEWS.filter((n) => n.category === "Новости").length,
      "События":      ALL_NEWS.filter((n) => n.category === "События").length,
      "Пресс-релизы": ALL_NEWS.filter((n) => n.category === "Пресс-релизы").length,
    }),
    [],
  );

  return (
    <div className="flex flex-1 w-full pt-5">
      {/* Фиксированный фильтр слева */}
      <NewsFilter active={filter} onChange={setFilter} counts={counts} />

      {/* Контент справа */}
      <div className="flex-1 px-10 py-10">
        {/* Заголовок раздела */}
        <div className="mb-8">
          <h1 className="text-[32px] font-bold text-gray-900 ">
            {filter}
          </h1>
          <p className="font-light text-gray-500 mt-1">
            {filtered.length} {filtered.length === 1 ? "публикация" : filtered.length < 5 ? "публикации" : "публикаций"}
          </p>
        </div>

        {/* Сетка карточек */}
        <NewsGrid items={filtered} />
      </div>
    </div>
  );
}
