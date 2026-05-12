import Link from "next/link";

const keySkills = [
  { label: "TypeScript", image: "/cv/home/ts.svg" },
  { label: "JavaScript", image: "/cv/home/js.svg" },
  { label: "HTML5", image: "/cv/home/html5.svg" },
  { label: "CSS3", image: "/cv/home/css3.svg" },
  { label: "React", image: "/cv/home/react.svg" },
  { label: "React Query", image: "/cv/home/react-query.webp" },
  { label: "Tailwind", image: "/cv/home/tailwind.svg" },
  { label: "NextJS", image: "/cv/home/nextjs.svg" },
  { label: "tRPC", image: "/cv/home/trpc.svg" },
  { label: "Jest", image: "/cv/home/jest.svg" },
  { label: "Puppeteer", image: "/cv/home/puppeteer.webp" },
  { label: "Ansible", image: "/cv/home/ansible.svg" },
  { label: "CI/CD", image: "/cv/home/ci-cd.svg" },
  { label: "Docker", image: "/cv/home/docker.svg" },
  { label: "Node", image: "/cv/home/nodejs.svg" },
  { label: "RxJS", image: "/cv/home/rxjs.webp" },
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
      "Babylon.js, Recharts",
    ],
  },
  {
    label: "Бэкенд",
    special: false,
    items: ["REST API", "React Query", "OAuth, JWT", "Zod, JSON Schema"],
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
    label: "ИИ-разработка",
    special: false,
    items: ["KiloCode", "AI Agents", "Prompt Engineering", "LLM API"],
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
    icon: "/cv/home/github.svg",
  },
  {
    label: "Почта",
    link: "mailto:aleksandr.schilow2012@gmail.com",
    icon: "/cv/home/email.svg",
  },
  {
    label: "Telegram",
    link: "https://t.me/ashlanderr",
    icon: "/cv/home/telegram.svg",
  },
  {
    label: "ВКонтакте",
    link: "https://vk.ru/ashlanderr",
    icon: "/cv/home/vk.svg",
  },
];

const projects = [
  {
    title: "НЛМК — Управление выпусками",
    img: "/cv/nlmk/visual.webp",
    to: "/nlmk",
    alt: "НЛМК",
  },
  {
    title: "Игрон — Настольные игры онлайн",
    img: "/cv/igron/preview.webp",
    to: "/igron",
    alt: "Игрон",
  },
  {
    title: "Gym Tracker — Пэт проект",
    img: "/cv/gym-tracker/preview.webp",
    to: "/gym-tracker",
    alt: "Gym Tracker",
  },
  {
    title: "САТЭК — RedForester",
    img: "/cv/red-forester/preview.webp",
    to: "/red-forester",
    alt: "RedForester",
  },
  {
    title: "Точка Зрения — АИС Эксперт",
    img: "/cv/ais-expert/preview.webp",
    to: "/ais-expert",
    alt: "АИС Эксперт",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:py-20">
      <header className="animate-slide-up mb-16 flex flex-col items-center gap-8 md:mb-24 md:flex-row md:items-start md:gap-12">
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-200/60 to-orange-300/40 blur-sm" />
          <img
            className="relative h-36 w-36 rounded-2xl object-cover shadow-lg md:h-44 md:w-44"
            src="/cv/home/avatar.webp"
            alt="Александр Шилов"
          />
        </div>
        <div className="flex flex-col items-center gap-3 md:items-start md:gap-4">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <h1 className="font-display text-center text-4xl leading-tight tracking-tight md:text-start md:text-5xl lg:text-6xl">
              Александр
              <br />
              <span className="italic">Шилов</span>
            </h1>
            <p className="text-ink-muted mt-1 text-sm tracking-widest uppercase">
              Senior Frontend Developer
            </p>
          </div>
          <nav className="mt-1 grid grid-cols-[1fr_1fr] gap-x-6 gap-y-2 md:grid-cols-[auto_auto_auto_auto]">
            {contacts.map((c) => (
              <a
                key={c.link}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-ink-light hover:text-ember flex items-center justify-center gap-1.5 text-sm transition-colors md:justify-start"
              >
                <img
                  className="h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100"
                  src={c.icon}
                  alt=""
                />
                {c.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="animate-slide-up stagger-2 mb-16 md:mb-24">
        <h2 className="text-ink-muted mb-5 text-xs font-semibold tracking-widest uppercase">
          Ключевые навыки
        </h2>
        <ul className="flex flex-wrap gap-2.5">
          {keySkills.map((skill, i) => (
            <li
              key={skill.label}
              className={`animate-scale-in stagger-${i + 1} border-border bg-card hover:border-ember/40 flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm shadow-sm transition-all hover:shadow-md`}
            >
              <img className="h-5 w-5" src={skill.image} alt="" />
              <span className="text-ink-light">{skill.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="animate-slide-up stagger-4 mb-16 md:mb-24">
        <h2 className="text-ink-muted mb-5 text-xs font-semibold tracking-widest uppercase">
          Навыки
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allSkills.map((group, i) => (
            <div
              key={group.label}
              className={`animate-slide-up stagger-${Math.min(i + 5, 16)} bg-card rounded-xl border p-5 shadow-sm transition-shadow hover:shadow-md ${
                group.special
                  ? "border-ember/30 from-card bg-gradient-to-br to-amber-50/50"
                  : "border-border"
              }`}
            >
              <h3 className="font-display mb-3 text-xl">{group.label}</h3>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-ink-light before:bg-ember/40 flex items-start gap-2 text-sm before:mt-2 before:block before:h-1 before:w-1 before:shrink-0 before:rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="animate-slide-up stagger-6">
        <h2 className="text-ink-muted mb-5 text-xs font-semibold tracking-widest uppercase">
          Проекты
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.to}
              href={project.to}
              className="group border-border bg-card relative overflow-hidden rounded-xl border shadow-sm transition-all will-change-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <img
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.03]"
                src={project.img}
                alt={project.alt}
              />
              <div className="border-border border-t px-5 py-3.5">
                <span className="font-display group-hover:text-ember text-lg transition-colors">
                  {project.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
