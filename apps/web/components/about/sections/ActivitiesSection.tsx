import Image from "next/image";



export default function ActivitiesSection() {
  return (
    <section id="section-about-activities" className="flex flex-col gap-4 scroll-mt-24">
      <div className="flex gap-10 items-start">
        <div className="flex-1 min-w-0 flex flex-col gap-1 text-lg">
          <ul className="list-disc pl-6 space-y-3 text-lg font-light">
            <li>
              Деятельность в области архитектуры для объектов атомной промышленности и атомной энергетики.
            </li>

            <li>
              Деятельность в области инженерных изысканий и предоставление технических консультаций в этой области для объектов атомной промышленности и атомной энергетики.
            </li>

            <li>
              Исследования и экспериментальные разработки в области мирного использования атомной энергии.
            </li>

            <li>
              Обеспечение готовности электрической мощности к несению нагрузки, регулирование и резервирование электрической мощности.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
