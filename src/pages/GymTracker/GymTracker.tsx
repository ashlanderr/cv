import {
  AnalyticsImgUrl,
  RecommendationImgUrl,
  SyncImgUrl,
  WeightsImgUrl,
} from "./assets";

export function GymTracker() {
  return (
    <div className="container mx-auto mt-8 mb-16 flex flex-col gap-16 px-4">
      <div className="flex flex-col gap-0 2xl:flex-row 2xl:gap-8">
        <p className="flex-1 text-xl leading-relaxed text-pretty md:text-3xl">
          Gym Tracker — мой пет-проект, PWA-приложение
          для&nbsp;автоматизированного учёта силовых тренировок. Работает
          офлайн, хранит данные на&nbsp;устройстве и&nbsp;синхронизируется через
          CRDT при&nbsp;подключении к&nbsp;серверу. Поддерживает рекомендации
          по&nbsp;прогрессии весов, историю тренировок и&nbsp;визуализацию
          оборудования.
        </p>
      </div>
      <div className="flex flex-col items-start gap-16 lg:flex-row lg:gap-32">
        <div className="flex flex-1 flex-col gap-16 lg:gap-32">
          <div className="flex flex-col gap-8" id="recommendations">
            <div className="flex flex-1 flex-col items-center rounded-4xl bg-gray-200">
              <img
                className="min-w-0 px-16 py-16 drop-shadow-xl xl:px-32 2xl:px-48"
                src={RecommendationImgUrl}
                alt="Recommendations"
                width={1200}
                height={2574}
              />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <h2 className="text-2xl leading-tight text-balance">
                Алгоритм рекомендаций
              </h2>
              <p className="text-xl leading-relaxed text-pretty">
                Система рассчитывает веса и&nbsp;повторения на&nbsp;основе 1ПМ
                и&nbsp;периодизации (лёгкие, средние и&nbsp;тяжёлые тренировки).
                Алгоритм учитывает конфигурацию блинов и&nbsp;шаг&nbsp;веса,
                подбирая реальный доступный вес и&nbsp;корректируя диапазон
                повторений. Это&nbsp;избавляет пользователя от&nbsp;рутинных
                расчётов и&nbsp;поддерживает стабильный прогресс.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-8" id="weights">
            <div className="flex flex-1 flex-col items-center rounded-4xl bg-gray-200">
              <img
                className="min-w-0 px-16 py-16 drop-shadow-xl xl:px-32 2xl:px-48"
                src={WeightsImgUrl}
                alt="Weights"
                width={1200}
                height={2574}
              />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <h2 className="text-2xl leading-tight text-balance">
                Конфигуратор и&nbsp;визуализация весов
              </h2>
              <p className="text-xl leading-relaxed text-pretty">
                Под&nbsp;каждое упражнение можно настроить доступные блины
                и&nbsp;шаг изменения нагрузки. Рекомендованный вес отображается
                в&nbsp;наглядном виде — штанга или&nbsp;гантели
                с&nbsp;конкретным набором блинов. Такой подход снижает риск
                ошибок и&nbsp;делает приложение ближе к&nbsp;реальному
                тренировочному процессу.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-16 lg:gap-32">
          <div
            className="flex flex-col items-start gap-8 lg:flex-col-reverse"
            id="analytics"
          >
            <div className="flex flex-col items-center rounded-4xl bg-gray-200">
              <img
                className="min-w-0 px-16 py-16 drop-shadow-xl xl:px-32 2xl:px-48"
                src={AnalyticsImgUrl}
                alt="Analytics"
                width={1200}
                height={2574}
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl leading-tight text-balance">
                История и&nbsp;аналитика
              </h2>
              <p className="text-xl leading-relaxed text-pretty">
                Приложение сохраняет полную историю занятий, упражнений
                и&nbsp;подходов, что&nbsp;позволяет отслеживать прогресс
                на&nbsp;дистанции. Пользователь видит личные рекорды, графики
                изменения 1ПМ, рабочего веса и&nbsp;общего тренировочного
                объёма. Такой журнал заменяет блокнот или&nbsp;таблицы, упрощает
                анализ и&nbsp;делает результаты наглядными.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-start gap-8 lg:flex-col-reverse"
            id="sync"
          >
            <div className="flex flex-1 flex-col items-center rounded-4xl bg-gray-200">
              <img
                className="min-w-0 px-16 py-16 drop-shadow-xl"
                src={SyncImgUrl}
                alt="Sync"
                width={2109}
                height={1827}
              />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <h2 className="text-2xl leading-tight text-balance">
                Локальное хранение и&nbsp;синхронизация
              </h2>
              <p className="text-xl leading-relaxed text-pretty">
                Gym Tracker полностью работает офлайн: все данные сохраняются
                в&nbsp;IndexedDB на&nbsp;устройстве пользователя,
                и&nbsp;приложение остаётся функциональным даже
                при&nbsp;длительном отсутствии сети. Пользователь может месяцами
                вести учёт тренировок без&nbsp;интернета, а&nbsp;интерфейс
                всегда остаётся отзывчивым и&nbsp;мгновенно обновляется
                при&nbsp;изменении данных.
              </p>
              <p className="text-xl leading-relaxed text-pretty">
                Синхронизация реализована на&nbsp;базе библиотеки Y.js (CRDT).
                Поверх неё я&nbsp;написал слой базы данных с&nbsp;запросами,
                мутациями и&nbsp;хуками для&nbsp;React, что&nbsp;обеспечивает
                автоматическую репликацию изменений при&nbsp;появлении сети.
                Даже после длительного офлайна все операции корректно
                объединяются без&nbsp;конфликтов, сохраняя целостность истории
                и&nbsp;стабильность работы приложения.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-16 xl:flex-row xl:gap-32">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">
            Стек технологий
          </h2>
          <ul className="flex flex-wrap gap-4">
            <li>TypeScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>SCSS</li>
            <li>Y.js</li>
            <li>PWA</li>
            <li>Vite</li>
            <li>Firebase</li>
            <li>Recharts</li>
            <li>Jotai</li>
            <li>IndexedDB</li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">Ссылки</h2>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a
                className="text-gray-900 underline hover:text-gray-600"
                href="https://github.com/ashlanderr/gym-tracker"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="text-gray-900 underline hover:text-gray-600"
                href="https://ashlanderr.github.io/gym-tracker/"
                target="_blank"
              >
                Приложение
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
