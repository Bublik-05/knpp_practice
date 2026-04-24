import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/lib/news";

interface Props {
  items: NewsItem[];
}

const categoryStyle: Record<string, string> = {
  Новости: "bg-blue-50 text-[#1E4080]",
  События: "bg-green-50 text-green-700",
  "Пресс-релизы": "bg-gray-100 text-gray-600",
};

export default function NewsGrid({ items }: Props) {
  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500 font-light">
        Нет публикаций по выбранному фильтру
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {items.map((item) => (
        <Link key={item.id} href={`/news/${item.slug}`} className="block">
          <article className="bg-white rounded-lg overflow-hidde shadow-sm cursor-pointer hover:shadow-md hover:border-gray-200 transition-all duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                fill
                alt={item.title}
                className="object-cover "
              />
            </div>

            <div className="p-5 flex flex-col gap-3 h-[180px]">
              <span
                className={`self-start text-[12px] font-medium px-3 py-1 rounded-full ${categoryStyle[item.category]}`}
              >
                {item.category}
              </span>

              <h3 className="text-[15px] font-medium text-gray-900 leading-snug line-clamp-3">
                {item.title}
              </h3>

              <p className="font-light text-gray-500 mt-auto">{item.date}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}