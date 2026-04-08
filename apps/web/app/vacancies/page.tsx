import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/vacancies/PageHero";

const categories = [
  { slug: "it",          title: "Отдел IT",            count: 12, image: "/images/news1-img.jpg" },
  { slug: "engineering", title: "Инженерный отдел",     count: 8,  image: "/images/news2-img.jpg" },
  { slug: "safety",      title: "Отдел безопасности",   count: 5,  image: "/images/news3-img.jpg" },
  { slug: "finance",     title: "Финансовый отдел",     count: 4,  image: "/images/news4-img.jpg" },
  { slug: "hr",          title: "Отдел кадров",         count: 3,  image: "/images/news5-img.jpg" },
  { slug: "legal",       title: "Юридический отдел",    count: 2,  image: "/images/news1-img.jpg" },
  { slug: "logistics",   title: "Отдел логистики",      count: 6,  image: "/images/news2-img.jpg" },
  { slug: "management",  title: "Руководство",          count: 2,  image: "/images/news3-img.jpg" },
];

function pluralize(count: number) {
  const m = count % 10, h = count % 100;
  if (m === 1 && h !== 11) return "вакансия";
  if (m >= 2 && m <= 4 && (h < 10 || h >= 20)) return "вакансии";
  return "вакансий";
}

export default function VacanciesPage() {
  return (
    <>
      <PageHero title="Вакансии" />

      {/* Серый фон на всю ширину как на дизайне */}
      <div className="w-full bg-[#F0F0F0] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Категории</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((cat) => (
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
                    <p className="font-bold text-lg text-white text-base leading-tight">{cat.title}</p>
                    <p className="text-white/80 font-light text-sm mt-0.5">{cat.count} {pluralize(cat.count)}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Кнопка Смотреть все */}
            <div className="flex justify-end mt-6">
              <Link
                href="/vacancies/all"
                className="inline-flex items-center gap-2 rounded-full bg-[#1E4080] px-5 py-2.5 pl-6 text-lg font-light text-white hover:bg-[#162f66] transition-colors"
              >
                Смотреть все
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}