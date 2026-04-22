import PageHero from "@/components/layout/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FeaturedVacanciesSection from "@/components/vacancies/main-page/FeaturedVacanciesSection";
import VacancyCategoriesGrid from "@/components/vacancies/main-page/VacancyCategoriesGrid";
import InternshipSection from "@/components/vacancies/main-page/InternshipSection";
import QsamrukSection from "@/components/vacancies/QsamrukSection";
import { vacancyCategories, allVacancies } from "@/lib/vacancies-data";
import BackgroundGlow from "@/components/layout/BackgroundGlow";

// 2 featured vacancies pinned to the top
const featuredVacancies = allVacancies.filter(
  (v) => v.slug === "senior-frontend" || v.slug === "senior-engineer"
);

// Internship vacancies for the bottom banner
const featuredInternships = allVacancies.filter(
  (v) => v.categorySlug === "stazhirovka"
);

export default function VacanciesPage() {
  const mainCategories = vacancyCategories
    .filter((c) => c.slug !== "stazhirovka")
    .map((c) => ({
      id: c.slug,
      slug: c.slug,
      title: c.title,
      imageUrl: c.image,
      count: c.count,
    }));

  return (
    <main className="relative min-h-screen overflow-hidden ">
      <BackgroundGlow />
      <PageHero title="Вакансии" />

      <div className="w-full bg-[#F0F0F0] py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col gap-6">

          <Breadcrumb items={[{ label: "Вакансии" }]} />

          <VacancyCategoriesGrid categories={mainCategories} />

          <QsamrukSection />

          <FeaturedVacanciesSection
            vacancies={featuredVacancies}
            allHref="/vacancies/it"
          />

          <InternshipSection vacancies={featuredInternships} />

        </div>
      </div>
    </main>
  );
}
