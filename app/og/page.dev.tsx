const stack = [
  { label: "TypeScript", image: "/cv/home/ts.svg" },
  { label: "React", image: "/cv/home/react.svg" },
  { label: "Next.js", image: "/cv/home/nextjs.svg" },
  { label: "Node.js", image: "/cv/home/nodejs.svg" },
  { label: "PostgreSQL", image: "/cv/home/postgresql.svg" },
  { label: "Prisma", image: "/cv/home/prisma.svg" },
  { label: "Tailwind", image: "/cv/home/tailwind.svg" },
  { label: "Docker", image: "/cv/home/docker.svg" },
];

// Служебная страница: макет og-картинки 1200x630, с которого снимается скриншот.
export default function OgCard() {
  return (
    <>
      {/* баннер куки и индикатор dev-режима мешают чистому кадру */}
      <style>{`#cookie-banner, nextjs-portal { display: none !important; }`}</style>

      <div
        id="og-card"
        className="bg-cream relative flex h-[630px] w-[1200px] flex-col justify-between overflow-hidden px-[80px] py-[64px]"
      >
        <div className="relative flex items-center gap-14">
          <div className="relative shrink-0">
            <img
              className="relative h-[320px] w-[320px] rounded-[36px] object-cover shadow-lg"
              src="/cv/home/avatar.webp"
              alt=""
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-[96px] leading-[0.95] tracking-tight">
              Александр
              <br />
              Шилов
            </h1>
            <p className="text-ember mt-8 text-[22px] font-medium tracking-[0.22em] uppercase">
              Senior FullStack Developer
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="via-border-strong mb-8 h-px bg-gradient-to-r from-transparent to-transparent" />
          <div className="flex items-center justify-between">
            <ul className="flex items-center gap-4">
              {stack.map((item) => (
                <li
                  key={item.label}
                  className="border-border bg-card flex h-[68px] w-[68px] items-center justify-center rounded-full border shadow-sm"
                >
                  <img className="h-9 w-9" src={item.image} alt={item.label} />
                </li>
              ))}
            </ul>
            <p className="text-ink-muted text-[22px] tracking-wide">
              github.com/ashlanderr
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
