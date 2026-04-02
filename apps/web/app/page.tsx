import News from "@/components/sections/News";
import About from "@/components/sections/About";
import { getFeaturedNews } from "@/lib/news";

export default async function Home() {
  const featuredNews = await getFeaturedNews();

  return (
    <>
      <About />
      <News items={featuredNews} />
    </>
  );
}