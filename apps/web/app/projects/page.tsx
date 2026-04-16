import PageHero from "@/components/layout/PageHero";
import ProjectsContent from "@/components/projects/ProjectsContent";
import BackgroundGlow from "@/components/layout/BackgroundGlow";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden ">
      <BackgroundGlow />
      <PageHero title="Проекты" />
      <ProjectsContent />
    </main>
  );
}
