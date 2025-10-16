import { PreviewImgUrl } from "./assets";

export function AisExpert() {
  return (
    <div className="container mx-auto mt-8 mb-16 flex flex-col gap-16 px-4">
      <div className="flex flex-col gap-0 2xl:flex-row 2xl:gap-8">
        <p className="flex-1 text-xl leading-relaxed text-pretty md:text-3xl">
          АИС «Эксперт» — сервис для&nbsp;анализа и&nbsp;выявления нарушений
          в&nbsp;медицинских данных. Использует машинное обучение для
          прогнозирования ошибок и&nbsp;помогает экспертам ОМС проверять случаи
          оказания медицинской помощи.
        </p>
      </div>
      <img
        className="w-full rounded-2xl border-2"
        src={PreviewImgUrl}
        alt="Визуал"
        width={1429}
        height={917}
      />
      <div className="-mb-16 columns-1 gap-16 xl:mb-0 xl:columns-2">
        <section className="mb-16 break-inside-avoid-column">
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
        <section className="mb-16 break-inside-avoid-column">
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
        <section className="mb-16 break-inside-avoid-column">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Реальное время и&nbsp;обучение моделей
          </h2>
          <p className="mb-4 flex-1 text-lg leading-relaxed text-pretty">
            Настроил взаимодействие фронтенда с&nbsp;бекендом через WebSocket
            для&nbsp;отображения состояния задач машинного обучения.
            Пользователи могли запускать обучение моделей и&nbsp;в&nbsp;реальном
            времени наблюдать прогресс выполнения, получать уведомления
            о&nbsp;завершении и&nbsp;результатах. Разработал промежуточный
            прокси-сервер, преобразующий внутренний протокол заказчика
            в&nbsp;WebSocket-формат, обеспечивший корректную работу
            real-time-механизмов в&nbsp;веб-клиенте.
          </p>
        </section>
      </div>
      <div className="flex flex-col gap-16 xl:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">
            Стек технологий
          </h2>
          <ul className="flex flex-wrap gap-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>Vue.js</li>
            <li>Bootstrap</li>
            <li>Vuex</li>
            <li>WebSocket</li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">Ссылки</h2>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a
                className="text-gray-900 underline hover:text-gray-600"
                href="https://tochka.ai/"
                target="_blank"
              >
                Точка Зрения
              </a>
            </li>
            <li>
              <a
                className="text-gray-900 underline hover:text-gray-600"
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
