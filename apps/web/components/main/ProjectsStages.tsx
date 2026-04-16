"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Stage {
  num: string;
  title: string;
  desc: string;
  status: "done" | "active" | "pending";
  year?: string;
}

const balkhashStages: Stage[] = [
  {
    num: "01",
    title: "Выбор площадки",
    desc: "Геологические, сейсмические и гидрологические исследования береговой зоны озера Балхаш. Одобрение регулятора.",
    status: "done",
    year: "2014–2017",
  },
  {
    num: "02",
    title: "Технико-экономическое обоснование",
    desc: "Сравнительный анализ реакторных технологий, оценка стоимости жизненного цикла, выбор зарубежного партнёра-поставщика.",
    status: "done",
    year: "2017–2021",
  },
  {
    num: "03",
    title: "Проектирование",
    desc: "Разработка предпроектной и проектной документации, согласование с МАГАТЭ и уполномоченным органом РК.",
    status: "active",
    year: "2022 — сейчас",
  },
  {
    num: "04",
    title: "Строительство",
    desc: "Возведение реакторного здания, машинного зала и систем охлаждения. Поэтапный контроль качества.",
    status: "pending",
    year: "Ожидается",
  },
  {
    num: "05",
    title: "Пуско-наладка",
    desc: "Физический пуск реактора, испытания систем безопасности, получение лицензии на эксплуатацию.",
    status: "pending",
    year: "Ожидается",
  },
  {
    num: "06",
    title: "Ввод в эксплуатацию",
    desc: "Выход на промышленную мощность, начало коммерческой поставки электроэнергии в национальную сеть.",
    status: "pending",
    year: "Ожидается",
  },
];

const mainкumStages: Stage[] = [
  {
    num: "01",
    title: "Выбор площадки",
    desc: "Изучение площадки в Жамбылской области, оценка сейсмической активности и водоснабжения от р. Чу.",
    status: "done",
    year: "2016–2019",
  },
  {
    num: "02",
    title: "Технико-экономическое обоснование",
    desc: "Разработка ТЭО малой атомной электростанции, анализ применимости малых модульных реакторов (SMR).",
    status: "done",
    year: "2019–2023",
  },
  {
    num: "03",
    title: "Проектирование",
    desc: "Согласование концепции проекта, выбор технологии реактора и международного партнёра для реализации.",
    status: "active",
    year: "2023 — сейчас",
  },
  {
    num: "04",
    title: "Строительство",
    desc: "Строительство энергоблоков малой мощности, создание локальной инфраструктуры электроснабжения региона.",
    status: "pending",
    year: "Ожидается",
  },
  {
    num: "05",
    title: "Пуско-наладка",
    desc: "Функциональное тестирование модульного реактора, верификация систем управления и безопасности.",
    status: "pending",
    year: "Ожидается",
  },
  {
    num: "06",
    title: "Ввод в эксплуатацию",
    desc: "Начало выработки электроэнергии для нужд Жамбылской области и смежных регионов Казахстана.",
    status: "pending",
    year: "Ожидается",
  },
];

const projects = [
  {
    id: "balkhash",
    label: "Балхаш",
    badge: "Проект №1",
    capacity: "2 400 МВт",
    type: "Крупный энергоблок",
    region: "Алматинская обл.",
    stages: balkhashStages,
  },
  {
    id: "mainkum",
    label: "Майнкум",
    badge: "Проект №2",
    capacity: "300 МВт",
    type: "Малый модульный реактор",
    region: "Жамбылская обл.",
    stages: mainкumStages,
  },
];

const statusConfig = {
  done: {
    circle: "bg-[#1E4080] border-[#1E4080]",
    card: "border-[#1E4080]/20 bg-blue-50/40",
    title: "text-[#1E4080]",
    badge: "bg-blue-100 text-[#1E4080]",
    badgeLabel: "Выполнено",
    year: "text-[#1E4080]",
  },
  active: {
    circle: "bg-white border-[#E0C58F] ring-4 ring-[#E0C58F]/15",
    card: "border-[#1E4080]/40 bg-white shadow-sm",
    title: "text-gray-900",
    badge: "bg-yellow-50 text-yellow-700 border border-yellow-200",
    badgeLabel: "В процессе",
    year: "text-yellow-700",
  },
  pending: {
    circle: "bg-white border-gray-200",
    card: "border-gray-200 bg-white",
    title: "text-gray-500",
    badge: "",
    badgeLabel: "",
    year: "text-gray-400",
  },
};

function StageIcon({ status }: { status: Stage["status"] }) {
  if (status === "done") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }
  if (status === "active") {
    return <div className="w-3 h-3 rounded-full bg-[#E0C58F]" />;
  }
  return null;
}

export default function ProjectsStages() {
  const [activeTab, setActiveTab] = useState<"balkhash" | "mainkum">("balkhash");

  const project = projects.find((p) => p.id === activeTab)!;

  return (
    <section className="relative overflow-hidden w-full p-30">

      {/* Атом — огромный, справа по центру, сильный блюр */}
      <Image
        src="/images/atom.png"
        alt=""
        width={700}
        height={700}
        className="pointer-events-none select-none absolute -right-40 top-1/2 -translate-y-1/2 opacity-[0.06] blur-md"
        aria-hidden
      />

      {/* Атом — маленький, сверху слева */}
      <Image
        src="/images/atom.png"
        alt=""
        width={200}
        height={200}
        className="pointer-events-none select-none absolute top-10 -left-10 opacity-[0.05] blur-sm"
        aria-hidden
      />

      {/* Контент */}
      <div className="relative z-10">

      {/* Header */}
      <div className="flex flex-col gap-2 mb-10">
        <span className="text-[#1E4080] uppercase tracking-widest text-xs font-medium">
          Строительство АЭС
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl text-gray-900">
            Этапы строительства<br className="hidden lg:block" /> по проектам
          </h2>
          <Link
            href="/projects"
            className="self-start sm:self-auto inline-flex items-center gap-2 rounded-full border bg-[#1E4080] text-white px-5 pl-7 py-2.5 text-lg font-light text-[#1E4080] hover:bg-[#E0C58F] transition-colors duration-200"
          >
            Все проекты
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 p-1 bg-gray-200 rounded-lg w-fit">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveTab(p.id as "balkhash" | "mainkum")}
            className={`relative px-6 py-2.5 rounded-lg text-lg font-medium transition-all duration-200 ${
              activeTab === p.id
                ? "bg-white text-[#1E4080] shadow-sm"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Project info bar */}
      <div className="flex flex-wrap items-center gap-4 mb-10 p-5 rounded-lg bg-[#3C507D] border border-[#1E4080]/10">
        <span className="rounded-full bg-[#E0C58F] px-4 py-2 text-md font-medium text-[#112250]">
          {project.badge}
        </span>
        <div className="flex flex-wrap gap-6 text-md">
          <span className="flex items-center gap-1.5 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-medium text-white">{project.capacity}</span>
            <span className="text-white/90 font-light">суммарной мощности</span>
          </span>
          <span className="flex items-center gap-1.5 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
            <span className="font-medium text-white">{project.type}</span>
          </span>
          <span className="flex items-center gap-1.5 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="text-white/90 font-light">{project.region}</span>
          </span>
        </div>
      </div>

      {/* Stages timeline */}
      <div className="relative">
        {/* Vertical connector line */}
        <div className="absolute left-7 top-7 bottom-7 w-px bg-gray-300 hidden md:block" />

        <div className="space-y-4">
          {project.stages.map((stage) => {
            const cfg = statusConfig[stage.status];
            return (
              <div key={stage.num} className="flex gap-6 items-start">

                {/* Circle */}
                <div
                  className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center border-2 z-10 transition-all duration-300 ${cfg.circle}`}
                >
                  {stage.status === "pending" ? (
                    <span className="text-lg font-bold text-gray-300">{stage.num}</span>
                  ) : (
                    <StageIcon status={stage.status} />
                  )}
                </div>

                {/* Card */}
                <div className={`flex-1 rounded-xl border px-6 py-5 transition-all duration-300 ${cfg.card}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className={`text-lg font-semibold ${cfg.title}`}>
                      {stage.title}
                    </h3>
                    {stage.status !== "pending" && (
                      <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${cfg.badge}`}>
                        {cfg.badgeLabel}
                      </span>
                    )}
                    {stage.year && (
                      <span className={`ml-auto text-sm font-light ${cfg.year}`}>
                        {stage.year}
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-gray-600 font-light leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      </div>{/* end relative z-10 */}
    </section>
  );
}
