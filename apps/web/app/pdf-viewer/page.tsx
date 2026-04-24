"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function PdfViewer() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url") ?? "";
  const title = searchParams.get("title") ?? "Документ";

  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      {/* Top bar */}
      <div className="flex items-center gap-4 px-6 py-3 bg-[#112250] text-white shadow-md z-10">
        <Link
          href="/procurements"
          className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Назад
        </Link>
        <span className="text-white/30">|</span>
        <span className="text-sm font-medium truncate">{title}</span>
        <div className="ml-auto flex items-center gap-3">
          <a
            href={url}
            download
            className="flex items-center gap-1.5 text-sm bg-white/10 hover:bg-white/20 transition-colors px-4 py-1.5 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Скачать
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm bg-white/10 hover:bg-white/20 transition-colors px-4 py-1.5 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Открыть в новой вкладке
          </a>
        </div>
      </div>

      {/* PDF iframe */}
      <iframe
        src={url}
        className="flex-1 w-full border-none"
        style={{ minHeight: "calc(100vh - 56px)" }}
        title={title}
      />
    </main>
  );
}

export default function PdfViewerPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-gray-500">Загрузка...</div>}>
      <PdfViewer />
    </Suspense>
  );
}
