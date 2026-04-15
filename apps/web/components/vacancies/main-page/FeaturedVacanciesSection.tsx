import Link from "next/link";
import { Vacancy } from "@/lib/vacancies-data";
import VacancyCard from "../shared/VacancyCard";

interface Props {
  vacancies: Vacancy[];
  allHref?: string;
}

export default function FeaturedVacanciesSection({
  vacancies,
  allHref = "/vacancies/it",
}: Props) {
  return (
    <section className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Blue banner header */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-[#1E4080] px-8 py-8">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute right-16 -bottom-10 w-40 h-40 rounded-full bg-white/5" />

        <div className="relative z-10">
          <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/90 mb-2">
            Открытые позиции
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
            Актуальные вакансии
          </h2>
          <p className="text-white/70 font-light text-sm max-w-md">
            Присоединяйтесь к команде KAES — мы ищем профессионалов в разных направлениях.
          </p>
        </div>

        <Link
          href={allHref}
          className="relative z-10 inline-flex items-center gap-2 self-start sm:self-auto shrink-0 rounded-full bg-white/15 hover:bg-white hover:text-black px-5 py-2.5 text-sm font-light text-white transition-colors"
        >
          Смотреть все
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Vacancy list */}
      <div className="px-6 py-6 md:px-10 md:py-8 flex flex-col gap-3">
        {vacancies.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-6">
            Актуальные вакансии скоро появятся
          </p>
        ) : (
          vacancies.map((v) => (
            <VacancyCard key={v.slug} vacancy={v} showCategory />
          ))
        )}
      </div>
    </section>
  );
}
