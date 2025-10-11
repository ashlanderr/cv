import {
  ThreeDImgUrl,
  MultiplayerImgUrl,
  ScriptsImgUrl,
  ServerImgUrl,
} from "./assets";

export function Igron() {
  return (
    <div className="container mx-auto mt-8 mb-16 flex flex-col gap-16 px-4">
      <div className="flex flex-col gap-0 2xl:flex-row 2xl:gap-8">
        <p className="flex-1 text-xl leading-relaxed text-pretty md:text-3xl">
          Игрон — онлайн-платформа для&nbsp;корпоративных, психологических,
          настольных игр. Поддерживает одиночные и&nbsp;командные сессии,
          редактор игровых объектов, демо-режим, 2D/3D-визуализацию
          и&nbsp;offline-first мультиплеер.
        </p>
      </div>
      <div
        className="flex flex-col items-start gap-8 xl:flex-row"
        id="multiplayer"
      >
        <img
          className="min-w-0 flex-2 rounded-2xl"
          src={MultiplayerImgUrl}
          alt="Multiplayer"
          width={1920}
          height={993}
        />
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">
            Offline-First Multiplayer для&nbsp;пошаговых&nbsp;игр
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            Разработал систему синхронизации, которая позволяет игрокам
            продолжать игру даже при&nbsp;нестабильном соединении. Игровой
            прогресс сохраняется, а&nbsp;при&nbsp;восстановлении сети данные
            автоматически объединяются без&nbsp;конфликтов.
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            Технически реализовал кастомную CRDT-структуру
            для&nbsp;консистентности состояния, сервер на&nbsp;Socket.IO
            для&nbsp;репликации операций и&nbsp;алгоритм оптимизированного diff
            для&nbsp;глубоко вложенных JSON-объектов. Это снизило нагрузку
            и&nbsp;обеспечило стабильность мультиплеера.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col items-start gap-8 xl:flex-row-reverse"
        id="3d"
      >
        <img
          className="flex min-w-0 flex-2 rounded-2xl"
          src={ThreeDImgUrl}
          alt="3D"
          width={1920}
          height={995}
        />
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">
            Гибкий 3D-режим на&nbsp;базе модульной архитектуры
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            Реализовал альтернативный визуализатор на&nbsp;Babylon.js, сохранив
            игровую логику и&nbsp;обеспечив быстрый переход от&nbsp;2D (Angular)
            к&nbsp;3D без переписывания движка. Модульная архитектура
            "движок-логика-визуал" позволила внедрить новый рендерер
            с&nbsp;минимальными затратами.
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            Для&nbsp;корректного отображения в&nbsp;3D разработал систему
            позиционирования: объекты (фишки, карты) автоматически занимают
            предсказуемые слоты и&nbsp;выстраиваются в&nbsp;слои, что сохраняет
            правила игры и&nbsp;делает визуализацию управляемой. Решение
            удовлетворило требования заказчика при&nbsp;минимальных доработках.
          </p>
        </div>
      </div>
      <img
        className="w-full min-w-0 rounded-2xl border-2"
        src={ScriptsImgUrl}
        alt="Scripts"
        id="scripts"
        width={1920}
        height={993}
      />
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-2xl leading-tight text-balance">
          Визуальный скриптовый язык для&nbsp;игровой логики
        </h2>
        <div className="flex flex-col gap-4 xl:flex-row xl:gap-8">
          <p className="flex-1 text-lg leading-relaxed text-pretty">
            С&nbsp;нуля разработал высокоуровневый визуальный DSL, позволяющий
            описывать сложные сценарии настольных игр без&nbsp;кода. Подход
            аналогичен Blueprints из&nbsp;Unreal, но&nbsp;специализирован
            под&nbsp;предметную область и&nbsp;доступен прямо в&nbsp;браузере.
          </p>
          <p className="flex-2 text-lg leading-relaxed text-pretty">
            Ядро поддерживает строгую типизацию с&nbsp;дженериками, асинхронные
            операции (ожидания событий, таймеры, взаимодействие между
            клиентами), циклы, условия и&nbsp;отладку в&nbsp;реальном времени.
            Решение стало ключевым конкурентным преимуществом: гейм-дизайнеры
            и&nbsp;методисты могут самостоятельно создавать и&nbsp;тестировать
            сценарии без&nbsp;программистов.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 xl:flex-row" id="server">
        <img
          className="min-w-0 flex-2 rounded-2xl"
          src={ServerImgUrl}
          alt="Server"
          width={1280}
          height={744}
        />
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">
            Высокопроизводительный сервер на&nbsp;Rust
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            Разработал сервер для&nbsp;игровой логики и&nbsp;синхронизации
            состояний, способный на&nbsp;одной виртуальной машине с&nbsp;[2
            vCPU, 4 GB RAM] обслуживать до&nbsp;10&nbsp;000 параллельных сессий
            с&nbsp;низкой задержкой. Rust и&nbsp;строгая типизация обеспечили
            предсказуемую производительность и&nbsp;устойчивость.
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            Оптимизированная архитектура позволила отказаться от&nbsp;сложных
            кластерных решений и&nbsp;снизить затраты на&nbsp;инфраструктуру
            и&nbsp;администрирование.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 xl:flex-row">
        <div className="flex flex-2 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">
            Стек технологий
          </h2>
          <ul className="flex flex-wrap gap-4">
            <li>TypeScript</li>
            <li>Angular</li>
            <li>HTML</li>
            <li>SCSS</li>
            <li>Material</li>
            <li>Babylon.js</li>
            <li>PostgreSQL</li>
            <li>Koa</li>
            <li>Socket.IO</li>
            <li>NGINX</li>
            <li>Node.js</li>
            <li>Ansible</li>
            <li>Rust</li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl leading-tight text-balance">Ссылки</h2>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a
                className="text-gray-900 underline hover:text-gray-600"
                href="https://psygame-service.online"
                target="_blank"
              >
                Лендинг
              </a>
            </li>
            <li>
              <a
                className="text-gray-900 underline hover:text-gray-600"
                href="https://igron.games"
                target="_blank"
              >
                Платформа
              </a>
            </li>
            <li>
              <a
                className="text-gray-900 underline hover:text-gray-600"
                href="https://vk.com/psygameservice.online"
                target="_blank"
              >
                ВКонтакте
              </a>
            </li>
            <li>
              <a
                className="text-gray-900 underline hover:text-gray-600"
                href="https://rutube.ru/channel/28097/"
                target="_blank"
              >
                RuTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
