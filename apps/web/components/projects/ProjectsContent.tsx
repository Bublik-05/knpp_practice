"use client";

import { useState } from "react";
import BalkhashProject from "./BalkhashProject";
import MainkumProject from "./MainkumProject";
import Breadcrumb from "@/components/ui/Breadcrumb";
import KazakhstanMapSection from "@/components/main/KazakhstanMapSection";

// ── Stage data copied from ProjectsStages (main page component) ──────────────

type StageStatus = "done" | "active" | "pending";

interface Stage {
  num: string;
  title: string;
  desc: string;
  status: StageStatus;
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

const mainkumStages: Stage[] = [
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

const statusConfig: Record<StageStatus, {
  circle: string;
  card: string;
  titleColor: string;
  badge: string;
  badgeLabel: string;
  yearColor: string;
}> = {
  done: {
    circle: "bg-[#1E4080] border-[#1E4080]",
    card: "border-[#1E4080]/20 bg-blue-50/40",
    titleColor: "text-[#1E4080]",
    badge: "bg-blue-100 text-[#1E4080]",
    badgeLabel: "Выполнено",
    yearColor: "text-[#1E4080]",
  },
  active: {
    circle: "bg-white border-[#E0C58F] ring-4 ring-[#E0C58F]/15",
    card: "border-[#1E4080]/40 bg-white shadow-sm",
    titleColor: "text-gray-900",
    badge: "bg-yellow-50 text-yellow-700 border border-yellow-200",
    badgeLabel: "В процессе",
    yearColor: "text-yellow-700",
  },
  pending: {
    circle: "bg-white border-gray-200",
    card: "border-gray-200 bg-white",
    titleColor: "text-gray-500",
    badge: "",
    badgeLabel: "",
    yearColor: "text-gray-400",
  },
};

function StageCircleIcon({ status }: { status: StageStatus }) {
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

function StagesList({ stages }: { stages: Stage[] }) {
  return (
    <div className="relative mt-10">
      <div className="absolute left-7 top-7 bottom-7 w-px bg-gray-300 hidden md:block" />
      <div className="space-y-4">
        {stages.map((stage) => {
          const cfg = statusConfig[stage.status];
          return (
            <div key={stage.num} className="flex gap-6 items-start">
              <div className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center border-2 z-10 transition-all duration-300 ${cfg.circle}`}>
                {stage.status === "pending" ? (
                  <span className="text-lg font-bold text-gray-300">{stage.num}</span>
                ) : (
                  <StageCircleIcon status={stage.status} />
                )}
              </div>
              <div className={`flex-1 rounded-xl border px-6 py-5 transition-all duration-300 ${cfg.card}`}>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className={`text-lg font-semibold ${cfg.titleColor}`}>{stage.title}</h3>
                  {stage.status !== "pending" && (
                    <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${cfg.badge}`}>
                      {cfg.badgeLabel}
                    </span>
                  )}
                  {stage.year && (
                    <span className={`ml-auto text-sm font-light ${cfg.yearColor}`}>{stage.year}</span>
                  )}
                </div>
                <p className="text-lg text-gray-600 font-light leading-relaxed">{stage.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type Tab = "balkhash" | "mainkum" | "project3" | "project4" ;

export default function ProjectsContent() {
  const [activeTab, setActiveTab] = useState<Tab>("balkhash");

  return (
    <section className="max-w-7xl mx-auto px-8 py-8 space-y-14">

      <Breadcrumb items={[{ label: "Проекты" }]} />

      {/* Intro */}
      <div className="max-w-2xl">
        <p className="text-lg text-gray-700 font-light leading-relaxed">
          ТОО «КАЭС» реализует два ключевых проекта по размещению атомной электростанции
          в Казахстане. Оба проекта проходят стадию детального изучения и оценки.
        </p>
      </div>

      {/* Интерактивная карта проектов АЭС */}
      <KazakhstanMapSection className="flex flex-col gap-8" />

      {/* Tab switcher */}
      <div className="flex flex-wrap gap-2 p-1 bg-gray-100 rounded-lg w-fit">
        {(["balkhash", "mainkum", "project3", "project4"] as Tab[]).map((tab) => {
          const tabLabels: Record<Tab, string> = {
            balkhash: "АЭС «Балхаш»",
            mainkum: "АЭС «Мойынкум»",
            project3: "Проект 4.3",
            project4: "Проект 4.4"
          };
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg text-[14px] font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-white text-[#1E4080] shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tabLabels[tab]}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      {activeTab === "balkhash" && (
        <>
          <BalkhashProject />
          <div>
            <h2 className="text-3xl font-medium text-gray-900 mb-2">
              Этапы строительства — АЭС «Балхаш»
            </h2>
            <p className="text-lg text-gray-600 font-light mb-8">
              Крупный двухблочный энергетический объект на южном берегу озера Балхаш. Суммарная мощность — 2 400 МВт.
            </p>
            <StagesList stages={balkhashStages} />
          </div>
        </>
      )}

      {activeTab === "mainkum" && (
        <>
          <MainkumProject />
          <div>
            <h2 className="text-3xl font-medium text-gray-900 mb-2">
              Этапы строительства — АЭС «Мойынкум»
            </h2>
            <p className="text-lg text-gray-600 font-light mb-8">
              Малый модульный реактор для электроснабжения южных регионов страны. Мощность — до 300 МВт.
            </p>
            <StagesList stages={mainkumStages} />
          </div>
        </>
      )}

      {(activeTab === "project3" || activeTab === "project4") && (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-4 rounded-2xl border border-dashed border-gray-300 bg-gray-50">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-500">Данные отсутствуют</h3>
          <p className="text-gray-400 font-light max-w-sm">
            Информация по данному проекту находится в стадии формирования и будет добавлена позднее.
          </p>
        </div>
      )}

    </section>
  );
}
