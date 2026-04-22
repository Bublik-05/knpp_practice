import Image from "next/image";

export default function AdditionalSection() {
  return (
    <section id="section-about-additional" className="flex flex-col gap-4 scroll-mt-24">

      <div className="flex gap-10 items-start">
        <div className="flex-1 min-w-0 flex flex-col gap-4 text-lg font-light leading-relaxed">
          <p>
            Обеспечить Казахстан чистой и доступной ядерной энергией, создавая основу для устойчивого развития экономики, снижения углеродного следа и укрепления энергетического суверенитета Республики Казахстан на десятилетия вперёд.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <span className="font-bold">Энергетическая безопасность:</span>{" "}
              Обеспечение страны надёжным и стабильным источником электроэнергии для устойчивого развития.
            </li>

            <li>
              <span className="font-bold ">Экологическая ответственность:</span>{" "}
              Сокращение выбросов CO₂ за счёт развития безуглеродной ядерной генерации в Казахстане.
            </li>

            <li>
              <span className="font-bold">Технологическое лидерство:</span>{" "}
              Внедрение передовых ядерных технологий и формирование национальных компетенций в атомной отрасли.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
