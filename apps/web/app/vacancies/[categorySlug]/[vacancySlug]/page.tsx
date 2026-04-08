import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/vacancies/PageHero";

// Те же данные — когда подключишь бэк, просто замени этот массив на fetch
const allVacancies = [
  {
    slug: "senior-frontend",
    categorySlug: "it",
    categoryTitle: "Отдел IT",
    title: "Senior Frontend Developer",
    location: "Астана",
    type: "Полная занятость",
    salary: "от 500 000 тг",
    description: "Мы ищем опытного Frontend-разработчика для работы над корпоративными веб-приложениями атомной отрасли.",
    requirements: ["Опыт от 3 лет с React / Next.js", "Глубокое знание TypeScript", "Опыт с REST API", "Понимание принципов UI/UX"],
    responsibilities: ["Разработка и поддержка веб-интерфейсов", "Code review и менторинг", "Взаимодействие с командой бэкенда", "Участие в архитектурных решениях"],
    conditions: ["Официальное трудоустройство", "ДМС после испытательного срока", "Гибкий рабочий график"],
    externalUrl: "https://hh.kz",
  },
  {
    slug: "backend-developer",
    categorySlug: "it",
    categoryTitle: "Отдел IT",
    title: "Backend Developer",
    location: "Астана",
    type: "Полная занятость",
    salary: "от 450 000 тг",
    description: "Ищем Backend-разработчика для поддержки и развития корпоративных API-сервисов.",
    requirements: ["Опыт от 2 лет с Python / Django / DRF", "Знание PostgreSQL", "Опыт с Docker, CI/CD"],
    responsibilities: ["Разработка REST API", "Оптимизация запросов к БД", "Написание unit-тестов"],
    conditions: ["Официальное трудоустройство", "Корпоративное обучение"],
    externalUrl: "https://hh.kz",
  },
];

export default function VacancyDetailPage({
  params,
}: {
  params: { categorySlug: string; vacancySlug: string };
}) {
  const vacancy = allVacancies.find((v) => v.slug === params.vacancySlug);
  if (!vacancy) notFound();

  return (
    <>
      <PageHero title="Вакансии" />

      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-3 text-sm mb-8 flex-wrap">
          <Link href="/vacancies" className="text-[#1E4080] hover:underline font-medium transition-colors">
            Вакансии
          </Link>
          <span className="text-gray-400">/</span>
          <Link href={`/vacancies/${params.categorySlug}`} className="text-[#1E4080] hover:underline transition-colors">
            {vacancy.categoryTitle}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{vacancy.title}</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-[#1E4080]">
              📍 {vacancy.location}
            </span>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
              {vacancy.type}
            </span>
            {vacancy.salary && (
              <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                {vacancy.salary}
              </span>
            )}
          </div>

          <Section title="О позиции">
            <p className="text-gray-700 font-light leading-relaxed">{vacancy.description}</p>
          </Section>

          <Section title="Требования">
            <ul className="space-y-2">
              {vacancy.requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 font-light">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E4080]" />
                  {r}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Обязанности">
            <ul className="space-y-2">
              {vacancy.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 font-light">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E4080]" />
                  {r}
                </li>
              ))}
            </ul>
          </Section>

          {vacancy.conditions.length > 0 && (
            <Section title="Условия">
              <ul className="space-y-2">
                {vacancy.conditions.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 font-light">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={vacancy.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E4080] px-6 py-3 text-sm font-semibold text-white hover:bg-[#162f66] transition-colors shadow-sm"
            >
              Откликнуться на вакансию
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
            </a>
            <Link
              href={`/vacancies/${params.categorySlug}`}
              className="text-sm text-gray-500 hover:text-[#1E4080] transition-colors font-light"
            >
              ← Назад к списку
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-3">{title}</h2>
      {children}
    </div>
  );
}
