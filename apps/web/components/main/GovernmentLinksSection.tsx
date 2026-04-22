const links = [
  {
    name: "Акорда",
    url: "https://www.akorda.kz",
    desc: "Официальный сайт Президента РК",
  },
  {
    name: "Сайт Премьер-Министра РК",
    url: "https://www.primeminister.kz",
    desc: "Правительство Республики Казахстан",
  },
  {
    name: "Агентство по атомной энергии",
    url: "https://www.kaec.kz",
    desc: "Агентство Республики Казахстан по атомной энергии",
  },
  {
    name: "Национальный ядерный центр",
    url: "https://www.nnc.kz",
    desc: "НЯЦ РК — Курчатов",
  },
  {
    name: "Институт ядерной физики",
    url: "https://www.inp.kz",
    desc: "ИЯФ — ядерные исследования",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

export default function GovernmentLinksSection() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-6 text-center">
          Государственные ресурсы
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-lg border border-gray-200 bg-white px-6 py-4 hover:border-[#1E4080]/40 hover:shadow-md transition-all duration-200 flex flex-col gap-1"
            >
              <span className="absolute top-3 right-3">
                <ExternalLinkIcon />
              </span>
              <span className="font-medium text-[#1E4080] pr-5">{link.name}</span>
              <span className="text-sm text-gray-500 font-light">{link.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
