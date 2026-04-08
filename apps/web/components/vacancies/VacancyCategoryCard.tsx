import Link from "next/link";
import Image from "next/image";

interface Category {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  count: number;
}

export default function VacancyCategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/vacancies/${category.slug}`}
      className="group relative block overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
    >
      <Image
        src={category.imageUrl}
        alt={category.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#1E4080] transition-all duration-300 group-hover:w-full" />
      <div className="absolute bottom-0 left-0 p-4">
        <p className="font-bold text-white text-base leading-tight">{category.title}</p>
        <p className="text-white/80 text-sm mt-0.5">
          {category.count} {pluralizeVacancy(category.count)}
        </p>
      </div>
    </Link>
  );
}

function pluralizeVacancy(count: number): string {
  const m = count % 10, h = count % 100;
  if (m === 1 && h !== 11) return "вакансия";
  if (m >= 2 && m <= 4 && (h < 10 || h >= 20)) return "вакансии";
  return "вакансий";
}