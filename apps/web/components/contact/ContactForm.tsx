"use client";

import { useState } from "react";

const INITIAL = { lastName: "", firstName: "", middleName: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Произошла ошибка. Попробуйте ещё раз.");
    }
  }

  const input =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 font-light focus:border-[#1E4080] focus:outline-none focus:ring-2 focus:ring-blue-100 transition";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <input name="lastName"   value={form.lastName}   onChange={handleChange} required placeholder="Фамилия"  className={input} />
      <input name="firstName"  value={form.firstName}  onChange={handleChange} required placeholder="Имя"       className={input} />
      <input name="middleName" value={form.middleName} onChange={handleChange}          placeholder="Отчество"  className={input} />
      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email"  className={input} />

      <div>
        <p className="text-lg font-medium text-gray-700 mb-1">Текст обращения:</p>
        <textarea
          name="message" value={form.message} onChange={handleChange} required rows={5}
          placeholder="Текст обращения" className={`${input} resize-none`}
        />
      </div>

      {status === "success" && (
        <p className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700 font-light">
          Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 font-light">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center w-full gap-2 rounded-full bg-[#1E4080] px-8 py-3 text-lg font-medium text-white hover:bg-[#0d1c3d] disabled:opacity-60 transition-colors"
      >
        {status === "loading" ? (
          <>
            <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Отправка…
          </>
        ) : "Отправить"}
      </button>
    </form>
  );
}