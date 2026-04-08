"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { AnnouncementItem } from "@/lib/announcements";

type Props = {
  item: AnnouncementItem;
};

export default function AnnouncementCard({ item }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full text-left px-7 pt-7 pb-5 flex gap-6 hover:bg-gray-50 duration-300 transition-colors"
      >
        {/* Картинка */}
        <div className="relative w-[180px] h-[180px] rounded-lg overflow-hidden shrink-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 flex-1 min-w-0">
          <p className="font-light text-lg leading-relaxed text-gray-800">
            {item.summary}
          </p>

          <div className="flex flex-row justify-between items-center gap-4 mt-auto">
            <h2 className="font-light text-gray-700 text-lg">{item.date}</h2>

            <span className="inline-flex items-center gap-3 bg-[#1E4080] text-white hover:bg-[#122850] px-7 py-3.5 rounded-full font-light whitespace-nowrap">
              {open ? "Скрыть" : "Подробнее"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </button>

      {open && (
        <div className="border-t border-gray-200 px-7 py-5">
          <h3 className="text-xl font-medium text-gray-900 mb-3">
            {item.title}
          </h3>

          <p className="font-light leading-relaxed text-gray-700">
            {item.details}
          </p>

          <div className="mt-5">
            <Link
              href={item.href}
              className="inline-flex items-center gap-3 text-[#1E4080] font-light hover:underline"
            >
              Перейти к полному объявлению
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}