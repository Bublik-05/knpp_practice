"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Achievement {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}

const achievements: Achievement[] = [
  {
    value: 2014,
    suffix: "",
    label: "Год основания",
    sub: "Компания создана по поручению Правительства РК",
  },
  {
    value: 2,
    suffix: "",
    label: "Проекта АЭС",
    sub: "Балхаш и Майнкум — два стратегических объекта страны",
  },
  {
    value: 2400,
    suffix: "+",
    label: "МВт суммарной мощности",
    sub: "Планируемая установленная мощность двух станций",
  },
  {
    value: 20,
    suffix: "+",
    label: "Международных партнёров",
    sub: "Сотрудничество с ведущими ядерными организациями мира",
  },
  {
    value: 500,
    suffix: "+",
    label: "Рабочих мест",
    sub: "Будет создано в период строительства и эксплуатации",
  },
  {
    value: 60,
    suffix: " лет",
    label: "Срок эксплуатации",
    sub: "Расчётный ресурс каждого энергоблока АЭС",
  },
];

function useCountUp(target: number, duration = 4500, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration, active]);

  return count;
}

function AchievementCard({ item, active }: { item: Achievement; active: boolean }) {
  const count = useCountUp(item.value, 1400, active);

  return (
    <div className="group relative flex flex-col gap-3 rounded-2xl bg-white border border-gray-100 px-7 py-8 hover:border-[#1E4080]/30 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.03]">
      {/* Blue circle */}
      <span className="absolute top-[-10px] right-[-10px] h-15 w-15 rounded-full border-2 border-[#1E4080] bg-transparent" />

      {/* Counter */}
      <div className="flex items-baseline gap-0.5">
        <span className="text-5xl font-bold text-[#1E4080] tabular-nums leading-none">
          {count.toLocaleString("ru-RU")}
        </span>
        <span className="text-3xl font-bold text-[#1E4080]">{item.suffix}</span>
      </div>

      {/* Divider */}
      <div className="h-px w-10 group-hover:w-16 transition-all duration-500" />

      {/* Label */}
      <h3 className="text-gray-900 font-bold text-lg leading-snug">
        {item.label}
      </h3>

      {/* Sub */}
      <p className="text-gray-500 font-light text-lg leading-relaxed">
        {item.sub}
      </p>
    </div>
  );
}

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden w-full p-30 pb-10 bg-[#F0F0F0]">

      {/* Атом — большой, справа снизу */}
      <Image
        src="/images/atom.png"
        alt=""
        width={700}
        height={700}
        className="pointer-events-none select-none absolute -bottom-10 -right-50 blur-xs"
        aria-hidden
      />

      {/* Атом — маленький, сверху по центру */}
      <Image
        src="/images/atom.png"
        alt=""
        width={220}
        height={220}
        className="pointer-events-none select-none absolute top-30 left-1/2 -translate-x-1/2 "
        aria-hidden
      />

      {/* Контент */}
      <div className="relative z-10">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-[#1E4080] uppercase tracking-widest text-md font-medium">
          Цифры и факты
        </span>
        <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl text-gray-900">
          Ключевые достижения
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((item, i) => (
          <AchievementCard key={i} item={item} active={triggered} />
        ))}
      </div>
      </div>
    </section>
  );
}
