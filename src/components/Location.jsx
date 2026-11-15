const HOURS = {
  0: [11, 22],
  1: [11, 22],
  2: [11, 22],
  3: [11, 22],
  4: [11, 23],
  5: [11, 23],
  6: [11, 23],
};
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export function Location() {
  const now = new Date();
  const [o, c] = HOURS[now.getDay()];
  const h = now.getHours() + now.getMinutes() / 60;
  const open = h >= o && h < c;
  return (
    <section id="location" className="rounded-[2rem] p-1 flex flex-col gap-3">
      <div className="flex items-end justify-between gap-3 flex-wrap px-2 text-white">
        <h2 className="display text-2xl sm:text-3xl">Location</h2>
        <p className="text-sm text-white/90 text-right">
          Sunakko Street Kitchen
          <br />
          214 Cherry Lane, Midtown
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-[1.6fr_1fr]">
        <div className="relative rounded-[1.6rem] overflow-hidden bg-panel min-h-[240px]">
          <svg
            viewBox="0 0 600 300"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full"
            role="img"
            aria-label="Stylised map with Sunakko marked"
          >
            <rect width="600" height="300" fill="var(--soft)" />
            <g fill="var(--line)">
              {[
                [20, 20, 150, 90],
                [200, 20, 110, 90],
                [340, 20, 120, 90],
                [490, 20, 90, 90],
                [20, 150, 110, 60],
                [160, 150, 150, 130],
                [340, 150, 90, 130],
                [460, 150, 120, 60],
                [460, 230, 120, 50],
                [20, 240, 110, 40],
              ].map(([x, y, w, h], i) => (
                <rect key={i} x={x} y={y} width={w} height={h} rx="8" />
              ))}
            </g>
            <rect x="320" y="150" width="8" height="150" fill="var(--panel)" />
            <rect x="0" y="118" width="600" height="14" fill="var(--panel)" />
            <rect x="180" y="0" width="12" height="300" fill="var(--panel)" />
            <path d="M0 214 L600 190" stroke="var(--panel)" strokeWidth="10" />
            <g transform="translate(385 120)">
              <circle r="26" fill="var(--pink)" opacity=".25" />
              <path
                d="M0 -24 a14 14 0 0 1 14 14 c0 12 -14 26 -14 26 s-14 -14 -14 -26 a14 14 0 0 1 14 -14z"
                fill="var(--pink)"
              />
              <circle cy="-10" r="5" fill="#fff" />
            </g>
          </svg>
        </div>
        <div className="bg-panel rounded-[1.6rem] p-5 flex flex-col gap-2">
          <span
            className={
              "self-start text-xs font-bold rounded-full px-3 py-1 " +
              (open ? "bg-pink text-white" : "bg-line text-muted")
            }
          >
            {open
              ? "Open now, until " + c + ":00"
              : "Closed, opens " + o + ":00"}
          </span>
          <ul className="text-sm mt-1">
            {DAYS.map((d, i) => (
              <li
                key={d}
                className={
                  "flex justify-between py-1 border-b border-line last:border-0 tabular-nums " +
                  (i === now.getDay() ? "font-bold text-pink" : "text-muted")
                }
              >
                <span>{d}</span>
                <span>
                  {HOURS[i][0]}:00 to {HOURS[i][1]}:00
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
