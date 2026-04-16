import NewsContent from "@/components/news/NewsContent";
import BackgroundGlow from "@/components/layout/BackgroundGlow";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const allNews = await getAllNews();

  return (
    <main className="relative min-h-screen overflow-hidden ">
      <BackgroundGlow />  
      <NewsContent items={allNews} />
    </main>
  );
}