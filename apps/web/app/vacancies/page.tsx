import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/vacancies/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { vacancyCategories, allVacancies } from "@/lib/vacancies-data";

function pluralize(count: number) {
  const m = count % 10, h = count % 100;
  if (m === 1 && h !== 11) return "вакансия";
  if (m >= 2 && m <= 4 && (h < 10 || h >= 20)) return "вакансии";
  return "вакансий";
}

// 2 featured vacancies shown on main page
const featuredVacancies = allVacancies.filter(
  (v) => v.slug === "senior-frontend" || v.slug === "senior-engineer"
);

// Internship featured
const featuredInternships = allVacancies.filter(
  (v) => v.categorySlug === "stazhirovka"
);

export default function VacanciesPage() {
  const mainCategories = vacancyCategories.filter((c) => c.slug !== "stazhirovka");
  const internship = vacancyCategories.find((c) => c.slug === "stazhirovka");

  return (
    <>
      <PageHero title="Вакансии" />

      <div className="w-full bg-[#F0F0F0] py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col gap-6">

          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: "Вакансии" }]} />

          {/* Актуальные вакансии */}
          <section className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="text-4xl font-bold text-gray-900">Актуальные вакансии</h2>
              <Link
                href="/vacancies/it"
                className="text-sm text-[#1E4080] hover:underline font-light"
              >
                Смотреть все →
              </Link>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              {featuredVacancies.map((v) => (
                <Link
                  key={v.slug}
                  href={`/vacancies/${v.categorySlug}/${v.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5 hover:border-[#1E4080] hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-[#1E4080]">
                        {v.categoryTitle}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#1E4080] transition-colors">
                      {v.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {v.location}
                      </span>
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                        {v.type}
                      </span>
                      {v.salary && (
                        <span className="text-xs font-semibold text-gray-800">{v.salary}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 group-hover:border-[#1E4080] group-hover:bg-[#1E4080] transition-all mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Категории */}
          <section className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Категории</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {mainCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/vacancies/${cat.slug}`}
                  className="group relative block overflow-hidden rounded-lg aspect-[4/3]"
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#1E4080] transition-all duration-300 group-hover:w-full" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="font-bold text-white text-base leading-tight">{cat.title}</p>
                    <p className="text-white/80 font-light text-sm mt-0.5">
                      {cat.count} {pluralize(cat.count)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Стажировка — баннер + 2 вакансии */}
          {internship && (
            <section className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Header banner */}
              <div className="relative flex items-center justify-between gap-6 bg-[#1E4080] px-8 py-8">
                <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5" />
                <div className="pointer-events-none absolute right-16 bottom-[-40px] w-40 h-40 rounded-full bg-white/5" />
                <div className="relative z-10">
                  <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/90 mb-2">
                    Специальная программа
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    Вакансии для стажировки
                  </h3>
                  <p className="text-white/70 font-light text-sm max-w-md">
                    Начните карьеру в атомной отрасли — откройте вакансии для стажёров.
                  </p>
                </div>
                <Link
                  href="/vacancies/stazhirovka"
                  className="relative z-10 inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 px-5 py-2.5 text-sm font-medium text-white transition shrink-0"
                >
                  Смотреть все
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* 2 internship vacancies */}
              <div className="p-6 md:px-10 md:py-8 flex flex-col gap-3">
                {featuredInternships.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/vacancies/${v.categorySlug}/${v.slug}`}
                    className="group flex items-start justify-between gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5 hover:border-[#1E4080] hover:bg-white hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-base group-hover:text-[#1E4080] transition-colors">
                        {v.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {v.location}
                        </span>
                        <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-[#1E4080]">
                          {v.type}
                        </span>
                        {v.salary && (
                          <span className="text-xs font-semibold text-gray-800">{v.salary}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 group-hover:border-[#1E4080] group-hover:bg-[#1E4080] transition-all mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </>
  );
}
