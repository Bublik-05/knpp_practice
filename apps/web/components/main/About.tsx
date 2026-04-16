import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative flex w-full overflow-hidden p-30">
      {/* Контент слева */}
      <div className="relative z-10 flex flex-[1.4] flex-col justify-between py-14">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            О Компании
          </h2>
          <p className="max-w-3xl text-lg font-light leading-relaxed">
            ТОО «Казахстанские атомные электрические станции» (ТОО «КАЭС») создано в 2014 году
            в соответствии с планом первоочередных мероприятий по строительству АЭС на территории
            Республики Казахстан (утверждён распоряжением Премьер-Министра РК от 04.05.2014 № 60-р)
            по обеспечению разработки предпроектной (ТЭО) и проектной (проектно-сметной)
            документации по строительству АЭС, а также организации работ по строительству АЭС
            в Республике Казахстан.
          </p>
        </div>
      </div>

      {/* Атом */}
      <Image
        src="/images/atom.png"
        alt=""
        width={500}
        height={500}
        className="pointer-events-none absolute bottom-25 left-[-160px] select-none blur-sm"
        aria-hidden
      />

      {/* Изображение справа от текста */}
      {/* Карточка руководителя справа */}
      <div className="relative flex flex-[0.7] items-center justify-end">
        <article className="flex w-full max-w-[400px] flex-col gap-5">
          <div className="relative flex overflow-hidden rounded-lg bg-[#EEF2F8]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/General_director.png"
                alt="Бердигулов Ернат Кудайбергенович"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#23324d]/45 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[10px] bg-[#E0C58F]" />
          </div>

          <div className="flex flex-col gap-2 px-2">
            <p className="text-lg font-semibold leading-snug text-gray-900 underline underline-offset-4">
              Бердигулов Ернат Кудайбергенович
            </p>

            <p className="text-lg font-light leading-snug text-gray-500">
              Генеральный директор
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}