import About from "@/components/main/About";
import MissionSection from "@/components/main/MissionSection";
import AchievementsSection from "@/components/main/AchievementsSection";
import ProjectsStages from "@/components/main/ProjectsStages";
import Activities from "@/components/main/Activities";
import News from "@/components/main/News";
import { getFeaturedNews } from "@/lib/news";

export default async function Home() {
  const featuredNews = await getFeaturedNews();

  return (
    <>
      <About />
      <News items={featuredNews} />
      <MissionSection />
      <Activities />
      <AchievementsSection />
      <ProjectsStages />
    </>
  );
}
