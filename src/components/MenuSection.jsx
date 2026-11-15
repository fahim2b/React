import { useState, useMemo } from "react";
import { Panel, Pill } from "./ui";
import { Dish, Logo } from "./Art";
import { MENU, CATS, money } from "../data";

export function MenuSection({ add }) {
  const [cat, setCat] = useState("Ramen");
  const [q, setQ] = useState("");
  const items = useMemo(
    () =>
      MENU.filter(
        (m) =>
          m.cat === cat &&
          (m.name + m.desc).toLowerCase().includes(q.toLowerCase()),
      ),
    [cat, q],
  );
  return (
    <Panel id="menu">
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <h2 className="display text-pink text-3xl">Menu</h2>
        <p className="text-muted text-sm flex-1 min-w-[200px] max-w-sm">
          Choose a category, then add dishes to your order. Prices are per
          portion.
        </p>
        <label className="sr-only" htmlFor="q">
          Search dishes
        </label>
        <input
          id="q"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search dishes"
          className="rounded-full border-2 border-line bg-panel text-ink px-4 py-1.5 text-sm w-full sm:w-44 focus:border-pink outline-none"
        />
      </div>
      <div
        role="tablist"
        className="flex gap-2 mt-4 overflow-x-auto no-scrollbar"
      >
        {CATS.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={
              "display shrink-0 rounded-full px-5 py-2 text-sm transition " +
              (cat === c
                ? "bg-pink text-white"
                : "bg-soft text-pink hover:brightness-95")
            }
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {items.map((m) => (
          <article
            key={m.id}
            className="rise group rounded-3xl overflow-hidden bg-soft flex flex-col"
          >
            <div className="relative h-44 overflow-hidden">
              <Dish cat={m.cat} hue={m.hue} />
              {m.hot && (
                <span className="absolute top-3 left-3 bg-white text-pink text-xs font-bold rounded-full px-2.5 py-1">
                  House favorite
                </span>
              )}
            </div>
            <div className="p-4 flex flex-col gap-1 flex-1">
              <div className="flex justify-between gap-2 items-baseline">
                <h3 className="font-bold">{m.name}</h3>
                <span className="text-pink font-bold tabular-nums">
                  {money(m.price)}
                </span>
              </div>
              <p className="text-muted text-sm flex-1">{m.desc}</p>
              <Pill className="mt-2 self-start" onClick={() => add.item(m)}>
                Add to order
              </Pill>
            </div>
          </article>
        ))}
        {items.length === 0 && (
          <p className="text-muted col-span-full py-8 text-center">
            No {cat.toLowerCase()} dishes match "{q}". Clear the search to see
            them all.
          </p>
        )}
      </div>
      <div className="wave rounded-3xl mt-6 py-8 px-4 flex flex-col items-center text-center gap-3">
        <Logo size={44} />
        <p className="display text-pink text-sm sm:text-base max-w-2xl leading-relaxed">
          Our goal is to provide every guest with a unique experience of
          immersion in the world of flavors and traditions of Asia.
        </p>
      </div>
    </Panel>
  );
}
