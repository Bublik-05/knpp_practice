import Image from "next/image";

const leaders = [
  {
    name: "Бердітұлов Ернат Күдайбергенович",
    title: "Генеральный директор",
    image: "/images/news1-img.jpg",
  },
];

export default function LeadershipSection() {
  return (
    <section id="section-leadership" className="flex flex-col gap-6 scroll-mt-24">
      <h2 className="text-4xl font-bold text-gray-900">Руководство</h2>
      <h3 className="text-lg font-medium text-gray-700">Руководство компании</h3>

      <div className="flex flex-wrap gap-6">
        {leaders.map((person, i) => (
          <div key={i} className="flex gap-5 items-center bg-white rounded-xl p-5 shadow-sm border border-gray-100 w-full max-w-sm">
            <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
              <Image src={person.image} alt={person.name} fill className="object-cover object-top" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-[15px] leading-snug">{person.name}</p>
              <p className="text-gray-500 font-light text-[14px] mt-1">{person.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
