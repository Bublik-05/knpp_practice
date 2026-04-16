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
    <section className="relative overflow-hidden flex w-full p-30">

      {/* Контент слева */}
      <div className="relative z-10 flex flex-col justify-between flex-[1.4] py-14">
        <div className="flex flex-col gap-6">
          <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl">
            О Компании
          </h2>
          <p className="font-light text-lg leading-relaxed max-w-3xl">
            ТОО «Казахстанские атомные электрические станции» (ТОО «КАЭС) создано в 2014 году
            в соответствии с планом первоочередных мероприятий по строительству АЭС на территории
            Республики Казахстан (утверждён распоряжением Премьер-Министра РК от 04.05.2014 № 60-р)
            по обеспечению разработки предпроектной (ТЭО) и проектной (проектно-сметной) документации
            по строительству АЭС, а также организация работ по строительству АЭС в Республике Казахстан.
          </p>
        </div>
      </div>

      {/* Атом — маленький, снизу слева */}
      <Image
        src="/images/atom.png"
        alt=""
        width={500}
        height={500}
        className="pointer-events-none select-none absolute bottom-25 left-[-160] blur-sm"
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

            <Link
              href="#"
              className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-none border-2 border-[#E0C58F] bg-transparent text-[#E0C58F] transition-colors duration-200 hover:border-[#C9B07A] hover:bg-[#C9B07A] hover:text-white"
              aria-label="Открыть профиль генерального директора"
            >
              <ArrowIcon />
            </Link>

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