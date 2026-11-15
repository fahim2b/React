import { useState, useEffect } from "react";
import { Panel, Pill } from "./ui";
import { Logo, Can } from "./Art";
import { PRODUCTS, money } from "../data";
import { Sparkles, Gift, Clock, Check } from "lucide-react";

export function Promotions({ onAddToCart, onToast }) {
  const [stamps, setStamps] = useState(() => {
    try {
      return +localStorage.getItem("sunakko-stamps") || 4;
    } catch (e) {
      return 4;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("sunakko-stamps", stamps);
    } catch (e) {}
  }, [stamps]);

  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  const dow = now.getDay();
  const hr = now.getHours() + now.getMinutes() / 60;
  const lunchLive = dow >= 1 && dow <= 5 && hr >= 11 && hr < 15;

  const drinksList = PRODUCTS.filter((p) => p.category === "drinks");

  const toggleDrink = (d) => {
    setSelectedDrinks((prev) => {
      const exists = prev.find((x) => x.id === d.id);
      if (exists) return prev.filter((x) => x.id !== d.id);
      if (prev.length < 3) return [...prev, d];
      return prev;
    });
  };

  const drinksTotal = selectedDrinks.reduce((s, p) => s + p.price, 0);
  const cheapestFree = selectedDrinks.length === 3 ? Math.min(...selectedDrinks.map((p) => p.price)) : 0;
  const bundleFinalPrice = Math.max(0, drinksTotal - cheapestFree);

  const handleAddBundle = () => {
    if (selectedDrinks.length < 3) return;
    const bundleItem = {
      id: "bundle-" + selectedDrinks.map((d) => d.id).join("-"),
      name: `1+1=3 Drink Trio (${selectedDrinks.map((d) => d.name.split(" ")[0]).join(", ")})`,
      price: bundleFinalPrice,
      visualType: "drink-ramune",
      hue: 195,
      qty: 1,
    };
    onAddToCart(bundleItem);
    setSelectedDrinks([]);
    onToast("1+1=3 Drinks Trio added to cart! 🍵");
  };

  const handleAddLunchSet = () => {
    const lunchSet = {
      id: "bundle-biz-lunch",
      name: "Business Lunch Set (Curry Bowl + Miso + Yuzu Tonic)",
      price: 13.50,
      visualType: "rice-katsu",
      hue: 38,
      qty: 1,
    };
    onAddToCart(lunchSet);
    onToast("Business Lunch Set added to cart! 🍱");
  };

  const handleRedeemFreeBowl = () => {
    const freeBowl = {
      id: "free-loyalty-bowl",
      name: "Loyalty Reward: Free Tonkotsu Ramen",
      price: 0.00,
      visualType: "ramen-tonkotsu",
      hue: 14,
      qty: 1,
    };
    onAddToCart(freeBowl);
    setStamps(0);
    onToast("🎉 Congratulations! Free Tonkotsu Ramen added to your cart!");
  };

  return (
    <Panel id="promotions" className="flex flex-col gap-5">
      {/* Visual Header Banner */}
      <div
        className="relative rounded-3xl overflow-hidden h-36 sm:h-48 flex items-center justify-center p-6 text-white shadow-sm"
        style={{
          background: "linear-gradient(135deg, #0f4c5c, #1b7f8c 40%, #e0457b 100%)",
        }}
      >
        <svg
          viewBox="0 0 400 200"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          <g opacity=".4" fill="none" stroke="#ffd3e3" strokeWidth="2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <circle
                key={i}
                cx={40 + i * 70}
                cy={150 - (i % 3) * 40}
                r={18 + i * 3}
              />
            ))}
          </g>
          <path
            d="M60 60 Q170 10 280 70 Q320 90 350 60 Q320 110 270 110 Q150 150 60 60 Z"
            fill="#e0457b"
            opacity=".8"
          />
        </svg>

        <div className="relative z-10 text-center flex flex-col items-center gap-1">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 flex items-center gap-1">
            <Sparkles size={14} /> Sunakko Perks & Bundles
          </span>
          <h2 className="display text-3xl sm:text-5xl text-white drop-shadow-md">
            Special Deals
          </h2>
        </div>
      </div>

      {/* Grid of 2 Big Promotion Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Loyalty Stamp Card */}
        <article
          className="rounded-3xl p-5 sm:p-6 text-white flex flex-col justify-between gap-4 shadow-md min-w-0"
          style={{ background: "linear-gradient(160deg, #3b5a8a, #1d2e4f)" }}
        >
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1">
                <Gift size={13} /> Sunakko Stamp Club
              </span>
              <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full font-bold">
                {stamps}/8 Stamps
              </span>
            </div>
            <h3 className="display text-2xl text-white">Loyalty Rewards</h3>
            <p className="text-white/80 text-xs leading-relaxed">
              Every kitchen dish ordered earns a digital stamp. Collect eight stamps to unlock a <strong>Free Signature Tonkotsu Ramen bowl</strong> on the house!
            </p>
          </div>

          {/* Stamp circles */}
          <div
            className="grid grid-cols-8 gap-2 py-2"
            role="img"
            aria-label={`${stamps} of 8 stamps collected`}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={
                  "aspect-square rounded-full flex items-center justify-center text-xs font-extrabold transition-all duration-300 " +
                  (i < stamps
                    ? "bg-white text-pink shadow-md scale-105"
                    : "border-2 border-white/30 text-white/40")
                }
              >
                {i < stamps ? <Logo size={20} /> : i + 1}
              </div>
            ))}
          </div>

          {/* Stamp action buttons */}
          <div className="flex items-center justify-between gap-2 flex-wrap pt-2 border-t border-white/20">
            {stamps >= 8 ? (
              <button
                onClick={handleRedeemFreeBowl}
                className="rounded-full bg-amber-400 text-deep font-extrabold px-5 py-2 text-xs hover:brightness-110 active:scale-95 transition shadow-lg flex items-center gap-1.5"
              >
                <Sparkles size={14} /> Claim Free Bowl!
              </button>
            ) : (
              <button
                onClick={() => setStamps((s) => Math.min(8, s + 1))}
                className="rounded-full bg-white text-pink font-bold px-4 py-2 text-xs hover:scale-105 active:scale-95 transition"
              >
                + Add Demo Stamp
              </button>
            )}
            <span className="text-xs text-white/80 font-medium">
              {stamps >= 8
                ? "🎉 Your free reward is ready!"
                : `${8 - stamps} more stamps until free bowl`}
            </span>
          </div>
        </article>

        {/* Right Column: Business Lunch & 1+1=3 Drinks Trio */}
        <div className="flex flex-col gap-4">
          {/* Business Lunch Card */}
          <article className="rounded-3xl p-5 bg-soft/70 border border-line flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <h3 className="display text-pink text-lg sm:text-xl">
                Weekday Business Lunch
              </h3>
              <span
                className={
                  "text-[11px] font-bold rounded-full px-3 py-0.5 " +
                  (lunchLive
                    ? "bg-emerald-500 text-white"
                    : "bg-line text-muted")
                }
              >
                {lunchLive ? "⚡ Running Now!" : "Mon-Fri, 11:00 - 15:00"}
              </span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Golden Katsu Curry Bowl, organic white miso soup, and your choice of chilled Kochi Yuzu Tonic for only <strong>$13.50</strong> (valued at $19.50).
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm font-extrabold text-pink tabular-nums">$13.50 Set</span>
              <button
                onClick={handleAddLunchSet}
                className="rounded-full bg-pink text-white font-bold px-4 py-1.5 text-xs hover:brightness-110 active:scale-95 transition shadow-sm"
              >
                Add Lunch Set
              </button>
            </div>
          </article>

          {/* 1+1=3 Drinks Bundle Interactive Card */}
          <article className="rounded-3xl p-5 bg-soft/70 border border-line flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <h3 className="display text-pink text-lg sm:text-xl">
                1 + 1 = 3 Drinks Trio
              </h3>
              <span className="text-[11px] font-extrabold bg-pink text-white px-2.5 py-0.5 rounded-full">
                Buy 2 Get 1 Free
              </span>
            </div>
            <p className="text-xs text-muted">
              Select 3 craft beverages below. The cheapest drink is automatically 100% free!
            </p>

            {/* Drink Selection Pills */}
            <div className="flex gap-1.5 flex-wrap py-1">
              {drinksList.map((d) => {
                const isSelected = !!selectedDrinks.find((x) => x.id === d.id);
                return (
                  <button
                    key={d.id}
                    onClick={() => toggleDrink(d)}
                    className={
                      "rounded-full px-3 py-1 text-xs font-bold border transition flex items-center gap-1 " +
                      (isSelected
                        ? "bg-pink border-pink text-white scale-105 shadow-sm"
                        : "border-line bg-panel text-ink hover:border-pink")
                    }
                  >
                    {isSelected && <Check size={11} />}
                    <span>{d.name.split(" ")[0]}</span>
                    <span className="tabular-nums opacity-80">({money(d.price)})</span>
                  </button>
                );
              })}
            </div>

            {/* Bundle Status & Add CTA */}
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-line/60">
              <div className="text-xs">
                <span className="text-muted">{selectedDrinks.length}/3 selected: </span>
                <strong className="text-pink tabular-nums">{money(bundleFinalPrice)}</strong>
                {cheapestFree > 0 && (
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold ml-1">
                    (Saved {money(cheapestFree)})
                  </span>
                )}
              </div>

              <button
                disabled={selectedDrinks.length < 3}
                onClick={handleAddBundle}
                className="rounded-full bg-pink text-white font-bold px-4 py-1.5 text-xs hover:brightness-110 active:scale-95 transition disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
              >
                Add Drinks Trio
              </button>
            </div>
          </article>
        </div>
      </div>
    </Panel>
  );
}
