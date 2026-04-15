import Link from "next/link";
import { Vacancy } from "@/lib/vacancies-data";

interface Props {
  vacancy: Vacancy;
  /** Show the category badge above the title (useful for cross-category listings) */
  showCategory?: boolean;
  /** Show the short description below the meta row */
  showDescription?: boolean;
}

export default function VacancyCard({
  vacancy: v,
  showCategory = false,
  showDescription = false,
}: Props) {
  return (
    <Link
      href={`/vacancies/${v.categorySlug}/${v.slug}`}
      className="group flex items-start justify-between gap-4 rounded-lg border border-gray-100 bg-gray-50 p-5 hover:border-[#1E4080] hover:bg-white hover:shadow-md transition-all duration-200"
    >
      <div className="flex-1 min-w-0">
        {showCategory && (
          <div className="mb-1.5">
            <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-[#1E4080]">
              {v.categoryTitle}
            </span>
          </div>
        )}

        <h3 className="font-bold text-gray-900 text-base group-hover:text-[#1E4080] transition-colors">
          {v.title}
        </h3>

        <div className="flex flex-wrap items-center gap-3 mt-2">
          <span className="inline-flex items-center gap-1 text-xs text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 shrink-0"
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

          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
            {v.type}
          </span>

          {v.salary && (
            <span className="text-xs font-bold text-gray-800">{v.salary}</span>
          )}
        </div>

        {showDescription && v.description && (
          <p className="mt-2 text-sm text-gray-400 font-light line-clamp-2">
            {v.description}
          </p>
        )}
      </div>

      {/* Arrow */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 group-hover:border-[#1E4080] group-hover:bg-[#1E4080] transition-all mt-0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
