"use client";

import { useState } from "react";

const reactors = [
  {
    id: "vver",
    label: "ВВЭР-1200",
    title: "Водо-водяной реактор (ВВЭР-1200, Россия)",
    specs: [
      { name: "Поколение", value: "III+" },
      { name: "Разработчик", value: "Росатом (Россия)" },
      { name: "Тепловая мощность", value: "3300 МВт(т)" },
      { name: "Электрическая мощность", value: "1200 МВт(э)" },
      { name: "Активная зона", value: "163 топливных сборок ТВС" },
      { name: "Схема", value: "четырехпетлевая" },
      { name: "Топливный цикл", value: "12–18 месяцев (возможность продления)" },
    ],
    description:
      "ВВЭР сочетает активные и пассивные системы безопасности, обеспечивая устойчивую работу даже при потере внешнего электропитания. Конструкция соответствует международным стандартам МАГАТЭ для установок поколения III+.",
    deployed: "Россия, Беларусь",
    building: "Египет, Бангладеш, Венгрия, Китай",
  },
  {
    id: "hpr",
    label: "HPR1000",
    title: "Водо-водяной реактор под давлением (HPR1000, Китай)",
    specs: [
      { name: "Поколение", value: "III+" },
      { name: "Разработчик", value: "CNNC (Китай)" },
      { name: "Тепловая мощность", value: "3050 МВт(т)" },
      { name: "Электрическая мощность", value: "1200 МВт(э)" },
      { name: "Активная зона", value: "177 топливных сборок CF3 (UO₂)" },
      { name: "Схема", value: "трёхпетлевая" },
      { name: "Топливный цикл", value: "18 месяцев (возможность продления)" },
    ],
    description:
      "HPR1000 сочетает активные и пассивные системы безопасности, обеспечивая устойчивую работу даже при потере внешнего электропитания. Конструкция соответствует международным стандартам МАГАТЭ.",
    deployedList: [
      "Китай — Fuqing-5, Fuqing-6, Fangchenggang-3, Fangchenggang-4, Zhangzhou-1",
      "Пакистан — Karachi-2, Karachi-3",
    ],
  },
  {
    id: "mmr",
    label: "ММР",
    title: "Малый модульный реактор",
    specs: [],
    description: "",
    points: [
      "Реакторы мощностью до 300 МВт по определению МАГАТЭ",
      "Отличаются модульной конструкцией, малой мощностью и высокой безопасностью",
      "Оснащены пассивными системами безопасности и имеют упрощённую конструкцию",
      "Первые ММР уже работают: плавучая АЭС «Академик Ломоносов» (Россия) и HTR-PM (Китай, 210 МВт)",
      "Рассматриваются как перспективное решение для удалённых и арктических регионов",
      "В настоящее время в разработке находится более 80 концепций ММР",
    ],
  },
];

export default function TypesSection() {
  const [active, setActive] = useState(reactors[0].id);
  const reactor = reactors.find((r) => r.id === active)!;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-medium">
        Типы реакторов, рассматриваемых для Казахстана
      </h2>

      <p className="text-lg text-gray-700">
        Ниже представлены основные типы реакторов, которые рассматриваются в
        качестве возможных вариантов для строительства атомной электростанции в Казахстане.
      </p>

      {/* Переключатель */}
      <div className="flex gap-2">
        {reactors.map((r) => (
          <button
            key={r.id}
            onClick={() => setActive(r.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
              active === r.id
                ? "bg-[#1E4080] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* Одна карточка */}
      <div className="rounded-lg border border-gray-200 p-6 shadow-sm bg-white">
        <h3 className="text-xl font-medium mb-4">{reactor.title}</h3>

        {reactor.specs.length > 0 && (
          <div className="space-y-2 text-lg text-gray-700 font-light mb-4">
            {reactor.specs.map((s) => (
              <p key={s.name}>
                <span className="font-medium text-gray-900">{s.name}:</span> {s.value}
              </p>
            ))}
          </div>
        )}

        {reactor.description && (
          <p className="text-lg text-gray-700 font-light leading-relaxed mb-4">{reactor.description}</p>
        )}

        {reactor.points && (
          <ul className="list-disc ml-6 text-lg text-gray-700 font-light space-y-2 leading-relaxed">
            {reactor.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        )}

        {reactor.deployed && (
          <div className="mt-4 text-lg text-gray-700 font-light space-y-2">
            <p><span className="font-medium text-gray-900">Введён в эксплуатацию:</span> {reactor.deployed}</p>
            {reactor.building && (
              <p><span className="font-medium text-gray-900">Строится:</span> {reactor.building}</p>
            )}
          </div>
        )}

        {reactor.deployedList && (
          <div className="mt-4 text-lg text-gray-700 font-light">
            <p className="font-medium text-gray-900 mb-2">Введён в эксплуатацию:</p>
            <ul className="list-disc ml-6 space-y-1">
              {reactor.deployedList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
