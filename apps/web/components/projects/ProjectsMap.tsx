"use client";

import { useState } from "react";

const projects = [
  {
    id: "balkhash",
    name: "Балхаш",
    fullName: "АЭС «Балхаш»",
    region: "Алматинская область",
    coords: { x: 68, y: 58 },
    power: "2 400 МВт",
    status: "Проектирование",
    desc: "Крупная двухблочная АЭС на южном берегу озера Балхаш. Суммарная мощность 2 400 МВт.",
  },
  {
    id: "moinkum",
    name: "Мойынкум",
    fullName: "АЭС «Мойынкум»",
    region: "Жамбылская область",
    coords: { x: 56, y: 67 },
    power: "до 300 МВт",
    status: "Предварительные исследования",
    desc: "Малый модульный реактор для южных регионов. Мощность до 300 МВт.",
  },
];

const cities = [
  { name: "Астана", x: 57, y: 30 },
  { name: "Алматы", x: 70, y: 65 },
  { name: "Актобе", x: 28, y: 33 },
];

export default function ProjectsMap() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <div className="relative w-full rounded-lg overflow-hidden bg-white shadow-sm">
      <div className="relative h-[520px] md:h-[560px] bg-[#f8fafc]">
        <svg
          viewBox="0 0 800 450"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect width="800" height="450" fill="#f8fafc" />

          <g transform="translate(0 -10) scale(1.08 1.08)">
            <path
              d="M 80,120 L 120,90 L 200,80 L 290,60 L 380,50 L 460,55 L 530,65 L 600,80 L 670,110 L 720,150 L 740,200 L 730,260 L 700,310 L 660,350 L 600,380 L 530,400 L 450,410 L 370,400 L 290,380 L 220,360 L 160,330 L 110,290 L 75,250 L 60,200 Z"
              fill="#E0C58F"
              stroke="#ffffff"
              strokeWidth="2"
            />

            <path
              d="M 250,85 L 270,150 L 240,220 L 280,300 L 260,370"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.9"
            />
            <path
              d="M 390,55 L 380,130 L 420,200 L 390,280 L 410,405"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.9"
            />
            <path
              d="M 540,70 L 520,150 L 560,240 L 530,395"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.9"
            />
            <path
              d="M 85,210 L 210,210 L 330,230 L 470,225 L 620,250 L 730,235"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.9"
            />

            {cities.map((city) => (
              <text
                key={city.name}
                x={(city.x / 100) * 800}
                y={(city.y / 100) * 450}
                fontSize="12"
                fill="#475569"
                textAnchor="middle"
                className="select-none pointer-events-none"
              >
                {city.name}
              </text>
            ))}
          </g>
        </svg>

        {projects.map((p) => (
          <button
            key={p.id}
            type="button"
            style={{
              position: "absolute",
              left: `${p.coords.x}%`,
              top: `${p.coords.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => setSelectedId(p.id === selectedId ? null : p.id)}
            onMouseEnter={() => setHoveredId(p.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group z-20"
            aria-label={p.fullName}
          >
            <span className="absolute left-1/2 top-8 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#dbe5f4] bg-white px-3 py-1 text-xs font-medium text-[#1E4080] shadow-sm">
              {p.name}
            </span>

            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full border-4 border-white shadow-lg transition-all duration-200 ${
                selectedId === p.id || hoveredId === p.id
                  ? "scale-125 bg-[#E0C58F]"
                  : "bg-[#1E4080]"
              }`}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            </span>
          </button>
        ))}

        {/* Popup — desktop only (absolute on map) */}
        {selectedId && selectedProject && (
          <div
            style={{
              position: "absolute",
              left: `${
                selectedProject.coords.x > 65
                  ? selectedProject.coords.x - 30
                  : selectedProject.coords.x + 4
              }%`,
              top: `${selectedProject.coords.y - 14}%`,
            }}
            className="z-30 hidden md:block w-72 rounded-xl border border-[#dbe5f4] bg-white p-5 shadow-xl"
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute right-3 top-3 text-xl leading-none text-gray-400 transition-colors hover:text-gray-600"
              aria-label="Закрыть"
            >
              ×
            </button>
            <h3 className="mb-1 pr-6 text-base font-bold text-[#1E4080]">{selectedProject.fullName}</h3>
            <p className="mb-3 text-sm text-gray-500">{selectedProject.region}</p>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-blue-100 bg-blue-50 px-2 py-1 text-xs font-medium text-[#1E4080]">{selectedProject.power}</span>
              <span className="rounded-full border border-amber-100 bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">{selectedProject.status}</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">{selectedProject.desc}</p>
            <button onClick={() => setSelectedId(null)} className="w-full rounded-lg border border-[#1E4080]/30 py-2 text-sm font-medium text-[#1E4080] transition-colors hover:bg-[#1E4080]/5">Закрыть</button>
          </div>
        )}
      </div>

      {/* Mobile info panel — shows below map when marker selected */}
      {selectedId && selectedProject && (
        <div className="md:hidden border-t border-[#dbe5f4] bg-white px-5 py-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-base font-bold text-[#1E4080]">{selectedProject.fullName}</h3>
            <button onClick={() => setSelectedId(null)} className="text-xl leading-none text-gray-400 ml-3">×</button>
          </div>
          <p className="text-sm text-gray-500 mb-2">{selectedProject.region}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="rounded-full border border-blue-100 bg-blue-50 px-2 py-1 text-xs font-medium text-[#1E4080]">{selectedProject.power}</span>
            <span className="rounded-full border border-amber-100 bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">{selectedProject.status}</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">{selectedProject.desc}</p>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 md:gap-6 border-t border-[#dbe5f4] bg-white px-5 py-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="h-3.5 w-3.5 rounded-full border border-white bg-[#1E4080] shadow-sm" />
          Объект проектирования
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="h-3.5 w-3.5 rounded-full border border-white bg-[#E0C58F] shadow-sm" />
          Выбранный объект
        </div>

        <p className="ml-auto text-xs text-gray-400">
          Нажмите на маркер для подробностей
        </p>
      </div>
    </div>
  );
}