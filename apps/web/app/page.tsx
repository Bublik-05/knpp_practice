import News from "@/components/main/News";
import About from "@/components/main/About";
import Activities from "@/components/main/Activities";
import KazakhstanMapSection from "@/components/main/KazakhstanMapSection";
import DevelopmentSection from "@/components/main/DevelopmentPlan";
import { getFeaturedNews } from "@/lib/news";

export default async function Home() {
  const featuredNews = await getFeaturedNews();

  return (
    <>
      <About />
      <News items={featuredNews} />
      <Activities />
      <DevelopmentSection />
      <KazakhstanMapSection />
    </>
  );
}