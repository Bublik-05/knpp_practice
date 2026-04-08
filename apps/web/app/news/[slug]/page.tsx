import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsBySlug } from "@/lib/news";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const categoryStyle: Record<string, string> = {
  Новости: "bg-blue-50 text-[#1E4080]",
  События: "bg-green-50 text-green-700",
  "Пресс-релизы": "bg-gray-100 text-gray-600",
};

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="px-6 md:px-10 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex justify-start">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-white bg-[#1E4080] font-light rounded-full py-3 px-5 pr-7 hover:bg-[#0B1C3C] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            Назад к новостям 
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <span
            className={`inline-flex w-fit rounded-full px-4 py-2 text-sm font-medium ${categoryStyle[item.category]}`}
          >
            {item.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {item.title}
          </h1>

          <p className="text-gray-500 font-light text-xl">{item.date}</p>
        </div>

        <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl text-gray-700 text-lg leading-8">
          <p>{item.summary ?? "Полный текст публикации пока недоступен."}</p>
        </div>
      </div>
    </main>
  );
}