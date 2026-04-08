import Link from "next/link";
import PageHero from "@/components/vacancies/PageHero";

const allVacancies = [
  {
    slug: "senior-frontend",
    categorySlug: "it",
    title: "Senior Frontend Developer",
    location: "Астана",
    type: "Полная занятость",
    salary: "от 500 000 тг",
  },
  {
    slug: "backend-developer",
    categorySlug: "it",
    title: "Backend Developer",
    location: "Астана",
    type: "Полная занятость",
    salary: "от 450 000 тг",
  },
  // Добавляй вакансии сюда
];

const categoryNames: Record<string, string> = {
  it: "Отдел IT",
  engineering: "Инженерный отдел",
  safety: "Отдел безопасности",
  finance: "Финансовый отдел",
  hr: "Отдел кадров",
  legal: "Юридический отдел",
  logistics: "Отдел логистики",
  management: "Руководство",
};

export default function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const { categorySlug } = params;
  const title = categoryNames[categorySlug] ?? categorySlug;
  const vacancies = allVacancies.filter((v) => v.categorySlug === categorySlug);

  return (
    <>
      <PageHero title="Вакансии" />

      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link
            href="/vacancies"
            className="inline-flex items-center gap-2 text-white bg-[#1E4080] font-light rounded-full py-3 px-5 pr-7 hover:bg-[#0B1C3C] transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            Назад к категориям
          </Link>
          <span className="text-gray-900 font-medium">{title}</span>
        </nav>

        <p className="text-gray-500 text-sm mb-6">
          Найдено вакансий: <span className="font-semibold text-gray-800">{vacancies.length}</span>
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
                className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-[#1E4080] hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-base group-hover:text-[#1E4080] transition-colors">
                      {v.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-xs text-gray-500">{v.location}</span>
                      <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-[#1E4080]">
                        {v.type}
                      </span>
                    </div>
                    {v.salary && (
                      <p className="mt-2 text-sm font-medium text-gray-700">{v.salary}</p>
                    )}
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
                    className="shrink-0 text-gray-300 group-hover:text-[#1E4080] transition-colors mt-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}