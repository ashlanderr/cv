import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="/"
      className="group text-ink-muted hover:text-ember mb-1 inline-flex items-center gap-2 self-start text-sm transition-colors"
    >
      <span
        aria-hidden="true"
        className="transition-transform group-hover:-translate-x-0.5"
      >
        ←
      </span>
      Назад к&nbsp;резюме
    </Link>
  );
}
