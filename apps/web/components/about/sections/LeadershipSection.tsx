import Image from "next/image";

const leaders = [
  {
    name: "Бердигулов Ернат Кудайбергенович",
    title: "Генеральный директор",
    image: "/images/General_director.png",
    href: "#",
  },
  {
    name: "Ихсанов Мейрбек Уакасович",
    title: "Руководитель проекта АЭС «Балкаш»",
    image: "/images/leader-placeholder.png",
    href: "#",
  },
  {
    name: "Изтелеуов Бекболсын Жолмуханович",
    title: "Руководитель проекта АЭС «Мойынкум» (раб. название)",
    image: "/images/leader-placeholder.png",
    href: "#",
  },
  {
    name: "Ерболганов Жандос Турысбекулы",
    title: "Управляющий экономикой и финансами",
    image: "/images/leader-placeholder.png",
    href: "#",
  },
  {
    name: "Байдилдин Жигер Еркинбекович",
    title: "Управляющий директор по правовому сопровождению",
    image: "/images/leader-placeholder.png",
    href: "#",
  },
  {
    name: "Окасов Ринат Курмашевич",
    title: "Управляющий директор по безопасности",
    image: "/images/leader-placeholder.png",
    href: "#",
  },
  {
    name: "Рыскулов Марат Кайратович",
    title: "Управляющий директор по цифровизации",
    image: "/images/leader-placeholder.png",
    href: "#",
  },
  {
    name: "Сарпеков Азат Толкынович",
    title: "Руководитель аппарата",
    image: "/images/leader-placeholder.png",
    href: "#",
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
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <a
                href={person.href}
                className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-none border-2 border-[#E0C58F] bg-transparent text-[#E0C58F] transition-colors duration-200 hover:bg-[#C9B07A] hover:border-[#C9B07A] hover:text-white"
                aria-label={`Открыть профиль: ${person.name}`}
              >
                <ArrowIcon />
              </a>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#23324d]/45 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[10px] bg-[#E0C58F]" />
            </div>

            <div className="flex flex-col gap-2 px-2">
              <p className="text-lg leading-snug font-semibold text-gray-900 underline underline-offset-4">
                {person.name}
              </p>
              <p className="text-lg leading-snug font-light text-gray-500">
                {person.title}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="text-lg text-gray-500 font-light">
        Информация о составе руководства будет опубликована после утверждения организационной структуры компании.
      </p>
    </section>
  );
}