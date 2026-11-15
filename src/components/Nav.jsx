import { Logo } from "./Art";

export function Nav({ count, onCart }) {
  const links = [
    ["Home", "#home"],
    ["Menu", "#menu"],
    ["Promotions", "#promotions"],
    ["Drinks", "#drinks"],
    ["Location", "#location"],
  ];
  return (
    <header className="flex items-center gap-3 flex-wrap">
      <a
        href="#home"
        className="flex items-center gap-2"
        aria-label="Sunakko home"
      >
        <Logo />
        <span className="display text-pink text-lg hidden sm:inline">
          sunakko
        </span>
      </a>
      <nav
        className="flex gap-1.5 overflow-x-auto no-scrollbar flex-1 min-w-0"
        aria-label="Sections"
      >
        {links.map(([t, h], i) => (
          <a
            key={t}
            href={h}
            className={
              "shrink-0 rounded-full px-3.5 py-1.5 text-sm font-bold transition " +
              (i === 0 ? "bg-pink text-white" : "text-ink hover:bg-soft")
            }
          >
            {t}
          </a>
        ))}
      </nav>
      <button
        onClick={onCart}
        className="rounded-full border-2 border-pink text-pink px-4 py-1.5 text-sm font-bold hover:bg-soft flex items-center gap-2"
        aria-label={"Open order, " + count + " items"}
      >
        Order{" "}
        <span className="bg-pink text-white rounded-full min-w-[1.4rem] h-[1.4rem] grid place-items-center text-xs tabular-nums">
          {count}
        </span>
      </button>
    </header>
  );
}
