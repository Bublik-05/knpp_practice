import Image from "next/image";

const leaders = [
  {
    name: "Бердигулов Ернат Кудайбергенович",
    title: "Генеральный директор",
    image: "/images/General_director.png",
    href: "#",
    isPlaceholder: false,
  },
  {
    name: "Информация будет добавлена",
    title: "Должность будет добавлена",
    image: "",
    href: "#",
    isPlaceholder: true,
  },
  {
    name: "Информация будет добавлена",
    title: "Должность будет добавлена",
    image: "",
    href: "#",
    isPlaceholder: true,
  },
];

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

export default function LeadershipSection() {
  return (
    <section
      id="section-leadership"
      className="flex w-full flex-col gap-8"
    >
      <h3 className="text-3xl font-medium text-gray-700">
        Руководство компании
      </h3>

      <div className="flex flex-wrap gap-8">
        {leaders.map((person, index) => (
          <article
            key={index}
            className="flex min-w-[280px] flex-1 basis-[320px] flex-col gap-5"
          >
            <div className="relative flex overflow-hidden rounded-lg bg-[#EEF2F8]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                {person.isPlaceholder ? (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-[#e9edf5] to-[#cfd7e6]">
                    <div className="flex flex-col items-center gap-3 text-center text-gray-500">
                      <div className="h-16 w-16 rounded-full border border-white/70 bg-white/40" />
                      <span className="text-lg font-medium">Фото будет добавлено</span>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                  />
                )}
              </div>

              <a
                href={person.href}
                className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-none border-2 border-[#F2B705] bg-transparent text-[#F2B705] transition-colors duration-200 hover:bg-[#F2B705] hover:text-white"
                aria-label={`Открыть профиль: ${person.name}`}
              >
                <ArrowIcon />
              </a>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#23324d]/45 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[10px] bg-[#F2B705]" />
            </div>

            <div className="flex flex-col gap-2 px-2">
              <p
                className={`text-lg leading-snug ${person.isPlaceholder
                    ? "font-medium text-gray-500"
                    : "font-semibold text-gray-900 underline underline-offset-4"
                  }`}
              >
                {person.name}
              </p>

              <p
                className={`text-lg leading-snug ${person.isPlaceholder
                    ? "font-light text-gray-400"
                    : "font-light text-gray-500"
                  }`}
              >
                {person.title}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}