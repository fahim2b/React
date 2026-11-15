import { useEffect, useRef } from "react";

export function Logo({ size = 36, className = "" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="20" fill="var(--pink)" />
      <path d="M7 21 h26 a13 11 0 0 1 -26 0z" fill="#fff" />
      <path
        d="M13 21 q7 -9 14 0"
        fill="none"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 8 l6 7"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Can({ c1, c2, label, size = 56 }) {
  const id = "c" + (c1 ? c1.slice(1) : "def");
  return (
    <svg
      viewBox="0 0 60 100"
      width={size}
      height={(size * 100) / 60}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c1 || "#e8689a"} />
          <stop offset="1" stopColor={c2 || "#a93c70"} />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="52" height="92" rx="10" fill={`url(#${id})`} />
      <rect
        x="4"
        y="4"
        width="52"
        height="10"
        rx="5"
        fill="#fff"
        opacity=".45"
      />
      <circle cx="30" cy="50" r="15" fill="#fff" opacity=".85" />
      <path d="M22 54 q8 -16 16 0z" fill={c2 || "#a93c70"} />
      <circle cx="30" cy="42" r="3" fill={c2 || "#a93c70"} />
      <rect
        x="10"
        y="22"
        width="6"
        height="64"
        rx="3"
        fill="#fff"
        opacity=".25"
      />
    </svg>
  );
}

export function ProductVisual({
  type = "ramen-tonkotsu",
  hue = 14,
  className = "",
}) {
  const bg1 = `hsl(${hue} 80% 86%)`;
  const bg2 = `hsl(${(hue + 20) % 360} 70% 68%)`;
  const gid = "pv-" + type.replace(/[^a-zA-Z0-9]/g, "");

  return (
    <svg
      viewBox="0 0 280 200"
      preserveAspectRatio="xMidYMid slice"
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bg1} />
          <stop offset="100%" stopColor={bg2} />
        </linearGradient>
        <filter id={`sh-${gid}`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Background with subtle wave or grid */}
      <rect width="280" height="200" fill={`url(#${gid})`} />
      <g opacity="0.12" stroke="#fff" strokeWidth="1">
        <circle cx="280" cy="0" r="100" fill="none" strokeWidth="30" />
        <circle cx="0" cy="200" r="80" fill="none" strokeWidth="20" />
        <path d="M20 30 Q70 10 120 30 T220 30" fill="none" strokeWidth="2" />
      </g>

      {/* RENDER BY PRODUCT TYPE */}
      {(type === "ramen-tonkotsu" ||
        type === "ramen-blackgarlic" ||
        type === "ramen-shoyu") && (
        <g filter={`url(#sh-${gid})`}>
          {/* Bowl Shadow */}
          <ellipse
            cx="140"
            cy="165"
            rx="75"
            ry="16"
            fill="#3b1a2c"
            opacity="0.22"
          />

          {/* Ceramic Bowl Body */}
          <path
            d="M 65 95 C 65 155, 215 155, 215 95 Z"
            fill="#fffafc"
            stroke="#f3c4d6"
            strokeWidth="3"
          />
          {/* Bowl Rim */}
          <ellipse
            cx="140"
            cy="95"
            rx="75"
            ry="24"
            fill="#fffafc"
            stroke="#f3c4d6"
            strokeWidth="2"
          />

          {/* Broth */}
          <ellipse
            cx="140"
            cy="98"
            rx="68"
            ry="20"
            fill={
              type === "ramen-tonkotsu"
                ? "#e8b87a"
                : type === "ramen-blackgarlic"
                  ? "#4a2a1a"
                  : "#b88a44"
            }
          />

          {/* Black Garlic Swirl or Truffle sheen */}
          {type === "ramen-blackgarlic" && (
            <path
              d="M 120 96 Q 140 90 160 98 Q 140 106 120 96 Z"
              fill="#180e0c"
              opacity="0.8"
            />
          )}

          {/* Wavy Noodles */}
          <path
            d="M 90 95 Q 100 88 110 95 T 130 95 T 150 95 T 170 95"
            stroke="#fce38a"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 95 102 Q 108 94 122 102 T 150 102 T 178 102"
            stroke="#fbe07a"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Chashu Pork */}
          <ellipse
            cx="112"
            cy="92"
            rx="18"
            ry="12"
            fill="#d97d64"
            transform="rotate(-15 112 92)"
          />
          <ellipse
            cx="112"
            cy="92"
            rx="14"
            ry="8"
            fill="#f8b195"
            transform="rotate(-15 112 92)"
          />
          <ellipse
            cx="112"
            cy="92"
            rx="6"
            ry="4"
            fill="#b8533c"
            transform="rotate(-15 112 92)"
          />

          {/* Ajitama Marinated Soft Egg */}
          <ellipse cx="160" cy="94" rx="14" ry="11" fill="#ffffff" />
          <circle cx="160" cy="94" r="7" fill="#f39c12" />
          <circle cx="161" cy="93" r="3" fill="#e67e22" />

          {/* Menma Bamboo / Corn / Shiitake */}
          {type === "ramen-blackgarlic" ? (
            <g fill="#f1c40f">
              <circle cx="132" cy="106" r="3" />
              <circle cx="138" cy="108" r="3" />
              <circle cx="144" cy="106" r="3" />
              <circle cx="135" cy="112" r="3" />
              <circle cx="141" cy="112" r="3" />
            </g>
          ) : (
            <g fill="#d4a373" stroke="#b07d4b" strokeWidth="0.8">
              <rect
                x="130"
                y="86"
                width="16"
                height="5"
                rx="2"
                transform="rotate(20 138 88)"
              />
              <rect
                x="134"
                y="93"
                width="16"
                height="5"
                rx="2"
                transform="rotate(25 142 95)"
              />
            </g>
          )}

          {/* Nori Sheet */}
          <rect
            x="172"
            y="70"
            width="22"
            height="32"
            rx="2"
            fill="#1b3b2b"
            transform="rotate(18 183 86)"
          />

          {/* Scallions */}
          <circle
            cx="122"
            cy="104"
            r="3"
            fill="#2ecc71"
            stroke="#27ae60"
            strokeWidth="1"
          />
          <circle
            cx="128"
            cy="100"
            r="3"
            fill="#2ecc71"
            stroke="#27ae60"
            strokeWidth="1"
          />
          <circle
            cx="152"
            cy="107"
            r="3"
            fill="#2ecc71"
            stroke="#27ae60"
            strokeWidth="1"
          />

          {/* Rising Steam */}
          <g
            className="steam"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          >
            <path d="M 120 65 Q 112 50 122 36" />
            <path d="M 140 68 Q 132 52 142 38" />
            <path d="M 160 65 Q 152 50 162 36" />
          </g>
        </g>
      )}

      {/* RICE / DONBURI (Katsu & Unagi) */}
      {(type === "rice-katsu" || type === "rice-unagi") && (
        <g filter={`url(#sh-${gid})`}>
          {/* Bowl Shadow */}
          <ellipse
            cx="140"
            cy="165"
            rx="72"
            ry="15"
            fill="#3b1a2c"
            opacity="0.22"
          />

          {/* Bowl */}
          <path
            d="M 70 100 C 70 156, 210 156, 210 100 Z"
            fill="#fffafc"
            stroke="#f3c4d6"
            strokeWidth="3"
          />
          <ellipse
            cx="140"
            cy="100"
            rx="70"
            ry="22"
            fill="#fffafc"
            stroke="#f3c4d6"
            strokeWidth="2"
          />

          {/* Fluffy Rice Mound */}
          <ellipse cx="140" cy="100" rx="64" ry="18" fill="#fffbf2" />
          <ellipse cx="140" cy="96" rx="55" ry="14" fill="#ffffff" />

          {type === "rice-katsu" && (
            <g>
              {/* Curry Sauce side */}
              <path
                d="M 84 98 Q 115 110 135 106 Q 140 115 125 118 Q 95 118 84 98 Z"
                fill="#b86b24"
              />
              {/* Sliced Crisp Katsu Cutlet */}
              {[0, 1, 2, 3, 4].map((i) => (
                <rect
                  key={i}
                  x={110 + i * 14}
                  y={82 - i * 1.5}
                  width="11"
                  height="34"
                  rx="4"
                  fill="#d48228"
                  stroke="#f9c851"
                  strokeWidth="2"
                  transform="rotate(12 120 90)"
                />
              ))}
              {/* Tonkotsu sauce drizzle */}
              <path
                d="M 115 85 Q 145 92 175 90"
                stroke="#5c2c16"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Red Fukujinzuke pickles */}
              <circle cx="86" cy="98" r="5" fill="#e74c3c" />
              <circle cx="92" cy="102" r="4" fill="#c0392b" />
            </g>
          )}

          {type === "rice-unagi" && (
            <g>
              {/* Two Glazed Unagi Fillets */}
              <rect
                x="94"
                y="82"
                width="92"
                height="16"
                rx="5"
                fill="#4a2215"
                stroke="#783e23"
                strokeWidth="2"
              />
              <rect
                x="94"
                y="96"
                width="92"
                height="16"
                rx="5"
                fill="#4a2215"
                stroke="#783e23"
                strokeWidth="2"
              />
              {/* Grill marks */}
              {[0, 1, 2, 3, 4].map((i) => (
                <g key={i}>
                  <line
                    x1={104 + i * 17}
                    y1="84"
                    x2={109 + i * 17}
                    y2="96"
                    stroke="#230d07"
                    strokeWidth="2"
                  />
                  <line
                    x1={104 + i * 17}
                    y1="98"
                    x2={109 + i * 17}
                    y2="110"
                    stroke="#230d07"
                    strokeWidth="2"
                  />
                </g>
              ))}
              {/* Glaze sheen */}
              <ellipse
                cx="140"
                cy="88"
                rx="26"
                ry="3"
                fill="#c07d50"
                opacity="0.6"
              />
              <ellipse
                cx="140"
                cy="102"
                rx="26"
                ry="3"
                fill="#c07d50"
                opacity="0.6"
              />
              {/* Sansho pepper green sprinkles */}
              <circle cx="120" cy="88" r="1.5" fill="#27ae60" />
              <circle cx="140" cy="86" r="1.5" fill="#27ae60" />
              <circle cx="155" cy="90" r="1.5" fill="#27ae60" />
              <circle cx="130" cy="102" r="1.5" fill="#27ae60" />
              <circle cx="150" cy="104" r="1.5" fill="#27ae60" />
            </g>
          )}

          {/* Scallion greens */}
          <circle cx="106" cy="108" r="2.5" fill="#2ecc71" />
          <circle cx="168" cy="108" r="2.5" fill="#2ecc71" />
        </g>
      )}

      {/* SNACKS: Takoyaki & Gyoza */}
      {(type === "snack-takoyaki" || type === "snack-gyoza") && (
        <g filter={`url(#sh-${gid})`}>
          {/* Wood Boat Tray */}
          <ellipse
            cx="140"
            cy="165"
            rx="80"
            ry="14"
            fill="#3b1a2c"
            opacity="0.22"
          />
          <path
            d="M 50 115 C 70 142, 210 142, 230 115 C 200 130, 80 130, 50 115 Z"
            fill="#d7b899"
            stroke="#b58d67"
            strokeWidth="2"
          />
          <ellipse
            cx="140"
            cy="118"
            rx="86"
            ry="16"
            fill="#f5ede3"
            stroke="#d7b899"
            strokeWidth="2"
          />

          {type === "snack-takoyaki" && (
            <g>
              {/* 5-6 Golden Balls */}
              {[
                { x: 92, y: 110, r: 16 },
                { x: 124, y: 108, r: 17 },
                { x: 156, y: 108, r: 17 },
                { x: 188, y: 110, r: 16 },
                { x: 108, y: 118, r: 15 },
                { x: 140, y: 119, r: 16 },
                { x: 172, y: 118, r: 15 },
              ].map((b, i) => (
                <circle
                  key={i}
                  cx={b.x}
                  cy={b.y}
                  r={b.r}
                  fill="#d9822b"
                  stroke="#f1a954"
                  strokeWidth="2"
                />
              ))}
              {/* Sweet brown sauce swirls */}
              <path
                d="M 85 106 Q 140 102 195 108"
                stroke="#4a1a0c"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 95 116 Q 140 114 185 117"
                stroke="#4a1a0c"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              {/* Kewpie Mayo zigzag */}
              <path
                d="M 90 108 Q 100 102 110 108 T 130 108 T 150 108 T 170 108 T 190 108"
                stroke="#fffef0"
                strokeWidth="3"
                fill="none"
              />
              {/* Bonito flakes & Aonori */}
              <circle cx="118" cy="104" r="2.5" fill="#27ae60" />
              <circle cx="145" cy="106" r="2.5" fill="#27ae60" />
              <circle cx="160" cy="112" r="2.5" fill="#27ae60" />
              <rect
                x="120"
                y="102"
                width="8"
                height="4"
                rx="1"
                fill="#e0a96d"
                transform="rotate(30 124 104)"
              />
              <rect
                x="150"
                y="106"
                width="10"
                height="5"
                rx="1"
                fill="#e0a96d"
                transform="rotate(-20 155 108)"
              />
            </g>
          )}

          {type === "snack-gyoza" && (
            <g>
              {/* Pan-seared Dumplings */}
              {[0, 1, 2, 3].map((i) => (
                <g key={i} transform={`translate(${86 + i * 28}, 96)`}>
                  {/* Dumpling Crescent */}
                  <path
                    d="M 0 16 C 4 0, 22 0, 26 16 Z"
                    fill="#fffdf5"
                    stroke="#e6d5b8"
                    strokeWidth="1.5"
                  />
                  {/* Golden Crispy Bottom */}
                  <rect
                    x="2"
                    y="14"
                    width="22"
                    height="5"
                    rx="2"
                    fill="#ba6a18"
                  />
                  {/* Pleats on top */}
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="7"
                    stroke="#e0cfa5"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="13"
                    y1="1"
                    x2="13"
                    y2="6"
                    stroke="#e0cfa5"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="18"
                    y1="2"
                    x2="18"
                    y2="7"
                    stroke="#e0cfa5"
                    strokeWidth="1.5"
                  />
                </g>
              ))}
              {/* Dipping sauce dish */}
              <ellipse
                cx="62"
                cy="124"
                rx="16"
                ry="9"
                fill="#fff"
                stroke="#f3c4d6"
                strokeWidth="1.5"
              />
              <ellipse cx="62" cy="124" rx="12" ry="6" fill="#3b1509" />
              <circle cx="60" cy="123" r="2" fill="#c0392b" />
            </g>
          )}
        </g>
      )}

      {/* PANTRY: Ramen Kit Box */}
      {type === "pantry-kit" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="168"
            rx="70"
            ry="12"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* Main Box */}
          <rect
            x="75"
            y="65"
            width="130"
            height="95"
            rx="12"
            fill="#ffffff"
            stroke="#f3c4d6"
            strokeWidth="3"
          />
          {/* Box Header / Band */}
          <rect x="75" y="85" width="130" height="32" fill="var(--pink)" />
          <text
            x="140"
            y="106"
            fill="#ffffff"
            fontSize="11"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="1"
          >
            SUNAKKO RAMEN KIT
          </text>
          {/* Golden Ribbon */}
          <line
            x1="140"
            y1="65"
            x2="140"
            y2="160"
            stroke="#ffd166"
            strokeWidth="4"
          />
          {/* Ribbon Bow */}
          <circle cx="140" cy="65" r="7" fill="#ffd166" />
          <path d="M 133 65 C 122 55, 122 75, 133 65" fill="#ffd166" />
          <path d="M 147 65 C 158 55, 158 75, 147 65" fill="#ffd166" />
          {/* 4 Servings Badge */}
          <circle cx="185" cy="72" r="12" fill="#ff477e" />
          <text
            x="185"
            y="76"
            fill="#fff"
            fontSize="9"
            fontWeight="bold"
            textAnchor="middle"
          >
            4PK
          </text>
        </g>
      )}

      {/* PANTRY: Chili Crunch Jar */}
      {type === "pantry-chili" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="168"
            rx="42"
            ry="10"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* Glass Jar Body */}
          <rect
            x="100"
            y="60"
            width="80"
            height="98"
            rx="16"
            fill="#ff4d4d"
            stroke="#e02424"
            strokeWidth="3"
          />
          {/* Chili Oil Gradient Sheen */}
          <rect x="104" y="64" width="72" height="90" rx="12" fill="#c91818" />
          {/* Crispy flakes inside */}
          {[
            [115, 80],
            [140, 75],
            [160, 85],
            [125, 95],
            [150, 100],
            [118, 120],
            [142, 130],
            [162, 125],
            [130, 140],
            [155, 142],
          ].map(([x, y], i) => (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="4"
              ry="2.5"
              fill="#fbd14b"
              transform={`rotate(${i * 35} ${x} ${y})`}
            />
          ))}
          {/* Label */}
          <rect
            x="108"
            y="92"
            width="64"
            height="42"
            rx="4"
            fill="#fffafc"
            stroke="#f3c4d6"
            strokeWidth="1.5"
          />
          <text
            x="140"
            y="108"
            fill="var(--pink)"
            fontSize="9"
            fontWeight="bold"
            textAnchor="middle"
          >
            CHILI CRUNCH
          </text>
          <text x="140" y="122" fill="#8a5f75" fontSize="7" textAnchor="middle">
            UMAMI GARLIC
          </text>
          {/* Jar Lid */}
          <rect
            x="106"
            y="50"
            width="68"
            height="15"
            rx="5"
            fill="#f1c40f"
            stroke="#d4ac0d"
            strokeWidth="2"
          />
          <line
            x1="108"
            y1="57"
            x2="172"
            y2="57"
            stroke="#b7950b"
            strokeWidth="1"
          />
        </g>
      )}

      {/* PANTRY: Shoyu Tare Bottle */}
      {type === "pantry-shoyu" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="170"
            rx="36"
            ry="8"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* Bottle Body */}
          <rect
            x="115"
            y="70"
            width="50"
            height="92"
            rx="10"
            fill="#2b1810"
            stroke="#4a2e20"
            strokeWidth="2"
          />
          {/* Bottle Neck */}
          <rect
            x="127"
            y="44"
            width="26"
            height="30"
            rx="4"
            fill="#2b1810"
            stroke="#4a2e20"
            strokeWidth="2"
          />
          {/* Pour Cap */}
          <rect x="125" y="38" width="30" height="8" rx="2" fill="#e74c3c" />
          {/* Label */}
          <rect x="120" y="90" width="40" height="52" rx="3" fill="#faf6ed" />
          <text
            x="140"
            y="112"
            fill="#2b1810"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            醤油
          </text>
          <text
            x="140"
            y="128"
            fill="#c0392b"
            fontSize="7"
            fontWeight="bold"
            textAnchor="middle"
          >
            KYOTO TARE
          </text>
        </g>
      )}

      {/* PANTRY: Furikake Trio */}
      {type === "pantry-furikake" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="168"
            rx="65"
            ry="12"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* 3 Shaker Bottles */}
          {[
            { x: 92, fill: "#27ae60", cap: "#2ecc71", label: "NORI" },
            { x: 130, fill: "#e67e22", cap: "#f39c12", label: "WASABI" },
            { x: 168, fill: "#8e44ad", cap: "#9b59b6", label: "SHISO" },
          ].map((sh, i) => (
            <g key={i}>
              <rect
                x={sh.x}
                y="72"
                width="28"
                height="85"
                rx="6"
                fill="#fffdfa"
                stroke="#d5c8b5"
                strokeWidth="2"
              />
              <rect
                x={sh.x + 3}
                y="110"
                width="22"
                height="42"
                rx="3"
                fill={sh.fill}
                opacity="0.8"
              />
              <rect
                x={sh.x + 2}
                y="62"
                width="24"
                height="12"
                rx="3"
                fill={sh.cap}
              />
              <text
                x={sh.x + 14}
                y="98"
                fill="#3b1a2c"
                fontSize="6.5"
                fontWeight="bold"
                textAnchor="middle"
              >
                {sh.label}
              </text>
            </g>
          ))}
        </g>
      )}

      {/* DRINKS: Ramune Codd Bottle */}
      {type === "drink-ramune" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="172"
            rx="34"
            ry="8"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* Codd-neck glass silhouette */}
          <path
            d="M 124 50 L 124 70 C 124 82, 116 90, 116 110 L 116 160 C 116 168, 164 168, 164 160 L 164 110 C 164 90, 156 82, 156 70 L 156 50 Z"
            fill="#d4f1f9"
            stroke="#68c9e4"
            strokeWidth="2.5"
          />
          {/* Ramune blue liquid */}
          <path
            d="M 118 105 L 118 160 C 118 166, 162 166, 162 160 L 162 105 Z"
            fill="#80deea"
            opacity="0.8"
          />
          {/* Marble chamber indented neck */}
          <path
            d="M 124 72 Q 134 76 124 80"
            stroke="#68c9e4"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 156 72 Q 146 76 156 80"
            stroke="#68c9e4"
            strokeWidth="2"
            fill="none"
          />
          {/* Glass Marble! */}
          <circle
            cx="140"
            cy="76"
            r="6"
            fill="#00bcd4"
            stroke="#00838f"
            strokeWidth="1.5"
          />
          <circle cx="138" cy="74" r="2" fill="#fff" />
          {/* Green pop cap */}
          <rect x="122" y="44" width="36" height="8" rx="3" fill="#00e676" />
          {/* Carbonation bubbles */}
          <circle cx="132" cy="120" r="2.5" fill="#fff" opacity="0.7" />
          <circle cx="146" cy="130" r="3" fill="#fff" opacity="0.7" />
          <circle cx="136" cy="144" r="2" fill="#fff" opacity="0.7" />
          <circle cx="150" cy="112" r="2" fill="#fff" opacity="0.7" />
        </g>
      )}

      {/* DRINKS: Ceremonial Matcha */}
      {type === "drink-matcha" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="170"
            rx="55"
            ry="12"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* Ceramic Matcha Chawan Bowl */}
          <path
            d="M 85 96 C 85 155, 195 155, 195 96 Z"
            fill="#2c3e50"
            stroke="#1a252f"
            strokeWidth="2.5"
          />
          <ellipse cx="140" cy="96" rx="55" ry="18" fill="#1a252f" />
          {/* Frothy Jade Matcha Tea */}
          <ellipse cx="140" cy="98" rx="50" ry="15" fill="#27ae60" />
          <ellipse cx="140" cy="98" rx="45" ry="12" fill="#2ecc71" />
          {/* Whisked Micro-foam circles */}
          <circle cx="130" cy="97" r="3" fill="#a8e6cf" />
          <circle cx="145" cy="99" r="4" fill="#a8e6cf" />
          <circle cx="156" cy="96" r="2.5" fill="#a8e6cf" />
          <circle cx="122" cy="99" r="2.5" fill="#a8e6cf" />
          {/* Steel Tea Canister in background */}
          <rect
            x="195"
            y="60"
            width="38"
            height="60"
            rx="6"
            fill="#bdc3c7"
            stroke="#7f8c8d"
            strokeWidth="2"
          />
          <rect x="193" y="54" width="42" height="10" rx="3" fill="#e74c3c" />
          <text
            x="214"
            y="94"
            fill="#2c3e50"
            fontSize="7"
            fontWeight="bold"
            textAnchor="middle"
          >
            宇治
          </text>
        </g>
      )}

      {/* DRINKS: Yuzu Soda */}
      {type === "drink-yuzu" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="170"
            rx="38"
            ry="9"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* Can */}
          <rect
            x="110"
            y="55"
            width="60"
            height="105"
            rx="14"
            fill="#f1c40f"
            stroke="#d4ac0d"
            strokeWidth="2"
          />
          <rect x="110" y="55" width="60" height="12" rx="6" fill="#f7dc6f" />
          {/* Sliced Yuzu graphic on can */}
          <circle cx="140" cy="110" r="18" fill="#ffffff" />
          <circle cx="140" cy="110" r="15" fill="#f39c12" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line
              key={deg}
              x1="140"
              y1="110"
              x2={140 + Math.cos((deg * Math.PI) / 180) * 14}
              y2={110 + Math.sin((deg * Math.PI) / 180) * 14}
              stroke="#ffffff"
              strokeWidth="2"
            />
          ))}
          <text
            x="140"
            y="85"
            fill="#7d6608"
            fontSize="8"
            fontWeight="bold"
            textAnchor="middle"
          >
            KOCHI YUZU
          </text>
        </g>
      )}

      {/* DRINKS: Sakura Rose Cooler */}
      {type === "drink-sakura" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="172"
            rx="35"
            ry="8"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* Iced glass cup */}
          <path
            d="M 112 55 L 122 162 C 122 168, 158 168, 158 162 L 168 55 Z"
            fill="#ffe4ec"
            stroke="#ff8fb7"
            strokeWidth="2.5"
          />
          {/* Pink cooler drink */}
          <path
            d="M 115 75 L 123 160 C 123 165, 157 165, 157 160 L 165 75 Z"
            fill="#ff7597"
            opacity="0.85"
          />
          {/* Ice Cubes */}
          <rect
            x="126"
            y="88"
            width="14"
            height="14"
            rx="3"
            fill="#ffffff"
            opacity="0.7"
            transform="rotate(15 133 95)"
          />
          <rect
            x="140"
            y="105"
            width="13"
            height="13"
            rx="3"
            fill="#ffffff"
            opacity="0.7"
            transform="rotate(-10 146 111)"
          />
          {/* Floating Sakura blossom */}
          <circle cx="138" cy="80" r="4" fill="#ffd3e3" />
          <circle cx="138" cy="80" r="1.5" fill="#d6568c" />
          {/* Striped Straw */}
          <line
            x1="148"
            y1="35"
            x2="136"
            y2="155"
            stroke="#ff477e"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1="148"
            y1="35"
            x2="136"
            y2="155"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="6 6"
          />
        </g>
      )}

      {/* MERCH: Ceramic Bowl */}
      {type === "merch-bowl" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="165"
            rx="72"
            ry="15"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* Stoneware Bowl Exterior */}
          <path
            d="M 68 95 C 68 158, 212 158, 212 95 Z"
            fill="#f9d2df"
            stroke="#e08da7"
            strokeWidth="3"
          />
          {/* Bowl Rim */}
          <ellipse
            cx="140"
            cy="95"
            rx="72"
            ry="24"
            fill="#3b1a2c"
            stroke="#e08da7"
            strokeWidth="2.5"
          />
          {/* Interior Deep Plum Glaze */}
          <ellipse cx="140" cy="98" rx="66" ry="20" fill="#2a1420" />

          {/* Chopstick Notch on rim */}
          <rect x="180" y="90" width="14" height="7" rx="3.5" fill="#f9d2df" />

          {/* Wooden Chopsticks resting across bowl */}
          <line
            x1="60"
            y1="84"
            x2="205"
            y2="98"
            stroke="#8b5a2b"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="60"
            y1="88"
            x2="205"
            y2="102"
            stroke="#68411c"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Ceramic Spoon (Renge) */}
          <path
            d="M 98 120 Q 112 105 130 96 Q 140 92 144 95 Q 132 108 116 122 Z"
            fill="#ffffff"
            stroke="#e08da7"
            strokeWidth="1.5"
          />
        </g>
      )}

      {/* MERCH: Hoodie */}
      {type === "merch-hoodie" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="175"
            rx="65"
            ry="12"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* Hoodie Body */}
          <path
            d="M 95 62 L 72 100 L 92 106 L 90 162 L 190 162 L 188 106 L 208 100 L 185 62 Z"
            fill="#f7b7cb"
            stroke="#d47392"
            strokeWidth="2.5"
          />
          {/* Thick Double Hood */}
          <path
            d="M 112 62 C 112 36, 168 36, 168 62 C 158 72, 122 72, 112 62 Z"
            fill="#e289a6"
            stroke="#d47392"
            strokeWidth="2"
          />
          {/* White Drawstrings */}
          <line
            x1="134"
            y1="65"
            x2="134"
            y2="92"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="146"
            y1="65"
            x2="146"
            y2="88"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Kangaroo Pouch Pocket */}
          <path
            d="M 110 130 L 120 120 L 160 120 L 170 130 L 170 156 L 110 156 Z"
            fill="#ee9db7"
          />
          {/* Chest Kanji Embroidery */}
          <text
            x="140"
            y="102"
            fill="#3b1a2c"
            fontSize="11"
            fontWeight="bold"
            textAnchor="middle"
          >
            砂っこ
          </text>
        </g>
      )}

      {/* MERCH: Chopsticks Set */}
      {type === "merch-chopsticks" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="168"
            rx="60"
            ry="10"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* 4 pairs angled */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(0, ${i * 12})`}>
              <line
                x1="85"
                y1="90"
                x2="200"
                y2="90"
                stroke="#794f26"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <line
                x1="85"
                y1="94"
                x2="200"
                y2="94"
                stroke="#5a3818"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Sakura blossom mark on top */}
              <circle cx="92" cy="92" r="3" fill="#ffb3cf" />
            </g>
          ))}
          {/* Dumpling Rest */}
          <ellipse
            cx="175"
            cy="142"
            rx="14"
            ry="8"
            fill="#fffafc"
            stroke="#f3c4d6"
            strokeWidth="1.5"
          />
          <line
            x1="170"
            y1="138"
            x2="170"
            y2="145"
            stroke="#f3c4d6"
            strokeWidth="1"
          />
          <line
            x1="175"
            y1="138"
            x2="175"
            y2="145"
            stroke="#f3c4d6"
            strokeWidth="1"
          />
        </g>
      )}

      {/* MERCH: Tote Bag */}
      {type === "merch-tote" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="172"
            rx="55"
            ry="10"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* Handle Straps */}
          <path
            d="M 115 80 C 115 42, 165 42, 165 80"
            fill="none"
            stroke="#d5c7b3"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Canvas Bag */}
          <rect
            x="96"
            y="80"
            width="88"
            height="88"
            rx="8"
            fill="#fdf9f2"
            stroke="#d5c7b3"
            strokeWidth="2.5"
          />
          {/* Sunakko Mascot on bag */}
          <circle cx="140" cy="120" r="18" fill="var(--pink)" />
          <path d="M 129 122 H 151 A 11 9 0 0 1 129 122 Z" fill="#fff" />
          <path
            d="M 134 122 Q 140 114 146 122"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Bottom Bag Fold */}
          <line
            x1="96"
            y1="156"
            x2="184"
            y2="156"
            stroke="#d5c7b3"
            strokeWidth="1.5"
          />
        </g>
      )}

      {/* SWEETS: Mochi Box */}
      {type === "sweets-mochi" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="168"
            rx="68"
            ry="12"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* Box Base */}
          <rect
            x="80"
            y="80"
            width="120"
            height="78"
            rx="10"
            fill="#fffafc"
            stroke="#f3c4d6"
            strokeWidth="2.5"
          />
          {/* 6 Round Pastel Mochi */}
          {[
            { cx: 102, cy: 100, fill: "#a8e6cf", powder: "#88d8b0" }, // Matcha
            { cx: 140, cy: 100, fill: "#ffaaa5", powder: "#ff8b94" }, // Strawberry
            { cx: 178, cy: 100, fill: "#dcedc1", powder: "#b8e994" }, // Yuzu
            { cx: 102, cy: 134, fill: "#d1c4e9", powder: "#b39ddb" }, // Taro
            { cx: 140, cy: 134, fill: "#ffeaa7", powder: "#fdcb6e" }, // Mango
            { cx: 178, cy: 134, fill: "#cfd8dc", powder: "#90a4ae" }, // Sesame
          ].map((m, i) => (
            <g key={i}>
              <ellipse
                cx={m.cx}
                cy={m.cy + 3}
                rx="14"
                ry="10"
                fill="#3b1a2c"
                opacity="0.1"
              />
              <ellipse cx={m.cx} cy={m.cy} rx="14" ry="11" fill={m.fill} />
              {/* Powder Dust sheen */}
              <ellipse
                cx={m.cx - 3}
                cy={m.cy - 3}
                rx="5"
                ry="3"
                fill="#ffffff"
                opacity="0.6"
              />
            </g>
          ))}
        </g>
      )}

      {/* SWEETS: Dango Skewers */}
      {type === "sweets-dango" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="168"
            rx="60"
            ry="10"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* 3 Skewers */}
          {[-24, 0, 24].map((offset, idx) => (
            <g key={idx} transform={`translate(${offset}, 0)`}>
              {/* Bamboo Skewer */}
              <line
                x1="140"
                y1="52"
                x2="140"
                y2="162"
                stroke="#d4a373"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Pink Dango (Sakura) */}
              <circle
                cx="140"
                cy="82"
                r="14"
                fill="#f7a7c8"
                stroke="#f08bb4"
                strokeWidth="1"
              />
              <ellipse
                cx="136"
                cy="78"
                rx="4"
                ry="2.5"
                fill="#fff"
                opacity="0.6"
              />
              {/* White Dango (Snow/Rice) */}
              <circle
                cx="140"
                cy="108"
                r="14"
                fill="#fff8f0"
                stroke="#f0e4d7"
                strokeWidth="1"
              />
              <ellipse
                cx="136"
                cy="104"
                rx="4"
                ry="2.5"
                fill="#fff"
                opacity="0.6"
              />
              {/* Green Dango (Mugwort) */}
              <circle
                cx="140"
                cy="134"
                r="14"
                fill="#a3d997"
                stroke="#8bc37e"
                strokeWidth="1"
              />
              <ellipse
                cx="136"
                cy="130"
                rx="4"
                ry="2.5"
                fill="#fff"
                opacity="0.6"
              />
            </g>
          ))}
        </g>
      )}

      {/* SWEETS: Dorayaki Stack */}
      {type === "sweets-dorayaki" && (
        <g filter={`url(#sh-${gid})`}>
          <ellipse
            cx="140"
            cy="168"
            rx="55"
            ry="11"
            fill="#3b1a2c"
            opacity="0.22"
          />
          {/* Stack of 2 Dorayaki cakes */}
          {[{ y: 130 }, { y: 104 }].map((cake, i) => (
            <g key={i}>
              {/* Bottom Golden Pancake */}
              <ellipse
                cx="140"
                cy={cake.y + 10}
                rx="45"
                ry="14"
                fill="#c4782b"
                stroke="#df9547"
                strokeWidth="1.5"
              />
              {/* Chunky Azuki Red Bean Center */}
              <ellipse
                cx="140"
                cy={cake.y + 5}
                rx="40"
                ry="10"
                fill="#4d1b28"
              />
              {/* Top Golden Pancake */}
              <ellipse
                cx="140"
                cy={cake.y}
                rx="45"
                ry="15"
                fill="#d98634"
                stroke="#f1a657"
                strokeWidth="2"
              />
              {/* Honey sheen on top */}
              <ellipse
                cx="134"
                cy={cake.y - 3}
                rx="18"
                ry="6"
                fill="#f5c278"
                opacity="0.6"
              />
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}

/* Falling Sakura Petals Canvas */
export function Petals({ count = 35 }) {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0,
      h = 0,
      raf,
      ps = [];
    const fit = () => {
      const r = cv.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = r.width;
      h = r.height;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    fit();
    const n = count;
    for (let i = 0; i < n; i++)
      ps.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 4 + Math.random() * 6,
        v: 0.3 + Math.random() * 0.6,
        s: Math.random() * 6,
        a: Math.random() * 6,
        sw: 0.4 + Math.random() * 0.8,
        c: ["#ffd3e3", "#ffb3cf", "#fff0f6", "#ff8fb7"][i % 4],
      });
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.y += p.v;
        p.s += 0.02;
        p.a += 0.02;
        p.x += Math.sin(p.s) * p.sw;
        if (p.y > h + 12) {
          p.y = -12;
          p.x = Math.random() * w;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.a);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r, p.r * 0.55, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      if (!still) raf = requestAnimationFrame(draw);
    };
    draw();
    const ro = new ResizeObserver(fit);
    ro.observe(cv);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [count]);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
