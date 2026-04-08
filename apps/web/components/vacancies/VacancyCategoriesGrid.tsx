import Link from "next/link";
import VacancyCategoryCard from "./VacancyCategoryCard";

interface Category {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  count: number;
}

export default function VacancyCategoriesGrid({
  categories,
  previewCount = 8,
}: {
  categories: Category[];
  previewCount?: number;
}) {
  const visible = categories.slice(0, previewCount);
  const hasMore = categories.length > previewCount;

  return (
    <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Категории</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {visible.map((category) => (
          <VacancyCategoryCard key={category.id} category={category} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-end mt-6">
          <Link
            href="/vacancies/all"
            className="inline-flex items-center gap-2 rounded-full bg-[#1E4080] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#162f66] transition-colors"
          >
            Смотреть все
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}