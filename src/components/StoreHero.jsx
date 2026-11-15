import { useState } from "react";
import { Petals } from "./Art";
import { Pill } from "./ui";
import { Sparkles, Truck, ShieldCheck, Flame, Copy, Check } from "lucide-react";

export function StoreHero({ onFilterQuick, onExploreMenu }) {
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  const handleCopyCode = (code) => {
    try {
      navigator.clipboard.writeText(code);
      setCopiedCoupon(true);
      setTimeout(() => setCopiedCoupon(false), 2000);
    } catch (e) {}
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Visual Hero Banner with Sakura Art & Canvas */}
      <div
        className="relative rounded-[2rem] overflow-hidden min-h-[340px] sm:min-h-[420px] flex items-end p-6 sm:p-10 text-white shadow-md"
        style={{
          background:
            "radial-gradient(130% 100% at 20% 15%, #ffb3cf 0%, #f06b9c 50%, #b8326e 100%)",
        }}
      >
        {/* Decorative Cherry Blossom Branches SVG */}
        <svg
          viewBox="0 0 900 450"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          <g stroke="#5c1d3c" strokeLinecap="round" fill="none" opacity=".5">
            <path
              d="M -30 380 Q 180 280 340 320 T 700 160 T 920 90"
              strokeWidth="16"
            />
            <path d="M 160 330 Q 210 240 300 230" strokeWidth="9" />
            <path d="M 580 180 Q 640 220 720 220" strokeWidth="8" />
          </g>
          {[
            [120, 290, 36],
            [250, 230, 30],
            [370, 310, 34],
            [520, 180, 40],
            [660, 140, 32],
            [780, 220, 36],
            [70, 180, 24],
            [440, 90, 26],
            [630, 290, 30],
          ].map(([x, y, r], i) => (
            <g key={i} fill="#ffd3e3" opacity=".95">
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
              <circle cx={x} cy={y} r={r * 0.22} fill="#d6568c" />
            </g>
          ))}
        </svg>

        {/* Falling Petals Particle Canvas */}
        <Petals count={42} />

        {/* Content Overlay */}
        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/30 flex items-center gap-1.5">
                <Sparkles size={13} className="text-amber-200" />
                Tokyo • Osaka • Global Delivery
              </span>
              <span className="text-white/80 text-xs font-semibold hidden sm:inline">
                Spring 2026 Collection
              </span>
            </div>

            <h1 className="display text-4xl sm:text-6xl md:text-7xl leading-none text-white drop-shadow-[0_4px_12px_rgba(92,29,60,0.5)]">
              Sunakko
            </h1>
            <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed max-w-lg mt-1 drop-shadow-sm">
              Artisan Asian street kitchen dishes, nationwide DIY ramen meal kits, Kyoto pantry craft, and limited sakura streetwear.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 mt-3">
              <button
                onClick={onExploreMenu}
                className="rounded-full bg-white text-pink font-extrabold px-6 py-2.5 text-sm hover:scale-105 active:scale-95 transition shadow-lg flex items-center gap-2"
              >
                <span>Shop Catalog</span>
                <Flame size={16} className="text-amber-500 fill-amber-500" />
              </button>
              <button
                onClick={() => onFilterQuick("pantry")}
                className="rounded-full bg-deep/40 backdrop-blur-md text-white font-bold px-5 py-2.5 text-sm hover:bg-deep/60 active:scale-95 transition border border-white/25"
              >
                DIY Ramen Kits 📦
              </button>
              <button
                onClick={() => onFilterQuick("merch")}
                className="rounded-full bg-deep/40 backdrop-blur-md text-white font-bold px-5 py-2.5 text-sm hover:bg-deep/60 active:scale-95 transition border border-white/25"
              >
                Ceramics & Merch 🌸
              </button>
            </div>
          </div>

          {/* Special Coupon Promo Badge */}
          <div className="bg-deep/75 backdrop-blur-md p-4 rounded-3xl border border-white/20 flex flex-col gap-2 max-w-xs text-white shrink-0 shadow-xl">
            <div className="flex items-center justify-between text-xs">
              <span className="font-extrabold text-amber-300 flex items-center gap-1">
                <Sparkles size={14} /> NEW CUSTOMER
              </span>
              <span className="text-white/60">Limited Time</span>
            </div>
            <div className="text-xs text-white/90">
              Get <strong>10% off</strong> your entire order with code:
            </div>
            <div className="flex items-center justify-between bg-black/40 rounded-xl px-3 py-1.5 border border-white/15">
              <code className="text-pink font-mono font-bold tracking-wider text-sm">
                SAKURA10
              </code>
              <button
                onClick={() => handleCopyCode("SAKURA10")}
                className="flex items-center gap-1 text-[11px] font-bold text-white/90 hover:text-white bg-pink px-2.5 py-1 rounded-lg active:scale-95 transition"
                title="Copy coupon code"
              >
                {copiedCoupon ? (
                  <>
                    <Check size={12} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={12} /> Copy
                  </>
                )}
              </button>
            </div>
            <div className="text-[10px] text-white/60">
              *Applies to food, drinks & merchandise at checkout.
            </div>
          </div>
        </div>
      </div>

      {/* Feature Value Props Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-panel rounded-2xl p-3.5 border border-line/60 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-soft text-pink flex items-center justify-center shrink-0">
            <Truck size={20} />
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm text-ink">Free Express Delivery</div>
            <div className="text-[11px] text-muted">On all orders over $45</div>
          </div>
        </div>

        <div className="bg-panel rounded-2xl p-3.5 border border-line/60 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-soft text-pink flex items-center justify-center shrink-0">
            <Flame size={20} />
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm text-ink">12-Hour Slow Simmer</div>
            <div className="text-[11px] text-muted">Authentic broth craftsmanship</div>
          </div>
        </div>

        <div className="bg-panel rounded-2xl p-3.5 border border-line/60 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-soft text-pink flex items-center justify-center shrink-0">
            <ShieldCheck size={20} />
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm text-ink">Kyoto & Uji Sourced</div>
            <div className="text-[11px] text-muted">100% direct authentic origin</div>
          </div>
        </div>

        <div className="bg-panel rounded-2xl p-3.5 border border-line/60 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-soft text-pink flex items-center justify-center shrink-0">
            <Sparkles size={20} />
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm text-ink">Fresh Daily Mochi</div>
            <div className="text-[11px] text-muted">Handmade every morning</div>
          </div>
        </div>
      </div>
    </div>
  );
}
