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
import SubsidiaryAgencies from "@/components/main/SubsidiaryAgencies";
import PresidentMessageSection from "@/components/main/PresidentMessageSection";
import CEOSection from "@/components/main/CEOSection";
import GovernmentLinksSection from "@/components/main/GovernmentLinksSection";

export default async function Home() {
  const featuredNews = await getFeaturedNews();

  return (
    <>
      <NewAbout />
      {/* <About /> */}
      <CEOSection />
      <News items={featuredNews} />
      <HomeEmissionsCalculator />
      <KazakhstanMapSection />
      <DevelopmentSection />
      <SubsidiaryAgencies />
      <Activities />
      {/* <MissionSection /> */}
      <AchievementsSection />
      <ProjectsStages />
      <PresidentMessageSection />
      <CareersPromoSection vacanciesCount={12} />
    </>
  );
}
