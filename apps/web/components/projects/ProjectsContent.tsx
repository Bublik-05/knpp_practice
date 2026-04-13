import BalkhashProject from "./BalkhashProject";
import MainkumProject from "./MainkumProject";
import ConstructionStages from "./ConstructionStages";

export default function ProjectsContent() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 space-y-20">

      {/* Intro */}
      <div className="max-w-2xl">
        <p className="text-lg text-gray-700 font-light leading-relaxed">
          ТОО «КАЭС» реализует два ключевых проекта по размещению атомной электростанции
          в Казахстане. Оба проекта проходят стадию детального изучения и оценки.
        </p>
      </div>

      {/* Projects — alternating layout */}
      <BalkhashProject />
      <MainkumProject />

      {/* Construction stages */}
      <ConstructionStages />

    </section>
  );
}
