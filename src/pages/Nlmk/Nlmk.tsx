import { VisualImgUrl } from "./assets";

export function Nlmk() {
  return (
    <div className="container mx-auto mt-8 mb-16 flex flex-col gap-16 px-4">
      <div className="flex flex-col gap-0 2xl:flex-row 2xl:gap-8">
        <p className="flex-1 text-xl leading-relaxed text-pretty md:text-3xl">
          Динамическое управление выпусками (НЛМК) — промышленный сервис
          для&nbsp;визуализации и&nbsp;анализа работы доменных печей.
          В&nbsp;реальном времени отображает слои руды и&nbsp;кокса,
          их&nbsp;плавление и&nbsp;статистику процессов, поддерживает
          исторические сценарии, модульную конфигурацию печей и&nbsp;систему
          рекомендаций для&nbsp;горновых. Из-за&nbsp;NDA часть внутренних
          деталей скрыта, и&nbsp;получилось показать только один скрин.
        </p>
      </div>
      <img
        className="w-full rounded-2xl border-2"
        src={VisualImgUrl}
        alt="Визуал"
        width={1429}
        height={917}
      />
      <div className="-mb-16 columns-1 gap-16 xl:mb-0 xl:columns-2">
        <section className="mb-16 break-inside-avoid-column" id="visual">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Визуализация доменной печи в&nbsp;реальном времени
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            Разработал интерфейс для&nbsp;отображения слоёв руды и&nbsp;кокса,
            их&nbsp;движения и&nbsp;плавления в&nbsp;доменной печи. Интеграция
            данных из&nbsp;нескольких API в&nbsp;реальном времени позволяет
            операторам видеть состав и&nbsp;прогноз времени выпуска.
            Для&nbsp;каждого слоя доступна детальная информация по&nbsp;
            наведению, что упрощает анализ и&nbsp;ускоряет принятие решений
            о&nbsp;выпуске или&nbsp;корректировке подачи топлива.
          </p>
        </section>
        <section className="mb-16 break-inside-avoid-column" id="architecture">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Модульный конструктор и&nbsp;конфигурация печей
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-pretty">
            Реализовал «плагинную» архитектуру фронтенда, где доменная печь
            собирается из&nbsp;множества мелких компонентов со&nbsp;слотами
            для&nbsp;вложений. Это позволило использовать один
            и&nbsp;тот&nbsp;же конструктор на&nbsp;разных страницах (главный
            экран, трекер шахты) и&nbsp;гибко комбинировать элементы интерфейса.
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            Разработал систему конфигов для&nbsp;поддержки нескольких печей
            с&nbsp;уникальной геометрией. В&nbsp;конфиг можно заложить контур
            реальной печи, псевдо-3D-отображение слоёв и&nbsp;особенности
            их&nbsp;движения. Благодаря этому интерфейс адаптируется
            под&nbsp;конкретный объект без&nbsp;переписывания кода.
          </p>
        </section>
        <section className="mb-16 break-inside-avoid-column" id="analytics">
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Интеграция данных и&nbsp;исторические сценарии
          </h2>
          <p className="mb-4 flex-1 text-lg leading-relaxed text-pretty">
            Реализовал подключение к&nbsp;нескольким API с&nbsp;обновлением
            данных в&nbsp;реальном времени через react-query и&nbsp;поллинг.
            Компоненты печи автоматически подгружают и&nbsp;синхронизируют свои
            данные.
          </p>
          <p className="flex-2 text-lg leading-relaxed text-pretty">
            Добавил возможность переключаться между реальным временем и&nbsp;
            историческим режимом: достаточно выбрать нужные дату и&nbsp;время,
            и&nbsp;система подгружает данные за&nbsp;выбранный момент.
            В&nbsp;этом режиме не&nbsp;только визуализация печи,
            но&nbsp;и&nbsp;графики перестраиваются, позволяя анализировать
            прошлые выпуски и&nbsp;сопоставлять параметры с&nbsp;результатами.
          </p>
        </section>
        <section
          className="mb-16 break-inside-avoid-column"
          id="recommendations"
        >
          <h2 className="mb-4 text-2xl leading-tight text-balance">
            Система рекомендаций для&nbsp;горновых
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-pretty">
            Разработал модуль отображения рекомендаций по&nbsp;управлению печью:
            когда начинать выпуск, добавлять материалы или&nbsp;корректировать
            подачу топлива. На&nbsp;«моих» страницах рекомендации представлены
            диалоговыми окнами, а&nbsp;на&nbsp;других — уведомлениями, которые
            по&nbsp;клику переводят пользователя к&nbsp;нужной печи
            или&nbsp;экрану.
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            Реализовал единое управление состоянием рекомендаций: синхронное
            отображение и&nbsp;закрытие на&nbsp;разных страницах, обновления
            с&nbsp;бэкенда и&nbsp;автоматическое удаление по&nbsp;таймауту. Это
            обеспечило прозрачную и&nbsp;предсказуемую работу системы, удобную
            для&nbsp;операторов.
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
            <li>TypeScript</li>
            <li>React</li>
            <li>Material</li>
            <li>CSS Modules</li>
            <li>React Query</li>
            <li>SVG</li>
            <li>WebSocket</li>
            <li>Recharts</li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">Ссылки</h2>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a
                className="text-gray-900 underline hover:text-gray-600"
                href="https://nlmk.com/"
                target="_blank"
              >
                НЛМК
              </a>
            </li>
            <li>
              <a
                className="text-gray-900 underline hover:text-gray-600"
                href="https://habr.com/ru/companies/nlmk/articles/934696/"
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
