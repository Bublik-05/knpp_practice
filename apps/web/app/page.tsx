import About from "@/components/main/About";
import MissionSection from "@/components/main/MissionSection";
import AchievementsSection from "@/components/main/AchievementsSection";
import ProjectsStages from "@/components/main/ProjectsStages";
import Activities from "@/components/main/Activities";
import KazakhstanMapSection from "@/components/main/KazakhstanMapSection";
import DevelopmentSection from "@/components/main/DevelopmentPlan";
import News from "@/components/main/News";
import { getFeaturedNews } from "@/lib/news";
import HomeEmissionsCalculator from "@/components/main/HomeEmissionsCalculator";
import CareersPromoSection from "@/components/main/CareersPromoSection";
import NewAbout from "@/components/main/NewAbout";

export default async function Home() {
  const featuredNews = await getFeaturedNews();

  return (
    <>
      <NewAbout />
      {/* <About /> */}
      <News items={featuredNews} />
      <Activities />
      {/* <MissionSection /> */}
      <AchievementsSection />
      <DevelopmentSection />
      <HomeEmissionsCalculator />
      <ProjectsStages />
      <KazakhstanMapSection />
      <CareersPromoSection vacanciesCount={12} />

    </>
  );
}
