"use client";

import Image from "next/image";
import Link from "next/link";

function UserPlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#eef4ff]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 text-[#1E4080]/30"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    </div>
  );
}

export default function CEOSection() {
  return (
    <section className=" py-16 px-8">
      <div className="max-w-7xl mx-auto lg:flex gap-12 items-center">

        {/* Left — photo */}
        <div className="lg:w-auto shrink-0 mb-8 lg:mb-0">
          <div className="w-[300px] h-[400px] rounded-lg shadow overflow-hidden relative">
            <Image
              src="/images/General_director.png"
              alt="Бердигулов Ернат Кудайбергенович"
              width={300}
              height={400}
              className="object-cover object-top w-full h-full"
              onError={() => {}}
            />
          </div>
        </div>

        {/* Right — info */}
        <div className="flex flex-col gap-4 flex-1">
          <span className="text-xs uppercase tracking-widest text-[#1E4080] bg-[#E0C58F] rounded-full px-3 py-1 w-fit">
            Руководство
          </span>

          <h2 className="text-3xl font-bold text-gray-900">
            Бердигулов Ернат Кудайбергенович
          </h2>

          <p className="text-lg text-gray-500 font-light">
            Генеральный директор ТОО «КАЭС»
          </p>

          <p className="text-lg text-gray-700 font-light leading-relaxed">
            Руководит реализацией стратегических проектов в области атомной энергетики
            Казахстана. Под его руководством ТОО «КАЭС» ведёт активную работу по
            подготовке к строительству атомных электростанций и развитию международного
            сотрудничества.
          </p>

          <Link
            href="/about?section=leadership"
            className="inline-flex items-center gap-2 text-[#1E4080] font-medium px-6 py-3 rounded-full border border-transparent hover:border-[#1E4080] w-fit"
          >
            Подробнее о руководстве
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

      </div>
    </section>
  );
}
