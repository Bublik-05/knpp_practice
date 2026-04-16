import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { vacancyCategories, getVacanciesByCategory } from "@/lib/vacancies-data";
import BackgroundGlow from "@/components/layout/BackgroundGlow";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;

  const category = vacancyCategories.find((c) => c.slug === categorySlug);
  const title = category?.title ?? categorySlug;
  const isInternship = categorySlug === "stazhirovka";
  const vacancies = getVacanciesByCategory(categorySlug);

  return (
    <main className="relative min-h-screen overflow-hidden " >
      <BackgroundGlow />
      <PageHero title="Вакансии" />

      <div className="w-full bg-[#F0F0F0] py-10">
        <div className="max-w-7xl mx-auto px-8">

          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Вакансии", href: "/vacancies" },
              { label: title },
            ]}
            className="mb-8"
          />

          {/* Vacancy list */}
          <section className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
            <div className="flex items-baseline gap-3 mb-2">
              <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
              {isInternship && (
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#1E4080]">
                  Стажировка
                </span>
              )}
            </div>

            <p className="text-gray-400 text-sm mb-8">
              Найдено вакансий:{" "}
              <span className="font-semibold text-gray-700">{vacancies.length}</span>
            </p>

            {vacancies.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
                <p className="text-gray-500">В этой категории пока нет активных вакансий</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {vacancies.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/vacancies/${categorySlug}/${v.slug}`}
                    className="group flex items-start justify-between gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-[#1E4080] hover:bg-white hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#1E4080] transition-colors">
                        {v.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
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
                      <p className="mt-3 text-sm text-gray-500 font-light line-clamp-2">
                        {v.description}
                      </p>
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 group-hover:border-[#1E4080] group-hover:bg-[#1E4080] transition-all mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>

        </div>
      </div>
    </main>
  );
}
