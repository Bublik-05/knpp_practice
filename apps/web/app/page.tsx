import News from "@/components/sections/News";
import About from "@/components/sections/About";
import Activities from "@/components/sections/Activities";
import HotLine from "@/components/sections/HotLine";
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