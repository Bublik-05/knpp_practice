"use client";

import { useState } from "react";

interface Question {
  text: string;
  options: string[];
  correct: number; // 0-based index
}

const questions: Question[] = [
  {
    text: "Что такое цепная ядерная реакция?",
    options: [
      "Реакция горения топлива",
      "Реакция деления атомных ядер, при которой выделяются нейтроны, вызывающие новые деления",
      "Реакция слияния двух ядер",
      "Химическое окисление урана",
    ],
    correct: 1,
  },
  {
    text: "Какой элемент чаще всего используется как топливо в ядерных реакторах?",
    options: ["Уран-235", "Плутоний-239", "Торий-232", "Водород"],
    correct: 0,
  },
  {
    text: "Что такое ВВЭР?",
    options: [
      "Высокоэффективный водяной энергетический реактор",
      "Вспомогательный водородный элемент реактора",
      "Водо-водяной энергетический реактор",
      "Ветровой воздушный энергетический резервуар",
    ],
    correct: 2,
  },
  {
    text: "Какой процент мировой электроэнергии вырабатывается АЭС?",
    options: ["Около 5%", "Около 10%", "Около 25%", "Около 50%"],
    correct: 1,
  },
  {
    text: "Что такое SMR?",
    options: [
      "Малый модульный реактор",
      "Стационарный мощный реактор",
      "Система мониторинга радиации",
      "Спектральный метод расчёта",
    ],
    correct: 0,
  },
  {
    text: "Казахстан занимает какое место в мире по добыче урана?",
    options: ["3-е место", "5-е место", "1-е место", "2-е место"],
    correct: 2,
  },
  {
    text: "Что такое период полураспада?",
    options: [
      "Время полного распада вещества",
      "Половина времени работы реактора",
      "Время уменьшения мощности реактора вдвое",
      "Время, за которое распадается половина атомов радиоактивного вещества",
    ],
    correct: 3,
  },
];

function getResultText(score: number): string {
  if (score === 7) return "Отлично! Вы эксперт в атомной энергетике";
  if (score >= 5) return "Хороший результат! Вы хорошо разбираетесь в теме";
  if (score >= 3) return "Неплохо! Есть куда стремиться";
  return "Стоит узнать больше об атомной энергетике";
}

export default function QuizSection() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const progress = ((currentQ) / questions.length) * 100;

  function handleAnswer(optionIdx: number) {
    const newAnswers = [...answers, optionIdx];
    setAnswers(newAnswers);
    if (currentQ + 1 >= questions.length) {
      setShowResult(true);
    } else {
      setCurrentQ(currentQ + 1);
    }
  }

  function handleReset() {
    setCurrentQ(0);
    setAnswers([]);
    setShowResult(false);
  }

  const score = answers.filter((a, i) => a === questions[i].correct).length;

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="rounded-lg bg-white border border-gray-100 shadow-sm p-8 text-center">
          <div className="text-6xl font-bold text-[#1E4080] mb-2">
            {score}<span className="text-3xl text-gray-400 font-normal"> / {questions.length}</span>
          </div>
          <p className="text-lg text-gray-700 mb-8">{getResultText(score)}</p>

          <div className="space-y-4 text-left mb-8">
            {questions.map((q, i) => {
              const userAnswer = answers[i];
              const isCorrect = userAnswer === q.correct;
              return (
                <div key={i} className="rounded-lg border p-4 bg-gray-50">
                  <p className="text-[15px] font-medium text-gray-800 mb-3">
                    {i + 1}. {q.text}
                  </p>
                  <div className="space-y-1">
                    {q.options.map((opt, j) => {
                      const isUserChoice = j === userAnswer;
                      const isCorrectOpt = j === q.correct;
                      let cls =
                        "w-full text-left rounded-lg border p-3 text-[15px] transition-colors ";
                      if (isCorrectOpt) {
                        cls += "bg-green-50 border-green-400 text-green-800";
                      } else if (isUserChoice && !isCorrect) {
                        cls += "bg-red-50 border-red-400 text-red-800";
                      } else {
                        cls += "bg-white border-gray-200 text-gray-600";
                      }
                      return (
                        <div key={j} className={cls}>
                          {isCorrectOpt && (
                            <span className="font-semibold mr-1">✓</span>
                          )}
                          {isUserChoice && !isCorrect && (
                            <span className="font-semibold mr-1">✗</span>
                          )}
                          {opt}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleReset}
            className="inline-block rounded-lg bg-[#1E4080] text-white px-8 py-3 text-lg font-medium hover:bg-[#163264] transition-colors"
          >
            Пройти заново
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Вопрос {currentQ + 1} из {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-[4px]">
          <div
            className="bg-[#1E4080] h-[4px] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="rounded-lg bg-white border border-gray-100 shadow-sm p-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">{q.text}</h2>
        <div className="space-y-3">
          {q.options.map((opt, j) => (
            <button
              key={j}
              onClick={() => handleAnswer(j)}
              className="w-full text-left rounded-lg border border-gray-200 p-4 text-lg text-gray-800 hover:border-[#1E4080] hover:bg-[#eef4ff] transition-colors"
            >
              <span className="font-medium text-[#1E4080] mr-3">
                {String.fromCharCode(65 + j)}.
              </span>
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
