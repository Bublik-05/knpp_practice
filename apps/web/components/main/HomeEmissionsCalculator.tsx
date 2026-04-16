"use client";

import { useMemo, useState } from "react";

type EnergySource = "coal" | "gas" | "nuclear" | "solar" | "wind";

interface SourceConfig {
    id: EnergySource;
    label: string;
    factor: number; // кг CO2 / МВт·ч
}

interface CalculationResult {
    volume: number;
    source: SourceConfig;
    emissionsKg: number;
    emissionsTons: number;
    carsEquivalent: number;
    comparison: Array<{
        id: EnergySource;
        label: string;
        tons: number;
        factor: number;
    }>;
    ratioToNuclear: number;
}

const SOURCES: SourceConfig[] = [
    { id: "coal", label: "Уголь", factor: 820 },
    { id: "gas", label: "Газ", factor: 490 },
    { id: "nuclear", label: "Атомная энергия", factor: 12 },
    { id: "solar", label: "Солнечная энергия", factor: 40 },
    { id: "wind", label: "Ветровая энергия", factor: 8 },
];

const DEFAULT_SOURCE: EnergySource = "coal";
const DEFAULT_VOLUME = "1000";
const QUICK_VOLUMES = ["100", "1000", "10000"];
const CAR_TONS_PER_YEAR = 4.5;

function formatNumber(value: number, maximumFractionDigits = 0): string {
    return new Intl.NumberFormat("ru-RU", {
        maximumFractionDigits,
    }).format(value);
}

function formatPercent(value: number, maximumFractionDigits = 1): string {
    return new Intl.NumberFormat("ru-RU", {
        maximumFractionDigits,
    }).format(value);
}

function calculateEmissions(
    sourceId: EnergySource,
    volume: number
): CalculationResult {
    const source =
        SOURCES.find((item) => item.id === sourceId) ?? SOURCES[0];

    const emissionsKg = volume * source.factor;
    const emissionsTons = emissionsKg / 1000;
    const carsEquivalent = emissionsTons / CAR_TONS_PER_YEAR;

    const comparison = SOURCES.map((item) => ({
        id: item.id,
        label: item.label,
        tons: (volume * item.factor) / 1000,
        factor: item.factor,
    }));

    const nuclearTons =
        comparison.find((item) => item.id === "nuclear")?.tons ?? 0;

    const ratioToNuclear =
        nuclearTons > 0 ? emissionsTons / nuclearTons : 0;

    return {
        volume,
        source,
        emissionsKg,
        emissionsTons,
        carsEquivalent,
        comparison,
        ratioToNuclear,
    };
}

function getInsightText(result: CalculationResult): string {
    const nuclear =
        result.comparison.find((item) => item.id === "nuclear") ??
        result.comparison[0];

    const coal =
        result.comparison.find((item) => item.id === "coal") ??
        result.comparison[0];

    const gas =
        result.comparison.find((item) => item.id === "gas") ??
        result.comparison[0];

    if (result.source.id === "nuclear") {
        const savedVsCoal = coal.tons - result.emissionsTons;
        const coalReductionPercent =
            coal.tons > 0 ? (savedVsCoal / coal.tons) * 100 : 0;

        return `При выработке ${formatNumber(
            result.volume
        )} МВт·ч атомная энергия формирует около ${formatNumber(
            result.emissionsTons
        )} т CO₂. Для сравнения: уголь при таком же объеме дал бы ${formatNumber(
            coal.tons
        )} т, а газ — ${formatNumber(
            gas.tons
        )} т. Это значит, что по сравнению с углем выбросы ниже примерно на ${formatNumber(
            savedVsCoal
        )} т, или на ${formatPercent(coalReductionPercent)}%.`;
    }

    const savedBySwitchingToNuclear = result.emissionsTons - nuclear.tons;
    const reductionPercent =
        result.emissionsTons > 0
            ? (savedBySwitchingToNuclear / result.emissionsTons) * 100
            : 0;

    return `При выработке ${formatNumber(
        result.volume
    )} МВт·ч ${result.source.label.toLowerCase()} формирует около ${formatNumber(
        result.emissionsTons
    )} т CO₂. Если тот же объем произвести на атомной станции, выбросы составят примерно ${formatNumber(
        nuclear.tons
    )} т. Это на ${formatNumber(
        savedBySwitchingToNuclear
    )} т меньше, то есть выбросы можно сократить примерно на ${formatPercent(
        reductionPercent
    )}%.`;
}

export default function HomeEmissionsCalculator() {
    const [selectedSource, setSelectedSource] =
        useState<EnergySource>(DEFAULT_SOURCE);
    const [volume, setVolume] = useState<string>(DEFAULT_VOLUME);

    const parsedVolume = Number(volume);
    const isValid =
        volume.trim() !== "" &&
        Number.isFinite(parsedVolume) &&
        parsedVolume > 0;

    const safeVolume = isValid ? parsedVolume : Number(DEFAULT_VOLUME);

    const result = useMemo(
        () => calculateEmissions(selectedSource, safeVolume),
        [selectedSource, safeVolume]
    );

    const insightText = useMemo(() => getInsightText(result), [result]);

    const differenceVsNuclear =
        result.source.id === "nuclear"
            ? 0
            : result.emissionsTons -
            (result.comparison.find((item) => item.id === "nuclear")?.tons ?? 0);

    return (
        <section className="px-30 pb-24">
            <div className="mx-auto w-full max-w-8xl">
                <div className="flex flex-col gap-3 max-w-3xl mb-8">
                    <span className="text-[#1E4080] uppercase tracking-widest text-md font-medium">
                        CO₂ калькулятор
                    </span>
                    <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl text-gray-900">
                        Сравнение выбросов разных источников энергии
                    </h2>
                    <p className="font-light text-lg text-gray-600 leading-relaxed">
                        Быстрый расчет выбросов CO₂ при одинаковом объеме выработки
                        электроэнергии.
                    </p>
                </div>

                <div className="rounded-lg border border-[#d9e2f2] bg-[#f8fbff] p-6 md:p-8 shadow-sm">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.92fr_1.08fr]">
                        <div className="rounded-lg border border-gray-200 bg-white p-5 md:p-6 space-y-5">
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-gray-800">
                                    Источник энергии
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {SOURCES.map((source) => {
                                        const isActive = selectedSource === source.id;

                                        return (
                                            <button
                                                key={source.id}
                                                type="button"
                                                onClick={() => setSelectedSource(source.id)}
                                                className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${isActive
                                                    ? "bg-[#1E4080] text-[#E0C58F] shadow-sm"
                                                    : "border border-gray-200 bg-white text-gray-700 hover:border-[#1E4080] hover:text-[#1E4080]"
                                                    }`}
                                            >
                                                {source.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="home-energy-volume"
                                    className="block text-sm font-medium text-gray-800"
                                >
                                    Объем электроэнергии, МВт·ч
                                </label>

                                <input
                                    id="home-energy-volume"
                                    type="number"
                                    min="0"
                                    step="1"
                                    value={volume}
                                    onChange={(e) => setVolume(e.target.value)}
                                    placeholder="Например: 1000"
                                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#1E4080] focus:ring-2 focus:ring-[#1E4080]/10"
                                />

                                <div className="flex flex-wrap gap-2 pt-1">
                                    {QUICK_VOLUMES.map((preset) => (
                                        <button
                                            key={preset}
                                            type="button"
                                            onClick={() => setVolume(preset)}
                                            className="rounded-full border border-[#dbe5f4] bg-[#f7faff] px-3 py-1.5 text-sm text-[#1E4080] transition hover:border-[#1E4080]"
                                        >
                                            {formatNumber(Number(preset))} МВт·ч
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {!isValid ? (
                                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                    Введите корректный объем электроэнергии в МВт·ч.
                                </div>
                            ) : null}

                            <div className="rounded-lg border border-[#dbe5f4] bg-[#f7faff] p-4">
                                <p className="text-sm leading-relaxed text-gray-600">
                                    Расчет ориентировочный и основан на усредненных
                                    коэффициентах выбросов CO₂.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-lg bg-[#1E4080] p-5 md:p-6 text-[#E0C58F] shadow-sm">
                                <p className="text-sm uppercase tracking-[0.18em] text-[#E0C58F]">
                                    Выбросы CO₂
                                </p>
                                <div className="mt-3 text-4xl md:text-5xl font-bold leading-none">
                                    {isValid ? `${formatNumber(result.emissionsTons)} т` : "—"}
                                </div>
                                <p className="mt-3 text-[#E0C58F]/80 font-light leading-relaxed">
                                    {result.source.label} · {isValid ? formatNumber(result.volume) : "—"}{" "}
                                    МВт·ч
                                </p>
                            </div>

                            <div className="rounded-lg border border-[#dbe5f4] bg-white p-5 md:p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-[#1E4080] mb-3">
                                    Пояснение результата
                                </h3>
                                <p className="text-gray-700 font-light leading-relaxed">
                                    {insightText}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                                    <p className="text-sm text-gray-500">
                                        Сравнение с АЭС
                                    </p>
                                    <p className="mt-2 text-2xl font-semibold text-[#1E4080]">
                                        {result.source.id === "nuclear"
                                            ? "1×"
                                            : `${formatNumber(result.ratioToNuclear, 1)}×`}
                                    </p>
                                </div>

                                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                                    <p className="text-sm text-gray-500">
                                        Разница с АЭС
                                    </p>
                                    <p className="mt-2 text-2xl font-semibold text-[#1E4080]">
                                        {result.source.id === "nuclear"
                                            ? "—"
                                            : `${formatNumber(differenceVsNuclear)} т`}
                                    </p>
                                </div>

                                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                                    <p className="text-sm text-gray-500">
                                        Эквивалент авто
                                    </p>
                                    <p className="mt-2 text-2xl font-semibold text-[#1E4080]">
                                        ≈ {formatNumber(result.carsEquivalent)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}