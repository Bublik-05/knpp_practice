import Link from "next/link";

interface Vacancy {
  slug: string;
  title: string;
  location: string;
  type: string;
  salary?: string;
}

export default function VacancyCard({ vacancy, categorySlug }: { vacancy: Vacancy; categorySlug: string }) {
  return (
    <Link
      href={`/vacancies/${categorySlug}/${vacancy.slug}`}
      className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-[#1E4080] hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-base group-hover:text-[#1E4080] transition-colors truncate">
            {vacancy.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-xs text-gray-500">{vacancy.location}</span>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-[#1E4080]">
              {vacancy.type}
            </span>
          </div>
          {vacancy.salary && (
            <p className="mt-2 text-sm font-medium text-gray-700">{vacancy.salary}</p>
          )}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
          className="shrink-0 text-gray-300 group-hover:text-[#1E4080] transition-colors mt-1">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}