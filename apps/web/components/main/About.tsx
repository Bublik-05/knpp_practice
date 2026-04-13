import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "НПА",
    description: "Ознакомится со списком нормативно-правовых актов.",
    icon: "/icons/basil_document-outline.svg",
    href: "/about?section=npa",
  },
  {
    title: "ЗАКУПКИ",
    description: "Актуальные закупки компании",
    icon: "/icons/fluent_document-one-page-add-24-regular.svg",
    href: "/procurement",
  },
];

export default function About() {
  return (
    <section className="flex w-full p-30">
      {/* ── Левая часть: текст + кнопка ── */}
      <div className="flex flex-col justify-between flex-[1.4] py-14">
        <div className="flex flex-col gap-6">
          <h2
            className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl">
            О ТОО «КАЭС»
          </h2>
          <p className=" font-light text-lg leading-relaxed max-w-3xl">
            ТОО «Казахстанские атомные электрические станции» (ТОО «КАЭС) создано в 2014 году в соответствии с планом первоочередных мероприятий по строительству АЭС на территории Республики Казахстан (утверждён распоряжением Премьер-Министра РК от 04.05.2014 № 60-р) по обеспечению разработки предпроектной (ТЭО) и проектной (проектно-сметной) документации по строительству АЭС, а также организация работ по строительству АЭС в Республике Казахстан.

          </p>
        </div>

        <Link
          href="/about"
          className="
            mt-10 self-start inline-flex items-center gap-3
            bg-[#1E4080] text-white
            px-7 py-3.5 rounded-full font-light
            hover:bg-[#0D1E3E] transition-colors duration-200
          "
        >
          Узнать подробнее
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
