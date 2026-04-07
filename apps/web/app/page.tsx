import News from "@/components/main/News";
import About from "@/components/main/About";
import Activities from "@/components/main/Activities";
import HotLine from "@/components/main/HotLine";
import { getFeaturedNews } from "@/lib/news";

export default async function Home() {
  const featuredNews = await getFeaturedNews();

  return (
    <>
      <About />
      <Activities/>
      <News items={featuredNews} />
      <HotLine/>
    </>
  );
}