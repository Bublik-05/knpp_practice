import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/vacancies/PageHero";
import InternshipForm from "@/components/vacancies/InternshipForm";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getVacancyBySlug } from "@/lib/vacancies-data";

export default async function VacancyDetailPage({
  params,
}: {
  params: Promise<{ categorySlug: string; vacancySlug: string }>;
}) {
  const { categorySlug, vacancySlug } = await params;

  const vacancy = getVacancyBySlug(vacancySlug);
  if (!vacancy) notFound();

  const isInternship = vacancy.categorySlug === "stazhirovka";

  return (
    <>
      <PageHero title="Вакансии" />

      <div className="w-full bg-[#F0F0F0] py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col gap-6">

          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Вакансии", href: "/vacancies" },
              { label: vacancy.categoryTitle, href: `/vacancies/${categorySlug}` },
              { label: vacancy.title },
            ]}
          />

          {/* Main vacancy card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">

            {/* Internship badge */}
            {isInternship && (
              <div className="mb-3">
                <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#1E4080]">
                  Стажировка
                </span>
              </div>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {vacancy.title}
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-sm font-medium text-[#1E4080]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {vacancy.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3.5 py-1.5 text-sm font-medium text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {vacancy.type}
              </span>
              {vacancy.salary && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3.5 py-1.5 text-sm font-medium text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {vacancy.salary}
                </span>
              )}
            </div>

            {/* О позиции */}
            <Section title="О позиции">
              <p className="text-gray-700 font-light leading-relaxed text-[15px]">
                {vacancy.description}
              </p>
            </Section>

            {/* Требования */}
            <Section title="Требования">
              <ul className="space-y-2.5">
                {vacancy.requirements.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 font-light text-[15px]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E4080]" />
                    {r}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Обязанности */}
            <Section title="Обязанности">
              <ul className="space-y-2.5">
                {vacancy.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 font-light text-[15px]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E4080]" />
                    {r}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Условия */}
            {vacancy.conditions.length > 0 && (
              <Section title="Условия">
                <ul className="space-y-2.5">
                  {vacancy.conditions.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 font-light text-[15px]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* CTA для обычных вакансий */}
            {!isInternship && (
              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={vacancy.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1E4080] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#162f66] transition-colors shadow-sm"
                >
                  Откликнуться на вакансию
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </a>
                <Link
                  href={`/vacancies/${categorySlug}`}
                  className="text-sm text-gray-400 hover:text-[#1E4080] transition-colors font-light"
                >
                  ← Назад к списку
                </Link>
              </div>
            )}

            {/* Назад для стажировок */}
            {isInternship && (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  href={`/vacancies/${categorySlug}`}
                  className="text-sm text-gray-400 hover:text-[#1E4080] transition-colors font-light"
                >
                  ← Назад к списку стажировок
                </Link>
              </div>
            )}
          </div>

          {/* Форма заявки — всегда видна на страницах вакансий стажировки */}
          {isInternship && <InternshipForm />}

        </div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">
        {title}
      </h2>
      {children}
    </div>
  );
}
