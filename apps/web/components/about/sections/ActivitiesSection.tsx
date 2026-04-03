import Image from "next/image";



export default function ActivitiesSection() {
  return (
    <section id="section-activities" className="flex flex-col gap-4 scroll-mt-24">
      <h2 className="text-3xl font-medium text-gray-900">Виды деятельности ТОО «КАЭС»:</h2>

      <div className="flex gap-10 items-start">
        <div className="flex-1 min-w-0 flex flex-col gap-1 ">
          <p className="font-light leading-relaxed">- Деятельность в области архитектуры для объектов атомной промышленности и атомной энергетики;</p>
          <p className="font-light leading-relaxed">- Деятельность в области инженерных изысканий и предоставление технических консультаций в этой области для объектов атомной промышленности и атомной энергетики;</p>
          <p className="font-light leading-relaxed">- Исследования и экспериментальные разработки в области мирного использования атомной энергии;</p>
          <p className="font-light leading-relaxed">- Обеспечение готовности электрической мощности к несению нагрузки, регулирование и резервирование электрической мощности;</p>
        </div>
        <div className="shrink-0 w-55 h-55 relative">
          <Image
            src="/images/activities/bashnya.svg"
            alt="Деятельность"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
