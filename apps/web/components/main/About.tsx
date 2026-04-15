import Image from "next/image";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M17 7H9M17 7V15"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section className="relative overflow-hidden w-full p-30">
      <Image
        src="/images/atom.png"
        alt=""
        width={1000}
        height={1000}
        className="pointer-events-none select-none absolute -right-32 top-1/2 -translate-y-1/2"
        aria-hidden
      />

      <Image
        src="/images/atom.png"
        alt=""
        width={500}
        height={500}
        className="pointer-events-none select-none absolute bottom-25 left-[-160] blur-sm"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col justify-between gap-10 py-14">
          <div className="flex max-w-3xl flex-col gap-6">
            <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl">
              О ТОО «КАЭС»
            </h2>

            <p className="font-light text-lg leading-relaxed">
              ТОО «Казахстанские атомные электрические станции» (ТОО «КАЭС») создано в 2014 году
              в соответствии с планом первоочередных мероприятий по строительству АЭС на территории
              Республики Казахстан (утверждён распоряжением Премьер-Министра РК от 04.05.2014 № 60-р)
              по обеспечению разработки предпроектной (ТЭО) и проектной (проектно-сметной) документации
              по строительству АЭС, а также организации работ по строительству АЭС в Республике Казахстан.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#1E4080] px-7 py-3.5 font-light text-white transition-colors duration-200 hover:bg-[#0D1E3E]"
          >
            Узнать подробнее
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="flex w-full max-w-[380px] shrink-0 flex-col gap-5">
          <div className="relative flex overflow-hidden rounded-lg bg-[#EEF2F8]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/General_director.png"
                alt="Бердигулов Ернат Кудайбергенович"
                fill
                className="object-cover object-top"
              />
            </div>

            <Link
              href="/about"
              className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center border-2 border-[#F2B705] bg-transparent text-[#F2B705] transition-colors duration-200 hover:bg-[#F2B705] hover:text-white"
              aria-label="Открыть страницу о руководстве"
            >
              <ArrowIcon />
            </Link>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#23324d]/45 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[10px] bg-[#F2B705]" />
          </div>

          <div className="flex flex-col gap-2 px-2">
            <p className="text-lg font-semibold leading-snug text-gray-900 underline underline-offset-4">
              Бердигулов Ернат Кудайбергенович
            </p>
            <p className="text-lg font-light leading-snug text-gray-500">
              Генеральный директор
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}