import type { Metadata } from "next";
import { BackLink } from "@/app/components/BackLink";

export const metadata: Metadata = {
  title: "NotiBox",
};

export default function NotiBox() {
  return (
    <div className="container mx-auto mt-8 mb-16 flex flex-col gap-16 px-4">
      <div className="animate-slide-up flex flex-col gap-0 2xl:flex-row 2xl:gap-8">
        <div className="flex flex-1 flex-col gap-3">
          <BackLink />
          <p className="text-ink-muted text-xs font-semibold tracking-widest uppercase">
            Собственный продукт
          </p>
          <p className="text-xl leading-relaxed text-pretty md:text-3xl">
            NotiBox — собственный SaaS-сервис для отправки уведомлений
            и&nbsp;событий в&nbsp;реальном времени через WebSocket. Разработал
            проект с&nbsp;нуля: лендинг, личный кабинет и&nbsp;админ-панель,
            систему мониторинга приложений и&nbsp;интеграцию
            с&nbsp;Pusher-совместимым API.
          </p>
        </div>
      </div>
      <img
        className="animate-scale-in stagger-2 w-full rounded-2xl border-2"
        src="/cv/notibox/preview.webp"
        alt="NotiBox"
        width={1024}
        height={1024}
      />
      <div className="-mb-16 columns-1 gap-16 xl:mb-0 xl:columns-2">
        <section className="animate-slide-up stagger-3 mb-16 break-inside-avoid-column">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            WebSocket-ядро на&nbsp;базе Sockudo
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-pretty">
            В&nbsp;качестве основы WebSocket-ядра использовал open source-проект
            Sockudo и&nbsp;адаптировал его под&nbsp;требования сервиса.
            Реализовал необходимые ограничения, включая лимиты
            на&nbsp;количество сообщений в&nbsp;сутки, а&nbsp;также исправил
            обнаруженные проблемы в&nbsp;самом WebSocket-сервере.
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            Часть исправлений была оформлена и&nbsp;отправлена обратно
            в&nbsp;upstream проекта, что&nbsp;позволило внести вклад
            в&nbsp;используемый open source компонент.
          </p>
        </section>
        <section className="animate-slide-up stagger-4 mb-16 break-inside-avoid-column">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Мониторинг в&nbsp;личном кабинете
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-pretty">
            Разработал систему мониторинга приложений и&nbsp;интегрировал её
            непосредственно в&nbsp;личный кабинет. Пользователю не&nbsp;требуется
            переходить в&nbsp;отдельный интерфейс: состояние и&nbsp;основные
            показатели подключённых приложений доступны там&nbsp;же, где
            происходит управление сервисом.
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            Такой подход позволил объединить управление приложениями
            и&nbsp;их&nbsp;мониторинг в&nbsp;единую рабочую область.
          </p>
        </section>
        <section className="animate-slide-up stagger-5 mb-16 break-inside-avoid-column">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Нагрузочное тестирование
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-pretty">
            Провёл нагрузочное тестирование WebSocket-инфраструктуры
            и&nbsp;оптимизировал её работу под&nbsp;ограниченные серверные
            ресурсы. На&nbsp;сервере с&nbsp;1&nbsp;vCPU и&nbsp;2&nbsp;ГБ RAM
            система выдерживает около 5000 одновременных WebSocket-соединений.
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            В&nbsp;процессе тестирования выявил несколько проблем в&nbsp;Sockudo,
            локализовал их&nbsp;причины и&nbsp;реализовал исправления. Часть
            изменений впоследствии была передана в&nbsp;upstream.
          </p>
        </section>
        <section className="animate-slide-up stagger-5 mb-16 break-inside-avoid-column">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Полноценный SaaS-продукт
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-pretty">
            Разработал сервис полностью с&nbsp;нуля, включая лендинг, личный
            кабинет, админ-панель, биллинг, управление приложениями,
            мониторинг и&nbsp;WebSocket-инфраструктуру.
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            В&nbsp;результате получился самостоятельный SaaS-продукт,
            в&nbsp;котором все основные компоненты — от&nbsp;пользовательского
            интерфейса до&nbsp;real-time инфраструктуры — находятся
            под&nbsp;контролем одной системы.
          </p>
        </section>
      </div>
      <div className="animate-slide-up stagger-6 flex flex-col gap-16 xl:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">
            Стек технологий
          </h2>
          <ul className="flex flex-wrap gap-4">
            {["NextJS", "Rust", "WebSocket", "Sockudo", "Pusher API"].map((tech, i) => (
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
                href="https://notibox.ru/"
                target="_blank"
              >
                NotiBox
              </a>
            </li>
            <li>
              <a
                className="text-ink-light underline transition-colors hover:text-ember"
                href="https://habr.com/ru/articles/1068142/"
                target="_blank"
              >
                Статья на Хабр
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
