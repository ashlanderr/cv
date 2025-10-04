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
  EmailImgUrl,
  GitHubImgUrl,
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
  TelegramImgUrl,
  TsImgUrl,
  VkImgUrl,
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
        "HTML5: семантика, WebGL",
        "CSS3: FlexBox, Grid, Tailwind",
      ],
    },
    {
      label: "Библиотеки",
      special: false,
      items: [
        "React: Hooks, Suspense, Context API",
        "Angular: RxJS",
        "Redux, MobX, Zustand",
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
        "Chrome Dev Tools",
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
        "Архитектура и типизация",
        "Работа с дизайном и PM",
        "Scrum, Kanban, планирование",
        "Тайм-менеджмент, приоритизация",
        "Оптимизация производительности",
        "Рефакторинг и поддержка легаси",
      ],
    },
  ];

  const contacts = [
    {
      label: "GitHub",
      link: "https://github.com/ashlanderr",
      icon: GitHubImgUrl,
    },
    {
      label: "Telegram",
      link: "https://t.me/ashlanderr",
      icon: TelegramImgUrl,
    },
    {
      label: "ВКонтакте",
      link: "https://vk.ru/ashlanderr",
      icon: VkImgUrl,
    },
    {
      label: "Почта",
      link: "mailto:aleksandr.schilow2012@gmail.com",
      icon: EmailImgUrl,
    },
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
            <div className="text-md text-gray-500">
              Senior Frontend Developer
            </div>
            <ul className="mt-2 -mb-2 flex flex-wrap">
              {contacts.map((contact) => (
                <li className="mr-6 mb-2 text-lg text-blue-800 hover:text-blue-600">
                  <a
                    className="flex items-center gap-1"
                    href={contact.link}
                    target="_blank"
                  >
                    <img
                      className="h-4 w-4"
                      src={contact.icon}
                      alt={contact.label}
                    />
                    <span>{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl bg-gray-100 p-4 xl:col-span-2">
          <div className="text-3xl">Ключевые навыки</div>
          <ul className="-mb-4 flex flex-wrap">
            {keySkills.map((skill) => (
              <li className="mr-6 mb-4 flex gap-1" key={skill.label}>
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
