import { useState } from "react";
import { Panel, Pill } from "./ui";
import { Logo, Can, Petals } from "./Art";
import { Nav } from "./Nav";
import { DRINKS, NEWS } from "../data";

export function Hero({ add }) {
  const [news, setNews] = useState(0);
  return (
    <Panel id="home" className="flex flex-col gap-4">
      <Nav count={add.count} onCart={add.open} />
      <div
        className="relative rounded-[1.6rem] overflow-hidden min-h-[300px] sm:min-h-[380px] flex items-end"
        style={{
          background:
            "radial-gradient(120% 90% at 30% 20%, #ffb3cf 0%, #f06b9c 55%, #c43c78 100%)",
        }}
      >
        <svg
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <g stroke="#6b2a47" strokeLinecap="round" fill="none" opacity=".55">
            <path
              d="M-20 330 q160 -90 300 -40 t340 -150 t200 -60"
              strokeWidth="14"
            />
            <path d="M120 300 q40 -60 110 -70" strokeWidth="8" />
            <path d="M520 150 q40 40 100 40" strokeWidth="7" />
          </g>
          {[
            [90, 250, 34],
            [210, 200, 26],
            [330, 260, 30],
            [470, 150, 36],
            [600, 110, 28],
            [700, 190, 32],
            [40, 150, 22],
            [390, 70, 24],
            [560, 260, 26],
          ].map(([x, y, r], i) => (
            <g key={i} fill="#ffd3e3" opacity=".92">
              {[0, 72, 144, 216, 288].map((a) => (
                <ellipse
                  key={a}
                  cx={x + Math.cos((a * Math.PI) / 180) * r * 0.6}
                  cy={y + Math.sin((a * Math.PI) / 180) * r * 0.6}
                  rx={r * 0.55}
                  ry={r * 0.4}
                  transform={`rotate(${a} ${x + Math.cos((a * Math.PI) / 180) * r * 0.6} ${y + Math.sin((a * Math.PI) / 180) * r * 0.6})`}
                />
              ))}
              <circle cx={x} cy={y} r={r * 0.2} fill="#d6568c" />
            </g>
          ))}
        </svg>
        <Petals />
        <div className="relative w-full p-5 sm:p-8 flex flex-col items-end text-right">
          <span className="text-white/90 text-sm tracking-[.25em] uppercase">
            asian street food
          </span>
          <h1 className="display text-white text-5xl sm:text-7xl leading-none drop-shadow-[0_3px_0_rgba(107,42,71,.45)]">
            Sunakko
          </h1>
          <a
            href="#menu"
            className="mt-4 rounded-full bg-white text-pink font-bold px-5 py-2 hover:scale-105 transition"
          >
            See the menu
          </a>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-[1.1fr_1fr_1fr] items-start">
        <div className="min-w-0">
          <h2 className="display text-pink text-2xl">Our kitchen</h2>
          <p className="text-muted mt-2 text-sm leading-relaxed max-w-[44ch]">
            Open flames, steaming broths and a counter you can watch from your
            stool. We cook small batches all day, so every bowl arrives hot and
            a little different from the last.
          </p>
          <Pill
            className="mt-3"
            onClick={() =>
              document
                .getElementById("menu")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn more
          </Pill>
        </div>
        <div className="min-w-0">
          <h2 className="display text-pink text-xl">Specialty drinks</h2>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex -space-x-2">
              {DRINKS.slice(0, 3).map((d) => (
                <Can key={d.id} c1={d.c1} c2={d.c2} size={34} />
              ))}
            </div>
            <p className="text-muted text-sm">
              Ramune, matcha and seasonal coolers on ice.
            </p>
          </div>
          <a
            href="#drinks"
            className="text-pink font-bold text-sm mt-2 inline-block hover:underline"
          >
            View drinks
          </a>
        </div>
        <div className="min-w-0">
          <h2 className="display text-pink text-xl">News</h2>
          <ul className="mt-2 divide-y divide-line">
            {NEWS.map((n, i) => (
              <li key={i}>
                <button
                  onClick={() => setNews(i)}
                  className="w-full text-left py-2 flex gap-3 items-start"
                  aria-expanded={news === i}
                >
                  <span className="text-xs font-bold text-pink tabular-nums shrink-0 pt-0.5">
                    {n.d}
                  </span>
                  <span
                    className={
                      "text-sm min-w-0 " +
                      (news === i ? "text-ink" : "text-muted truncate")
                    }
                  >
                    {n.t}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Panel>
  );
}
