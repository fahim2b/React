import { useState } from "react";
import { Panel } from "./ui";
import { Can } from "./Art";
import { DRINKS, money } from "../data";

export function Drinks({ add }) {
  const [sel, setSel] = useState(null);
  return (
    <Panel id="drinks">
      <h2 className="display text-pink text-2xl sm:text-3xl">
        Specialty drinks
      </h2>
      <div className="grid grid-cols-2 min-[520px]:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
        {DRINKS.map((d) => (
          <button
            key={d.id}
            onClick={() => setSel(sel === d.id ? null : d.id)}
            className={
              "rounded-3xl p-3 flex flex-col items-center gap-2 transition text-center " +
              (sel === d.id
                ? "bg-pink text-white -translate-y-1"
                : "bg-soft hover:-translate-y-1")
            }
            aria-pressed={sel === d.id}
          >
            <Can c1={d.c1} c2={d.c2} size={52} />
            <span className="font-bold text-sm">{d.name}</span>
            <span
              className={
                "text-xs " + (sel === d.id ? "text-white/85" : "text-muted")
              }
            >
              {d.note}
            </span>
            <span className="font-bold tabular-nums text-sm">
              {money(d.price)}
            </span>
            {sel === d.id && (
              <span
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  add.item({ ...d });
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.stopPropagation();
                    add.item({ ...d });
                  }
                }}
                className="rounded-full bg-white text-pink text-xs font-bold px-3 py-1"
              >
                Add
              </span>
            )}
          </button>
        ))}
      </div>
    </Panel>
  );
}
