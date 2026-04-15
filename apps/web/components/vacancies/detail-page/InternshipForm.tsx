"use client";

import { useState, useRef } from "react";

export default function InternshipForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Заявка отправлена!</h3>
        <p className="text-gray-500 text-sm font-light">
          Мы получили вашу анкету и свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <div id="internship-form" className="bg-[#F8FAFF] rounded-2xl border border-[#1E4080]/10 p-6 md:p-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Подать заявку на стажировку</h2>
      <p className="text-gray-500 font-light text-sm mb-8">
        Заполните форму ниже — мы рассмотрим вашу заявку и свяжемся с вами.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* ФИО */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fullname" className="text-sm font-medium text-gray-700">
              Имя и фамилия <span className="text-red-500">*</span>
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              required
              placeholder="Иван Иванов"
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1E4080] focus:outline-none focus:ring-2 focus:ring-[#1E4080]/10 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Электронная почта <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="example@mail.com"
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1E4080] focus:outline-none focus:ring-2 focus:ring-[#1E4080]/10 transition"
            />
          </div>

          {/* Телефон */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Номер телефона
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1E4080] focus:outline-none focus:ring-2 focus:ring-[#1E4080]/10 transition"
            />
          </div>

          {/* Специализация */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="specialty" className="text-sm font-medium text-gray-700">
              Желаемое направление <span className="text-red-500">*</span>
            </label>
            <select
              id="specialty"
              name="specialty"
              required
              defaultValue=""
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-[#1E4080] focus:outline-none focus:ring-2 focus:ring-[#1E4080]/10 transition appearance-none"
            >
              <option value="" disabled>
                Выберите направление
              </option>
              <option value="it">Отдел IT</option>
              <option value="engineering">Инженерный отдел</option>
              <option value="safety">Отдел безопасности</option>
              <option value="finance">Финансовый отдел</option>
              <option value="hr">Отдел кадров</option>
              <option value="legal">Юридический отдел</option>
              <option value="logistics">Отдел логистики</option>
            </select>
          </div>
        </div>

        {/* Сообщение */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Сопроводительное письмо
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Расскажите о себе, своём опыте и почему вас интересует стажировка в КАЭС..."
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1E4080] focus:outline-none focus:ring-2 focus:ring-[#1E4080]/10 transition resize-none"
          />
        </div>

        {/* Загрузка файла */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">
            Резюме или портфолио
          </label>
          <div
            className="flex items-center gap-4 rounded-xl border border-dashed border-gray-300 bg-white p-4 cursor-pointer hover:border-[#1E4080] transition group"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#1E4080]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16v-8m0 0l-3 3m3-3l3 3M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              {fileName ? (
                <p className="text-sm font-medium text-[#1E4080] truncate">{fileName}</p>
              ) : (
                <>
                  <p className="text-sm font-medium text-gray-700">Прикрепить файл</p>
                  <p className="text-xs text-gray-400 mt-0.5">PDF, DOC, DOCX — до 10 МБ</p>
                </>
              )}
            </div>
            {fileName && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFileName(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="text-gray-400 hover:text-red-500 transition shrink-0"
                aria-label="Удалить файл"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-[#1E4080] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#162f66] transition-colors shadow-sm"
          >
            Отправить заявку
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
