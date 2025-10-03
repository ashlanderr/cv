import { VisualImgUrl as NlmkImgUrl } from "../Nlmk";
import { ThreeDImgUrl as IgronImgUrl } from "../Igron";
import {
  RecommendationImgUrl as GymTrackerImgUrl1,
  AnalyticsImgUrl as GymTrackerImgUrl2,
} from "../GymTracker";
import { Link } from "react-router";

export function Home() {
  return (
    <div className="container mx-auto mt-8 mb-16 flex flex-col gap-16 px-4">
      <div className="flex flex-col gap-0">
        <div className="text-4xl">Александр Шилов</div>
        <div className="text-lg text-gray-500">Senior Frontend Developer</div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-3xl">Ключевые навыки</div>
        <ul className="flex flex-wrap gap-4">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React</li>
          <li>Angular</li>
          <li>Material UI</li>
          <li>React Query</li>
          <li>RxJS</li>
          <li>Ansible</li>
          <li>Docker</li>
          <li>CI/CD</li>
          <li>Jest</li>
          <li>Puppeteer</li>
          <li>Node.js</li>
          <li>Redux</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-3xl">Все навыки</div>
        <div className="md:columns-2 xl:columns-3">
          <div className="mb-4 break-inside-avoid-column">
            <div className="text-2xl">Языки</div>
            <ul className="mt-2 ml-6 list-disc">
              <li>JavaScript: ES2022, Proxy</li>
              <li>TypeScript: Generics, Type Mapping, Algebraic Data Types</li>
              <li>HTML5: семантическая вёрстка, WebGL</li>
              <li>CSS3: FlexBox, Grid, адаптивная и&nbsp;мобильная вёрстка</li>
            </ul>
          </div>
          <div className="mb-4 break-inside-avoid-column">
            <div className="text-2xl">Фреймворки</div>
            <ul className="mt-2 ml-6 list-disc">
              <li>React: Hooks, Suspense, Context API</li>
              <li>Angular: RxJS</li>
              <li>State Management: Redux, MobX, Zustand</li>
            </ul>
          </div>
          <div className="mb-4 break-inside-avoid-column">
            <div className="text-2xl">Сборка</div>
            <ul className="mt-2 ml-6 list-disc">
              <li>Webpack, Vite</li>
              <li>NPM, Yarn</li>
              <li>GitHub Actions, GitLab CI</li>
              <li>Ansible</li>
              <li>Docker</li>
            </ul>
          </div>
          <div className="mb-4 break-inside-avoid-column">
            <div className="text-2xl">Тестирование</div>
            <ul className="mt-2 ml-6 list-disc">
              <li>Jest</li>
              <li>Puppeteer</li>
              <li>TDD</li>
            </ul>
          </div>
          <div className="mb-4 break-inside-avoid-column">
            <div className="text-2xl">Оптимизация и&nbsp;качество</div>
            <ul className="mt-2 ml-6 list-disc">
              <li>React Dev Tools</li>
              <li>Chrome Dev Tools: Performance, Network</li>
              <li>Lazy loading, Code splitting</li>
              <li>ESLint, Prettier</li>
            </ul>
          </div>
          <div className="mb-4 break-inside-avoid-column">
            <div className="text-2xl">Взаимодействие с&nbsp;бекендом</div>
            <ul className="mt-2 ml-6 list-disc">
              <li>REST API</li>
              <li>Swagger</li>
              <li>React Query</li>
              <li>WebSockets</li>
              <li>OAuth, JWT</li>
              <li>Zod</li>
            </ul>
          </div>
          <div className="mb-4 break-inside-avoid-column">
            <div className="text-2xl">Инструменты разработки</div>
            <ul className="mt-2 ml-6 list-disc">
              <li>Git</li>
              <li>WebStorm</li>
              <li>VS Code</li>
              <li>Cursor</li>
              <li>Bash</li>
            </ul>
          </div>
          <div className="mb-4 break-inside-avoid-column">
            <div className="text-2xl">Дополнительно</div>
            <ul className="mt-2 ml-6 list-disc">
              <li>Поиск и&nbsp;устранение проблем производительности</li>
              <li>Продумывание архитектуры и&nbsp;типизации приложения</li>
              <li>Рефакторинг и&nbsp;поддержка легаси кода</li>
              <li>
                Взаимодействие с&nbsp;командой бэкенда, дизайнерами
                и&nbsp;менеджерами
              </li>
              <li>Scrum, Kanban, планирование спринтов</li>
              <li>Тайм-менеджмент и&nbsp;приоритизация задач</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="text-3xl">Проекты</div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="grid h-fit gap-8">
            <Link
              className="flex cursor-pointer flex-col gap-2 transition hover:brightness-95"
              to="/cv/nlmk"
            >
              <img className="w-full rounded-2xl" src={NlmkImgUrl} alt="НЛМК" />
              <div className="text-lg">НЛМК — Управление выпусками</div>
            </Link>
            <Link
              className="flex cursor-pointer flex-col gap-2 transition hover:brightness-95"
              to="/cv/igron"
            >
              <img
                className="w-full rounded-2xl"
                src={IgronImgUrl}
                alt="Игрон"
              />
              <div className="text-lg">Игрон — Настольные игры онлайн</div>
            </Link>
          </div>
          <div className="grid gap-8">
            <Link
              className="flex cursor-pointer flex-col gap-2 transition hover:brightness-95"
              to="/cv/igron"
            >
              <img
                className="w-full rounded-2xl"
                src={IgronImgUrl}
                alt="Игрон"
              />
              <div className="text-lg">TODO — Нужен ещё один проект</div>
            </Link>
            <Link
              className="flex cursor-pointer flex-col gap-2 transition hover:brightness-95"
              to="/cv/gym-tracker"
            >
              <div className="flex aspect-16/9 w-full min-w-0 flex-row gap-8 rounded-2xl bg-gray-100 p-8 lg:p-16">
                <img
                  className="min-w-0 flex-1 object-contain"
                  src={GymTrackerImgUrl1}
                  alt="Gym Tracker 1"
                />
                <img
                  className="min-w-0 flex-1 object-contain"
                  src={GymTrackerImgUrl2}
                  alt="Gym Tracker 2"
                />
              </div>
              <div className="text-lg">Gym Tracker — пэт проект</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
