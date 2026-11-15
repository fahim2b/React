import { useState, useEffect } from "react";
import { Logo } from "./Art";
import { 
  ShoppingBag, 
  Heart, 
  Moon, 
  Sun, 
  Clock, 
  Search, 
  Sparkles,
  Receipt
} from "lucide-react";

export function Navbar({ 
  cartCount, 
  cartTotal, 
  onOpenCart, 
  wishlistCount, 
  onOpenWishlist, 
  ordersCount, 
  onOpenOrders,
  searchTerm,
  onSearchChange,
  activeCategory,
  onSelectCategory
}) {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("sunakko-theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (dark) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("sunakko-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("sunakko-theme", "light");
      }
    } catch (e) {}
  }, [dark]);

  const navCategories = [
    { id: "all", label: "All Items" },
    { id: "meals", label: "🍜 Fresh Meals" },
    { id: "pantry", label: "🥢 DIY Kits" },
    { id: "drinks", label: "🍵 Craft Drinks" },
    { id: "merch", label: "🌸 Apparel & Merch" },
    { id: "sweets", label: "🍡 Sweets" },
  ];

  return (
    <header className="flex flex-col gap-3">
      {/* Top Announcement Bar */}
      <div className="bg-deep text-white text-xs py-2 px-4 rounded-2xl flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center bg-pink text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full">
            OFFER
          </span>
          <span className="font-medium">
            🌸 Spring Matsuri Sale: Use code <strong className="text-pink">SAKURA10</strong> for 10% off! Free delivery on orders over $45.
          </span>
        </div>
        <div className="flex items-center gap-4 text-white/80 text-[11px] ml-auto">
          <span className="flex items-center gap-1">
            <Clock size={12} className="text-pink" /> 11:00 AM - 11:00 PM Daily
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Tokyo • Osaka • NYC Kitchen</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-panel rounded-3xl p-3.5 sm:p-4 border border-line/60 flex items-center justify-between gap-3 flex-wrap shadow-sm">
        {/* Brand Logo & Name */}
        <a 
          href="#home" 
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Sunakko Home"
        >
          <div className="transition transform group-hover:scale-105 group-hover:rotate-6">
            <Logo size={42} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="display text-2xl font-bold text-pink tracking-wide leading-none">
                sunakko
              </span>
              <span className="text-[10px] font-bold bg-soft text-pink px-1.5 py-0.5 rounded-md border border-line">
                砂っこ
              </span>
            </div>
            <span className="text-[11px] text-muted font-medium tracking-wider uppercase">
              Street Kitchen & Market
            </span>
          </div>
        </a>

        {/* Global Search Bar */}
        <div className="relative flex-1 max-w-xs min-w-[200px] order-last sm:order-none w-full sm:w-auto">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search ramen, pantry, merch..."
            className="w-full bg-soft/60 focus:bg-panel text-ink text-sm rounded-full pl-10 pr-4 py-2 border border-line focus:border-pink outline-none transition"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-pink"
            >
              Clear
            </button>
          )}
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Dark / Light Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-10 h-10 rounded-full bg-soft text-ink flex items-center justify-center hover:scale-105 active:scale-95 transition border border-line/60"
            aria-label={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {dark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-pink" />}
          </button>

          {/* Past Orders Button */}
          <button
            onClick={onOpenOrders}
            className="h-10 px-3 rounded-full bg-soft text-ink hover:text-pink flex items-center gap-1.5 text-xs font-bold border border-line/60 hover:scale-105 active:scale-95 transition"
            title="View Order History & Receipts"
          >
            <Receipt size={16} className="text-pink" />
            <span className="hidden md:inline">Orders</span>
            {ordersCount > 0 && (
              <span className="bg-pink text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
                {ordersCount}
              </span>
            )}
          </button>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="relative w-10 h-10 rounded-full bg-soft text-ink hover:text-pink flex items-center justify-center hover:scale-105 active:scale-95 transition border border-line/60"
            aria-label={`Wishlist (${wishlistCount} items)`}
            title="Saved Wishlist"
          >
            <Heart size={18} className={wishlistCount > 0 ? "fill-pink text-pink" : "text-pink"} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="h-10 px-4 rounded-full bg-pink text-white font-bold text-sm flex items-center gap-2.5 hover:brightness-110 active:scale-95 transition shadow-sm"
            aria-label={`Open cart with ${cartCount} items, total ${cartTotal}`}
          >
            <div className="relative">
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-deep text-white text-[10px] font-extrabold rounded-full min-w-[1.2rem] h-[1.2rem] px-1 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden min-[480px]:inline tabular-nums font-extrabold">
              {cartTotal}
            </span>
          </button>
        </div>
      </div>

      {/* Category Pills Bar */}
      <nav
        aria-label="Product categories"
        className="flex gap-2 overflow-x-auto no-scrollbar py-1"
      >
        {navCategories.map((c) => {
          const isActive = activeCategory === c.id;
          return (
            <button
              key={c.id}
              onClick={() => onSelectCategory(c.id)}
              className={
                "shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition flex items-center gap-1.5 " +
                (isActive
                  ? "bg-pink text-white shadow-sm scale-[1.02]"
                  : "bg-panel text-ink hover:bg-soft border border-line/60")
              }
            >
              {c.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
