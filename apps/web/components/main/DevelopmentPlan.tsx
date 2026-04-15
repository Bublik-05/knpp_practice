"use client";

import type { CSSProperties } from "react";

export default function DevelopmentPlan() {
    const stages = [
        {
            id: "01",
            title: "Инициация проекта",
            description:
                "Формирование базовой концепции, определение направления развития и запуск начальной стадии работ.",
            status: "current",
            tag: "Текущий этап",
        },
        {
            id: "02",
            title: "Предварительная проработка",
            description:
                "Уточнение ключевых параметров, анализ направлений и подготовка к следующей фазе развития.",
            status: "planned",
            tag: "Запланировано",
        },
        {
            id: "03",
            title: "Подготовка решений",
            description:
                "Формирование проектных решений, структурирование материалов и дальнейшая детализация.",
            status: "planned",
            tag: "В планах",
        },
        {
            id: "04",
            title: "Этап реализации",
            description:
                "Переход к практической части, запуск основных процессов и последовательное развитие проекта.",
            status: "planned",
            tag: "В планах",
        },
        {
            id: "05",
            title: "Развитие и расширение",
            description:
                "Следующий шаг масштабирования, укрепления результатов и дальнейшего роста проекта.",
            status: "planned",
            tag: "Будущий этап",
        },
    ] as const;

    return (
        <section className="px-30 py-28">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-15">
                <div className="max-w-3xl flex flex-col gap-6">
                    <p className="text-md uppercase tracking-[0.18em] text-[#1E4080]/70">
                        Дорожная карта
                    </p>

                    <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                        План развития
                    </h2>

                    <p className="text-lg font-light leading-relaxed text-gray-600">
                        Проект реализуется поэтапно. Сейчас работа находится на начальной
                        стадии, а последующие шаги отражают дальнейшую траекторию развития.
                    </p>
                </div>

                <div className="relative">
                    <div className="pointer-events-none absolute left-0 right-0 top-[78px] hidden xl:block">
                        <div className="relative h-24 w-full">
                            <svg
                                viewBox="0 0 1400 120"
                                className="h-full w-full"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30 60 C160 60, 170 24, 300 24 C430 24, 440 96, 580 96 C720 96, 720 32, 860 32 C1000 32, 1005 88, 1140 88 C1270 88, 1280 48, 1370 48"
                                    fill="none"
                                    stroke="#D8E3F4"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeDasharray="10 12"
                                />
                                <path
                                    d="M30 60 C160 60, 170 24, 300 24 C430 24, 440 96, 580 96 C720 96, 720 32, 860 32 C1000 32, 1005 88, 1140 88 C1270 88, 1280 48, 1370 48"
                                    fill="none"
                                    stroke="#1E4080"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeDasharray="1 18"
                                    opacity="0.35"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5 xl:gap-5">
                        {stages.map((stage, index) => {
                            const isCurrent = stage.status === "current";

                            const blurMap = [0, 1.4, 2.4, 3.6, 5];
                            const opacityMap = [1, 0.94, 0.84, 0.74, 0.62];
                            const scaleMap = [1.03, 0.995, 0.98, 0.965, 0.95];

                            const blurValue = blurMap[index] ?? 0;
                            const opacityValue = opacityMap[index] ?? 1;
                            const scaleValue = scaleMap[index] ?? 1;

                            const vars = {
                                "--stage-blur": `${blurValue}px`,
                                "--stage-blur-dot": `${blurValue * 0.25}px`,
                                "--stage-opacity": opacityValue,
                                "--stage-scale": scaleValue,
                            } as CSSProperties;

                            return (
                                <div
                                    key={stage.id}
                                    className={`group relative ${index % 2 === 1 ? "xl:mt-20" : "xl:mt-0"
                                        }`}
                                    style={vars}
                                >
                                    <div className="relative mx-auto hidden h-12 items-center justify-center xl:flex">
                                        <div
                                            className={`relative flex h-18 w-18 items-center justify-center rounded-full border-4 text-xl font-semibold transition-all duration-500 ease-out ${isCurrent
                                                    ? "border-white bg-[#1E4080] text-white shadow-[0_12px_30px_rgba(30,64,128,0.25)]"
                                                    : "border-white bg-[#DCE6F5] text-[#1E4080] [filter:blur(var(--stage-blur-dot))] [opacity:var(--stage-opacity)] [transform:scale(var(--stage-scale))] group-hover:[filter:blur(0px)] group-hover:opacity-100 group-hover:scale-[1.06] group-hover:shadow-[0_12px_30px_rgba(30,64,128,0.18)]"
                                                }`}
                                        >
                                            {isCurrent && (
                                                <span className="absolute inline-flex h-18 w-18 rounded-full bg-[#1E4080]/20 animate-ping" />
                                            )}
                                            <span className="relative z-10">{stage.id}</span>
                                        </div>
                                    </div>

                                    <div
                                        className={`relative mt-10 h-full overflow-hidden rounded-lg border p-6 transition-all duration-500 ease-out ${isCurrent
                                                ? "border-[#1E4080] bg-white shadow-[0_18px_50px_rgba(30,64,128,0.10)]"
                                                : "border-[#D7E2F2] bg-[#FBFCFE] [filter:blur(var(--stage-blur))] [opacity:var(--stage-opacity)] [transform:scale(var(--stage-scale))] group-hover:border-[#1E4080]/40 group-hover:bg-white group-hover:[filter:blur(0px)] group-hover:opacity-100 group-hover:scale-[1.035] group-hover:shadow-[0_18px_50px_rgba(30,64,128,0.14)]"
                                            }`}
                                    >
                                        <div
                                            className={`absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl transition-all duration-500 ${isCurrent
                                                    ? "bg-[#1E4080]/10"
                                                    : "bg-[#AFC4E8]/10 group-hover:bg-[#1E4080]/12"
                                                }`}
                                        />

                                        <div className="relative z-10 flex flex-col gap-5">
                                            <div className="flex items-start justify-between gap-3">
                                                <span
                                                    className={`inline-flex rounded-full px-3 py-1.5 text-md font-medium transition-all duration-500 ${isCurrent
                                                            ? "bg-[#1E4080] text-white"
                                                            : "border border-[#D7E2F2] bg-white text-[#60708F] group-hover:border-[#1E4080]/20 group-hover:text-[#1E4080]"
                                                        }`}
                                                >
                                                    {stage.tag}
                                                </span>
                                            </div>

                                            <h3
                                                className={`text-xl leading-snug transition-colors duration-500 ${isCurrent
                                                        ? "font-bold text-gray-900"
                                                        : "font-medium text-gray-800 group-hover:text-gray-900"
                                                    }`}
                                            >
                                                {stage.title}
                                            </h3>

                                            <p className="mt-4 text-[15px] font-light leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-gray-700">
                                                {stage.description}
                                            </p>
                                        </div>

                                        {!isCurrent && (
                                            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-white/[0.04] transition-opacity duration-500 group-hover:opacity-0" />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}