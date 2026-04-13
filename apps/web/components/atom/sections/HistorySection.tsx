"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface HistoryItem {
  year: string;
  events: string[];
}

const historyItems: HistoryItem[] = [
  {
    year: "1950–1956",
    events: [
      "Обнаружено первое урановое месторождение — Кордай (Жамбылская обл.)",
      "Создание Семипалатинск-21, научных лабораторий (г. Курчатов)",
      "Старт промышленной добычи урана в КазССР",
    ],
  },
  {
    year: "1956–1959",
    events: [
      "Начало работ по созданию исследовательских реакторов и испытательных площадок",
    ],
  },
  {
    year: "1960–1965",
    events: [
      "Пуск и выход на проектную мощность реактора ИГР",
      "Разработка урановых бассейнов Шу-Сарысу",
      "Создание урановой геологии как отрасли",
    ],
  },
  {
    year: "1966–1969",
    events: [
      "Расширение предприятий, рост доли Казахстана в уране СССР",
    ],
  },
  {
    year: "1970–1972",
    events: [
      "Развитие технологий подземного выщелачивания",
    ],
  },
  {
    year: "1973",
    events: [
      "Запуск БН-350 в Актау — реактор для производства энергии и опреснения воды",
    ],
  },
  {
    year: "1974–1979",
    events: [
      "Пуск исследовательского реактора ИВГ.1",
      "Рост добычи урана, расширение научных институтов",
      "Создание систем радиационного контроля",
    ],
  },
  {
    year: "1980–1988",
    events: [
      "Казахстан — один из крупнейших производителей урана в СССР",
      "Развитие реакторных исследовательских программ",
      "Усиление радиационного контроля после Чернобыля (1986)",
      "Исследования на Семипалатинском полигоне",
    ],
  },
  {
    year: "1989–1991",
    events: [
      "1989 г. — движение «Невада-Семей» против ядерных испытаний",
      "1990 г. — ограничение испытаний",
      "1991 г. — 29 августа полигон закрыт окончательно",
    ],
  },
  {
    year: "1991–1995",
    events: [
      "Казахстан наследует 1410 ядерных зарядов СССР",
      "Принятие решения стать безъядерным государством",
      "1993 г. — присоединение к ДНЯО",
      "1994 г. — программа «Нанна-Лугара»",
      "1995 г. — вывоз зарядов в Россию",
    ],
  },
  {
    year: "1996–2000",
    events: [
      "Реорганизация атомной отрасли страны",
      "1997 г. — создание «Казатомпром»",
      "Переход к технологии подземного выщелачивания (ISL)",
      "Выход Казахстана в число мировых лидеров по урану",
    ],
  },
  {
    year: "2001–2010",
    events: [
      "Освоение новых месторождений и запуск международных проектов",
      "ISL становится основной технологией добычи",
      "2009 г. — Казахстан становится мировым лидером по добыче урана",
      "2010 г. — стратегический курс на развитие атомной энергетики",
    ],
  },
  {
    year: "2011–2025",
    events: [
      "Модернизация исследовательских реакторов и международное сотрудничество",
      "2014 г. — создание ТОО «КАЭС»",
      "Создание Банка урана МАГАТЭ в Казахстане",
      "2018–2019 гг. — до 40% мировой добычи урана",
      "2022 г. — выбор площадки Улькен для АЭС",
      "2024 г. — референдум (71,12% «за» строительство АЭС)",
      "2025 г. — официальный запуск проекта АЭС",
    ],
  },
];

const ROW_H = 92;
const ACTIVE_YEAR_SHIFT_X = 28;
const CONTENT_OFFSET_Y = 8;

export default function HistorySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = historyItems[activeIdx];

  return (
    <section className="w-full">
      <div className="flex items-start gap-20">
        {/* LEFT TIMELINE */}
        <div className="relative shrink-0 w-[340px]">
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-gray-300"
            style={{ left: 44 }}
          />

          <motion.div
            className="absolute w-[12px] rounded-full bg-[#1E4080]"
            animate={{
              top: activeIdx * ROW_H + 6,
              height: 72,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            style={{ left: 38 }}
          />

          <div className="flex flex-col">
            {historyItems.map((item, idx) => {
              const isActive = idx === activeIdx;

              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className="relative text-left"
                  style={{ height: ROW_H }}
                >
                  <motion.span
                    className="absolute top-1/2 leading-none"
                    initial={false}
                    animate={{
                      x: isActive ? 28 : 0,
                      y: "-50%",
                      fontSize: isActive ? 42 : 20,
                      fontWeight: isActive ? 500 : 400,
                      color: isActive ? "#000000" : "#111111",
                      opacity: isActive ? 1 : 0.9,
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 24 }}
                    style={{ left: 76 }}
                  >
                    {item.year}
                  </motion.span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="relative flex-1 min-w-0"
          style={{ minHeight: historyItems.length * ROW_H }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.year}
              className="absolute left-0 right-0"
              initial={{ opacity: 0, x: 24 }}
              animate={{
                opacity: 1,
                x: 0,
                top: activeIdx * ROW_H + CONTENT_OFFSET_Y,
              }}
              exit={{ opacity: 0, x: -16 }}
              transition={{
                top: { type: "spring", stiffness: 220, damping: 26 },
                opacity: { duration: 0.2 },
                x: { duration: 0.22 },
              }}
            >
              <ul className="space-y-2 max-w-4xl">
                {active.events.map((event, i) => (
                  <motion.li
                    key={`${active.year}-${i}`}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.22 }}
                  >
                    <span className="mt-[12px] h-[6px] w-[6px] rounded-full bg-black shrink-0" />
                    <span className="text-[20px] leading-[1.25] text-black">
                      {event}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}