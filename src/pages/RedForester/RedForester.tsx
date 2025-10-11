import { PreviewImgUrl } from "./assets";

export function RedForester() {
  return (
    <div className="container mx-auto mt-8 mb-16 flex flex-col gap-16 px-4">
      <div className="flex flex-col gap-0 2xl:flex-row 2xl:gap-8">
        <p className="flex-1 text-xl leading-relaxed text-pretty md:text-3xl">
          RedForester (САТЭК) — корпоративный инструмент для&nbsp;управления
          проектами, знаниями и&nbsp;мозговыми штурмами в&nbsp;формате mindmap.
          Позволяет создавать масштабные карты с&nbsp;типизированными узлами,
          которые превращают визуальные связи в&nbsp;осмысленные процессы —
          от&nbsp;ТЗ и&nbsp;задач до&nbsp;спринтов и&nbsp;канбан-досок.
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
        <section className="mb-16 break-inside-avoid-column" id="visual">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Типизация узлов и&nbsp;автоматизация
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            Каждый элемент карты имеет тип, который задаёт его свойства,
            возможные действия и&nbsp;логику взаимодействия. Благодаря этому
            можно отображать одни и&nbsp;те&nbsp;же&nbsp;данные в&nbsp;разных
            представлениях — например, построить канбан по&nbsp;задачам спринта
            или&nbsp;дерево&nbsp;ТЗ. Это превратило mindmap в&nbsp;полноценный
            инструмент управления проектами.
          </p>
        </section>
        <section className="mb-16 break-inside-avoid-column" id="architecture">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Переход с&nbsp;jQuery на&nbsp;React и&nbsp;TypeScript.
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-pretty">
            После прихода на&nbsp;проект я&nbsp;инициировал переписывание
            фронтенда: отказ от&nbsp;устаревшего jQuery и&nbsp;переход
            на&nbsp;React и&nbsp;TypeScript. Это&nbsp;позволило упростить
            кодовую базу, внедрить современный подход к&nbsp;компонентности
            и&nbsp;улучшить читаемость. Новый клиент поддерживает ленивую
            загрузку узлов карты с&nbsp;«заглушками» по&nbsp;сохранённым
            размерам, что обеспечило плавную работу даже на&nbsp;огромных
            картах.
          </p>
        </section>
        <section className="mb-16 break-inside-avoid-column" id="analytics">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Оптимизация производительности
          </h2>
          <p className="mb-4 flex-1 text-lg leading-relaxed text-pretty">
            Для стабильной работы с&nbsp;тысячами узлов я&nbsp;оптимизировал
            отрисовку: минимизировал перерендеры markdown-контента, использовал
            will-change и&nbsp;translate3d для GPU-ускорения, анализировал
            профили в&nbsp;Chrome DevTools и&nbsp;устранял узкие места. Это дало
            заметный прирост отзывчивости и&nbsp;снизило задержки при
            перемещении по&nbsp;карте.
          </p>
        </section>
        <section
          className="mb-16 break-inside-avoid-column"
          id="recommendations"
        >
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Архитектура и&nbsp;state management
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-pretty">
            Использование MobX позволило организовать логику в&nbsp;виде
            сервисов с&nbsp;dependency injection, что упростило масштабирование
            и&nbsp;изоляцию модулей. Такая архитектура сделала возможным
            добавление новых функций без&nbsp;необходимости переписывать
            существующие части интерфейса.
          </p>
        </section>
      </div>
      <div className="flex flex-col gap-16 xl:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">
            Стек технологий
          </h2>
          <ul className="flex flex-wrap gap-4">
            <li>TypeScript</li>
            <li>React</li>
            <li>CSS Modules</li>
            <li>MobX</li>
            <li>Webpack</li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">Ссылки</h2>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a
                className="text-gray-900 underline hover:text-gray-600"
                href="https://redforester.com/"
                target="_blank"
              >
                Лендинг
              </a>
            </li>
            <li>
              <a
                className="text-gray-900 underline hover:text-gray-600"
                href="https://beta.app.redforester.com/"
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
