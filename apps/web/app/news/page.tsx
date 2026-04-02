import NewsContent from "@/components/sections/NewsContent";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const allNews = await getAllNews();

  return <NewsContent items={allNews} />;
}