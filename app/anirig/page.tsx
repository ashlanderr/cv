import type { Metadata } from "next";
import { BackLink } from "@/app/components/BackLink";

export const metadata: Metadata = {
  title: "AniRig",
};

export default function AniRig() {
  return (
    <div className="container mx-auto mt-8 mb-16 flex flex-col gap-16 px-4">
      <div className="animate-slide-up flex flex-col gap-0 2xl:flex-row 2xl:gap-8">
        <div className="flex flex-1 flex-col gap-3">
          <BackLink />
          <p className="text-ink-muted text-xs font-semibold tracking-widest uppercase">
            Собственный продукт
          </p>
          <p className="text-xl leading-relaxed text-pretty md:text-3xl">
            AniRig — собственный сервис по&nbsp;созданию и&nbsp;продаже
            кастомных VTuber-аватаров с&nbsp;использованием ИИ
            и&nbsp;автоматизации. Разработал технологию, которая позволяет
            описывать VTuber-модель программно и&nbsp;автоматически собирать
            готовый риг для&nbsp;VTube Studio.
          </p>
        </div>
      </div>
      <img
        className="animate-scale-in stagger-2 w-full rounded-2xl border-2"
        src="/cv/anirig/preview.webp"
        alt="AniRig"
        width={2048}
        height={2048}
      />
      <div className="-mb-16 columns-1 gap-16 xl:mb-0 xl:columns-2">
        <section className="animate-slide-up stagger-3 mb-16 break-inside-avoid-column">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Экспорт в&nbsp;формат Live2D
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-pretty">
            Одной из&nbsp;ключевых задач стала разработка собственного
            экспортёра в&nbsp;формат Live2D. Я&nbsp;исследовал структуру
            и&nbsp;внутренний формат файлов Live2D, реализовал их&nbsp;генерацию
            и&nbsp;построил Python-пайплайн, который обрабатывает исходные
            изображения, разделяет их&nbsp;на&nbsp;необходимые слои
            и&nbsp;автоматически собирает из&nbsp;них готовую модель.
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            В&nbsp;результате модель можно создавать программно, без&nbsp;ручной
            сборки в&nbsp;графическом редакторе или&nbsp;Live2D Cubism.
          </p>
        </section>
        <section className="animate-slide-up stagger-4 mb-16 break-inside-avoid-column">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Система деформаций и&nbsp;риггинга
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-pretty">
            Разработал собственную систему риггинга на&nbsp;основе примитивов
            деформации: перемещения, масштабирования, вращения
            и&nbsp;деформации сетки. Это&nbsp;позволило описывать поведение
            частей модели через программные параметры и&nbsp;автоматически
            строить необходимые зависимости между элементами.
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            Архитектура системы позволяет комбинировать базовые деформации
            для&nbsp;создания более сложного поведения модели, сохраняя
            управление ригом на&nbsp;уровне программного описания.
          </p>
        </section>
        <section className="animate-slide-up stagger-5 mb-16 break-inside-avoid-column">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Автоматизация создания модели
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            Объединил обработку изображений, генерацию структуры Live2D,
            деформации и&nbsp;риггинг в&nbsp;единый автоматизированный
            пайплайн. Теперь процесс проходит практически полностью
            программно: от&nbsp;исходных изображений до&nbsp;готового
            аватара, который открывается в&nbsp;VTube Studio как обычная
            Live2D-модель.
          </p>
        </section>
        <section className="animate-slide-up stagger-5 mb-16 break-inside-avoid-column">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Интерактивная демонстрация
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            Разработал лендинг AniRig с&nbsp;интерактивной демонстрацией
            собранной у&nbsp;нас модели. Пользователь может управлять
            аватаром с&nbsp;помощью мыши и&nbsp;непосредственно на&nbsp;странице
            увидеть результат работы технологии.
          </p>
        </section>
        <section className="animate-slide-up stagger-5 mb-16 break-inside-avoid-column">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Результат и&nbsp;проверка на&nbsp;практике
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-pretty">
            Автоматизация сократила время сборки базовой модели примерно
            с&nbsp;двух недель до&nbsp;одного дня, а&nbsp;стоимость —
            с&nbsp;30+&nbsp;тысяч до&nbsp;~5&nbsp;тысяч рублей.
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            Технология была проверена на&nbsp;реальном заказчике: созданная
            с&nbsp;её помощью модель уже используется для&nbsp;стриминга.
          </p>
        </section>
      </div>
      <div className="animate-slide-up stagger-6 flex flex-col gap-16 xl:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">
            Стек технологий
          </h2>
          <ul className="flex flex-wrap gap-4">
            {["Python", "Live2D", "Gemini", "Claude Code"].map((tech, i) => (
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
                href="https://anirig.ru/"
                target="_blank"
              >
                AniRig
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
