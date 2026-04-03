import Image from "next/image";

const leaders = [
  {
    name: "Бердигулов Ернат Кудайбергенович",
    title: "Генеральный директор",
    image: "/images/General_director.png",
  },
];

export default function LeadershipSection() {
  return (
    <section id="section-leadership" className="flex flex-col gap-4 scroll-mt-24">
      <h2 className="text-4xl font-bold text-gray-900">Руководство</h2>
      <h3 className="text-2xl font-medium text-gray-700">Руководство компании</h3>

      <div className="flex flex-wrap gap-6">
        {leaders.map((person, i) => (
          <div key={i} className="flex gap-5 bg-white rounded-lg p-5 shadow-sm border border-gray-100 w-full max-w-lg">
            <div className="relative w-50 h-50 rounded-lg overflow-hidden shrink-0">
              <Image src={person.image} alt={person.name} fill className="object-cover object-top" />
            </div>
            <div className="flex flex-col items-start">
              <p className="font-medium text-gray-900 text-lg leading-snug">{person.name}</p>
              <p className="text-gray-500 font-light mt-1">{person.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
