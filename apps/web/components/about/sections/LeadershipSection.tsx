import Image from "next/image";

const leaders = [
  {
    name: "Бердигулов Ернат Кудайбергенович",
    title: "Генеральный директор",
    image: "/images/General_director.png",
  },
  {
    name: "Ихсанов Мейрбек Уакасович",
    title: "Руководитель проекта АЭС «Балкаш»",
    image: "/images/leader-placeholder.png",
  },
  {
    name: "Изтелеуов Бекболсын Жолмуханович",
    title: "Руководитель проекта АЭС «Мойынкум» (раб. название)",
    image: "/images/leader-placeholder.png",
  },
  {
    name: "Ерболганов Жандос Турысбекулы",
    title: "Управляющий экономикой и финансами",
    image: "/images/leader-placeholder.png",
  },
  {
    name: "Байдилдин Жигер Еркинбекович",
    title: "Управляющий директор по правовому сопровождению",
    image: "/images/leader-placeholder.png",
  },
  {
    name: "Окасов Ринат Курмашевич",
    title: "Управляющий директор по безопасности",
    image: "/images/leader-placeholder.png",
  },
  {
    name: "Рыскулов Марат Кайратович",
    title: "Управляющий директор по цифровизации",
    image: "/images/leader-placeholder.png",
  },
  {
    name: "Сарпеков Азат Толкынович",
    title: "Руководитель аппарата",
    image: "/images/leader-placeholder.png",
  },
];

export default function LeadershipSection() {
  return (
    <section id="section-leadership" className="flex w-full flex-col gap-8">
      <h3 className="text-3xl font-medium text-gray-700">
        Руководство компании
      </h3>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {leaders.map((person, index) => (
          <article
            key={index}
            className="flex h-full flex-col"
          >
            <div className="relative overflow-hidden rounded-lg bg-[#EEF2F8]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#23324d]/45 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[10px] bg-[#E0C58F]" />
            </div>

            <div className="flex flex-1 flex-col gap-2 px-2 pt-5">
              <p className="text-lg leading-snug font-semibold text-gray-900 underline underline-offset-4 min-h-[56px]">
                {person.name}
              </p>
              <p className="text-lg leading-snug font-light text-gray-500 min-h-[84px]">
                {person.title}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}