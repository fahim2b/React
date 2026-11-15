import { useState, useMemo } from "react";
import { ProductCard } from "./ProductCard";
import { CATEGORIES, DIETARY_TAGS } from "../data";
import { Logo } from "./Art";
import { 
  SlidersHorizontal, 
  Grid, 
  List, 
  RotateCcw, 
  Search,
  Sparkles,
  Flame
} from "lucide-react";

export function Catalog({
  products = [],
  activeCategory = "all",
  onSelectCategory,
  searchTerm = "",
  onSearchChange,
  cart = {},
  onAddToCart,
  wishlist = [],
  onToggleWishlist,
  onQuickView,
}) {
  const [selectedTag, setSelectedTag] = useState("all");
  const [maxPrice, setMaxPrice] = useState(60);
  const [sortBy, setSortBy] = useState("featured");
  const [isListView, setIsListView] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Compute filtered & sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (activeCategory !== "all" && p.category !== activeCategory) {
          return false;
        }
        // Dietary / Tag filter
        if (selectedTag !== "all") {
          const matchTag = p.dietary?.includes(selectedTag) || p.badge === selectedTag;
          if (!matchTag) return false;
        }
        // Price filter
        if (p.price > maxPrice) {
          return false;
        }
        // Search term filter
        if (searchTerm.trim()) {
          const term = searchTerm.toLowerCase();
          const matchName = p.name.toLowerCase().includes(term);
          const matchJp = p.jpName.toLowerCase().includes(term);
          const matchDesc = p.shortDesc.toLowerCase().includes(term);
          const matchCat = p.category.toLowerCase().includes(term);
          if (!matchName && !matchJp && !matchDesc && !matchCat) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "reviews") return b.reviewsCount - a.reviewsCount;
        return 0; // featured default
      });
  }, [products, activeCategory, selectedTag, maxPrice, searchTerm, sortBy]);

  const handleResetFilters = () => {
    onSelectCategory("all");
    setSelectedTag("all");
    setMaxPrice(60);
    setSortBy("featured");
    onSearchChange("");
  };

  const hasActiveFilters =
    activeCategory !== "all" ||
    selectedTag !== "all" ||
    maxPrice < 60 ||
    searchTerm.trim() !== "";

  return (
    <section id="menu" className="bg-panel rounded-[2rem] p-4 sm:p-6 border border-line/60 shadow-sm flex flex-col gap-5">
      {/* Catalog Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-line pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="display text-pink text-3xl sm:text-4xl">
              Store Catalog
            </h2>
            <span className="text-xs font-extrabold bg-soft text-pink px-2.5 py-0.5 rounded-full border border-line">
              {filteredProducts.length} items
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted mt-1">
            Choose from freshly simmered ramen, Osaka street snacks, DIY pantry kits & merchandise.
          </p>
        </div>

        {/* View & Filter Toggles */}
        <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
          {/* Filter Bar Toggle button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={
              "px-3.5 py-2 rounded-full border-2 text-xs font-bold flex items-center gap-1.5 transition " +
              (showFilters || hasActiveFilters
                ? "bg-soft border-pink text-pink"
                : "border-line text-ink hover:border-pink")
            }
          >
            <SlidersHorizontal size={14} />
            <span>Filters {hasActiveFilters ? "• Active" : ""}</span>
          </button>

          {/* Sort By Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-panel border-2 border-line text-ink rounded-full px-3.5 py-2 text-xs font-bold outline-none focus:border-pink cursor-pointer"
          >
            <option value="featured">Sort: Featured ✨</option>
            <option value="price-low">Price: Low to High 💵</option>
            <option value="price-high">Price: High to Low 💎</option>
            <option value="rating">Highest Rated ⭐</option>
            <option value="reviews">Most Popular 🍜</option>
          </select>

          {/* Grid vs List view toggle */}
          <div className="flex items-center border-2 border-line rounded-full overflow-hidden bg-panel">
            <button
              onClick={() => setIsListView(false)}
              className={
                "p-2 transition " +
                (!isListView ? "bg-pink text-white" : "text-muted hover:text-ink")
              }
              aria-label="Grid layout view"
            >
              <Grid size={15} />
            </button>
            <button
              onClick={() => setIsListView(true)}
              className={
                "p-2 transition " +
                (isListView ? "bg-pink text-white" : "text-muted hover:text-ink")
              }
              aria-label="List layout view"
            >
              <List size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Filter Drawer Panel */}
      {showFilters && (
        <div className="bg-soft/50 rounded-2xl p-4 border border-line flex flex-col gap-4 rise">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs uppercase tracking-wider text-pink flex items-center gap-1.5">
              <SlidersHorizontal size={13} /> Refine Your Selection
            </span>
            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-muted hover:text-pink flex items-center gap-1"
              >
                <RotateCcw size={12} /> Reset all filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* Tag / Dietary Options */}
            <div className="flex flex-col gap-2">
              <span className="font-bold text-ink">Preferences & Tags</span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedTag("all")}
                  className={
                    "px-3 py-1 rounded-full font-bold transition " +
                    (selectedTag === "all"
                      ? "bg-pink text-white"
                      : "bg-panel border border-line text-ink hover:bg-soft")
                  }
                >
                  All Tags
                </button>
                {DIETARY_TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? "all" : tag)}
                    className={
                      "px-3 py-1 rounded-full font-bold transition " +
                      (selectedTag === tag
                        ? "bg-pink text-white"
                        : "bg-panel border border-line text-ink hover:bg-soft")
                    }
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-ink">Max Price</span>
                <span className="font-extrabold text-pink tabular-nums">
                  Up to ${maxPrice}.00
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="1"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="accent-pink cursor-pointer w-full mt-2"
              />
              <div className="flex justify-between text-[10px] text-muted">
                <span>$5.00</span>
                <span>$30.00</span>
                <span>$60.00+</span>
              </div>
            </div>

            {/* Quick summary of active criteria */}
            <div className="flex flex-col justify-between bg-panel rounded-xl p-3 border border-line/60">
              <div className="text-[11px] text-muted">
                Showing items in <strong className="text-ink">{activeCategory.toUpperCase()}</strong> under <strong className="text-pink">${maxPrice}</strong>
                {selectedTag !== "all" && <> with tag <strong className="text-ink">{selectedTag}</strong></>}
              </div>
              <div className="text-xs font-bold text-pink mt-2">
                {filteredProducts.length} items found
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid or List View */}
      {filteredProducts.length > 0 ? (
        <div
          className={
            isListView
              ? "flex flex-col gap-3"
              : "grid grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          }
        >
          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              cartQty={cart[p.id]?.qty || 0}
              onAddToCart={onAddToCart}
              isWishlisted={wishlist.some((w) => w.id === p.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
              isListView={isListView}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-soft/40 rounded-3xl border border-dashed border-line">
          <div className="w-16 h-16 rounded-full bg-soft text-pink flex items-center justify-center text-2xl mb-3">
            🔍
          </div>
          <h3 className="display text-xl text-ink">No matching products found</h3>
          <p className="text-xs sm:text-sm text-muted max-w-md mt-1 mb-5">
            We couldn't find any items matching your search or filters. Try clearing your search keywords or resetting filter criteria.
          </p>
          <button
            onClick={handleResetFilters}
            className="rounded-full bg-pink text-white font-bold px-6 py-2.5 text-xs hover:brightness-110 active:scale-95 transition shadow-sm flex items-center gap-2"
          >
            <RotateCcw size={14} /> Reset Filters
          </button>
        </div>
      )}

      {/* Decorative Wave Banner with Japanese Hospitality Quote */}
      <div className="wave rounded-3xl mt-2 py-8 px-6 flex flex-col items-center text-center gap-3 border border-line/40">
        <Logo size={46} />
        <p className="display text-pink text-sm sm:text-base max-w-2xl leading-relaxed">
          "Ichigo Ichie" (一期一会) — Treasure every unrepeatable encounter. Each bowl of broth, each hand-pounded mochi, and every cup of tea is crafted with wholehearted warmth.
        </p>
        <span className="text-[11px] font-bold text-muted uppercase tracking-widest">
          Sunakko Street Kitchen & Pantry Tokyo
        </span>
      </div>
    </section>
  );
}
