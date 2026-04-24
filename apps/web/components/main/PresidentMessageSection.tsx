import Link from "next/link";


export default function PresidentMessageSection() {
  return (
    <section className="relative overflow-hidden w-full px-30 py-20">

      <div className="relative z-10 flex flex-col gap-14">

        {/* Top block */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">

          {/* Left */}
          <div className="lg:w-1/3 shrink-0 flex flex-col gap-4">
            <span className="inline-block text-[#1E4080] uppercase tracking-widest text-sm font-medium">
              Официальная позиция
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Послание<br />Президента<br />Республики<br />Казахстан
            </h2>
            <Link
              href="/president-message"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#1E4080] px-6 py-3 text-md text-[#1E4080] font-light hover:bg-[#E0C58F] hover:text-[#112250] transition-colors w-fit"
            >
              Читать полностью
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right — main quote */}
          <div className="flex-1">
            <div className="text-[#1E4080] text-8xl font-serif leading-none mb-2 select-none" aria-hidden>
              "
            </div>
            <blockquote className=" text-xl lg:text-2xl font-light leading-relaxed">
              Казахстан должен обеспечить надёжное, доступное и экологически чистое
              энергоснабжение для устойчивого экономического роста. Строительство атомной
              электростанции — это не просто энергетический проект, это вклад в будущее
              наших детей и суверенитет страны на десятилетия вперёд.
            </blockquote>
            <p className="mt-6 text-[#1E4080] font-medium tracking-wide">
              — Касым-Жомарт Токаев,<br />
              <span className=" font-light text-md">
                Президент Республики Казахстан
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
