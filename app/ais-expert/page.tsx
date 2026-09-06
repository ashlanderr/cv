import type { Metadata } from "next";
import { BackLink } from "@/app/components/BackLink";

export const metadata: Metadata = {
  title: "Точка Зрения — АИС Эксперт",
};

export default function AisExpert() {
  return (
    <div className="container mx-auto mt-8 mb-16 flex flex-col gap-16 px-4">
      <div className="animate-slide-up flex flex-col gap-0 2xl:flex-row 2xl:gap-8">
        <div className="flex flex-1 flex-col gap-3">
          <BackLink />
          <p className="text-ink-muted text-xs font-semibold tracking-widest uppercase">
            ООО «Точка зрения» · 02.2019—11.2020
          </p>
          <p className="text-xl leading-relaxed text-pretty md:text-3xl">
            АИС «Эксперт» — сервис для&nbsp;анализа и&nbsp;выявления нарушений
            в&nbsp;медицинских данных. Использует машинное обучение для
            прогнозирования ошибок и&nbsp;помогает экспертам ОМС проверять случаи
            оказания медицинской помощи.
          </p>
        </div>
      </div>
      <img
        className="animate-scale-in stagger-2 w-full rounded-2xl border-2"
        src="/cv/ais-expert/preview.webp"
        alt="Визуал"
        width={1429}
        height={917}
      />
      <div className="-mb-16 columns-1 gap-16 xl:mb-0 xl:columns-2">
        <section className="animate-slide-up stagger-3 mb-16 break-inside-avoid-column">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Вёрстка интерфейсов
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            Участвовал в&nbsp;разработке клиентской части на&nbsp;Vue.js.
            Выполнил адаптивную вёрстку интерфейсов на&nbsp;Bootstrap
            и&nbsp;CSS, обеспечив корректное отображение таблиц, форм
            и&nbsp;аналитических панелей с&nbsp;большим объёмом данных.
          </p>
        </section>
        <section className="animate-slide-up stagger-4 mb-16 break-inside-avoid-column">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Интеграция с&nbsp;Vuex и&nbsp;REST&nbsp;API
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-pretty">
            Реализовал связывание REST&nbsp;API с&nbsp;Vuex-хранилищем. Настроил
            реактивное обновление данных и&nbsp;асинхронные запросы, обеспечив
            стабильную работу интерфейса при&nbsp;обработке массивов медицинской
            информации.
          </p>
        </section>
        <section className="animate-slide-up stagger-5 mb-16 break-inside-avoid-column">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Реальное время и&nbsp;обучение моделей
          </h2>
          <p className="mb-4 flex-1 text-lg leading-relaxed text-pretty">
            Настроил взаимодействие фронтенда с&nbsp;бекендом через WebSocket
            для&nbsp;отображения состояния задач машинного обучения.
            Пользователи могли запускать обучение моделей и&nbsp;в&nbsp;реальном
            времени наблюдать прогресс выполнения, получать уведомления
            о&nbsp;завершении и&nbsp;результатах. Разработал на&nbsp;Kotlin
            и&nbsp;Spring&nbsp;Boot промежуточный прокси-сервер, преобразующий
            внутренний протокол заказчика в&nbsp;WebSocket-формат, обеспечивший
            корректную работу real-time-механизмов в&nbsp;веб-клиенте.
          </p>
        </section>
      </div>
      <div className="animate-slide-up stagger-6 flex flex-col gap-16 xl:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">
            Стек технологий
          </h2>
          <ul className="flex flex-wrap gap-4">
            {["HTML", "CSS", "Vue.js", "Bootstrap", "Vuex", "WebSocket", "Kotlin", "Spring Boot"].map((tech, i) => (
              <li key={tech} className={`animate-scale-in stagger-${Math.min(i + 1, 16)}`}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">Ссылки</h2>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a
                className="text-ink-light underline transition-colors hover:text-ember"
                href="https://tochka.ai/"
                target="_blank"
              >
                Точка Зрения
              </a>
            </li>
            <li>
              <a
                className="text-ink-light underline transition-colors hover:text-ember"
                href="https://tochka.ai/products/tochka-expert/ais-ekspert/"
                target="_blank"
              >
                Статья
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
