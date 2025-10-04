import { VisualImgUrl as NlmkImgUrl } from "../Nlmk";
import { PreviewImgUrl as IgronImgUrl } from "../Igron";
import { PreviewImgUrl as GymTrackerImgUrl } from "../GymTracker";
import { Link } from "react-router";
import {
  AngularImgUrl,
  AnsibleImgUrl,
  AvatarImgUrl,
  CiCdImgUrl,
  Css3ImgUrl,
  DockerImgUrl,
  Html5ImgUrl,
  JestImgUrl,
  JsImgUrl,
  MaterialImgUrl,
  NodeJsImgUrl,
  PuppeteerImgUrl,
  ReactImgUrl,
  ReactQueryImgUrl,
  ReduxImgUrl,
  RxJsImgUrl,
  TsImgUrl,
} from "./assets";
import clsx from "clsx";

export function Home() {
  const keySkills = [
    { label: "JavaScript", image: JsImgUrl },
    { label: "TypeScript", image: TsImgUrl },
    { label: "HTML5", image: Html5ImgUrl },
    { label: "CSS3", image: Css3ImgUrl },
    { label: "React", image: ReactImgUrl },
    { label: "Angular", image: AngularImgUrl },
    { label: "Material UI", image: MaterialImgUrl },
    { label: "React Query", image: ReactQueryImgUrl },
    { label: "RxJS", image: RxJsImgUrl },
    { label: "Ansible", image: AnsibleImgUrl },
    { label: "Docker", image: DockerImgUrl },
    { label: "CI/CD", image: CiCdImgUrl },
    { label: "Jest", image: JestImgUrl },
    { label: "Puppeteer", image: PuppeteerImgUrl },
    { label: "NodeJS", image: NodeJsImgUrl },
    { label: "Redux", image: ReduxImgUrl },
  ];

  const allSkills = [
    {
      label: "Языки",
      special: false,
      items: [
        "JavaScript: ES2022, Proxy",
        "TypeScript: Generics, Type Mapping",
        "HTML5: семантическая вёрстка, WebGL",
        "CSS3: FlexBox, Grid, адаптивная вёрстка",
      ],
    },
    {
      label: "Библиотеки",
      special: false,
      items: [
        "React: Hooks, Suspense, Context API",
        "Angular: RxJS",
        "State Management: Redux, MobX, Zustand",
        "Babylon.js",
      ],
    },
    {
      label: "Бэкенд",
      special: false,
      items: ["REST API", "React Query", "OAuth, JWT", "Zod"],
    },
    {
      label: "Тестирование",
      special: false,
      items: ["Jest", "Puppeteer", "TDD", "Vitest"],
    },
    {
      label: "Оптимизация и качество",
      special: false,
      items: [
        "React Dev Tools",
        "Chrome Dev Tools: Performance, Network",
        "Lazy loading, Code splitting",
        "ESLint, Prettier",
      ],
    },
    {
      label: "Сборка",
      special: false,
      items: ["Webpack, Vite", "NPM, Yarn", "CI / CD", "Docker"],
    },
    {
      label: "Инструменты разработки",
      special: false,
      items: ["WebStorm", "VS Code", "Bash", "Git", "Figma"],
    },
    {
      label: "Тимлидство",
      special: true,
      items: [
        "Продумывание архитектуры и типизации",
        "Общение с дизайнерами и менеджерами",
        "Scrum, Kanban, планирование спринтов",
        "Тайм-менеджмент и приоритизация задач",
        "Оптимизация производительности",
        "Рефакторинг и поддержка легаси кода",
      ],
    },
  ];

  const contacts = [
    { label: "GitHub", link: "https://github.com/ashlanderr" },
    { label: "Telegram", link: "https://t.me/ashlanderr" },
    { label: "ВКонтакте", link: "https://vk.ru/ashlanderr" },
    { label: "Почта", link: "mailto:aleksandr.schilow2012@gmail.com" },
  ];

  return (
    <div className="container mx-auto mt-8 mb-16 flex flex-col gap-8 px-4">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <div className="flex gap-4 rounded-2xl bg-gray-100 p-4">
          <img
            className="h-32 w-32 flex-0 rounded-full object-contain"
            src={AvatarImgUrl}
            alt="Avatar"
          />
          <div className="flex flex-1 flex-col">
            <div className="text-3xl">Александр Шилов</div>
            <div className="text-lg text-gray-500">
              Senior Frontend Developer
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl bg-gray-100 p-4 xl:col-span-2">
          <div className="text-3xl">Ключевые навыки</div>
          <ul className="flex flex-wrap gap-4">
            {keySkills.map((skill) => (
              <li className="flex gap-1" key={skill.label}>
                <img className="h-6 w-6" src={skill.image} alt={skill.label} />
                <span>{skill.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {allSkills.map((group) => (
          <div
            className={clsx(
              "rounded-2xl p-4",
              group.special ? "bg-green-50" : "bg-gray-100",
            )}
            key={group.label}
          >
            <div className="text-2xl">{group.label}</div>
            <ul className="mt-2 ml-6 list-disc">
              {group.items.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="hidden rounded-2xl bg-gray-100 p-4">
          <div className="text-2xl">Контакты</div>
          <ul className="mt-2 ml-6 list-disc">
            {contacts.map((contact) => (
              <li className="text-gray-900 underline hover:text-gray-600">
                <a href={contact.link} target="_blank">
                  {contact.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
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
            <img className="w-full rounded-2xl" src={IgronImgUrl} alt="Игрон" />
            <div className="text-lg">Игрон — Настольные игры онлайн</div>
          </Link>
          <Link
            className="flex cursor-pointer flex-col gap-2 transition hover:brightness-95"
            to="/cv/gym-tracker"
          >
            <img
              className="w-full rounded-2xl bg-gray-100"
              src={GymTrackerImgUrl}
              alt="Gym Tracker"
            />
            <div className="text-lg">Gym Tracker — пэт проект</div>
          </Link>
          <Link
            className="flex cursor-pointer flex-col gap-2 transition hover:brightness-95"
            to="/cv/igron"
          >
            <img className="w-full rounded-2xl" src={IgronImgUrl} alt="Игрон" />
            <div className="text-lg">TODO — Нужен ещё один проект</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
