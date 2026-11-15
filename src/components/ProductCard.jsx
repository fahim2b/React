import { Heart, Plus, Eye, Check } from "lucide-react";
import { ProductVisual } from "./Art";
import { RatingStars, Badge } from "./ui";
import { money } from "../data";

export function ProductCard({
  product,
  onAddToCart,
  cartQty = 0,
  isWishlisted = false,
  onToggleWishlist,
  onQuickView,
  isListView = false,
}) {
  const {
    id,
    name,
    jpName,
    price,
    originalPrice,
    rating,
    reviewsCount,
    badge,
    dietary = [],
    shortDesc,
    visualType,
    hue,
    inStock,
  } = product;

  if (isListView) {
    return (
      <article className="rise bg-panel rounded-3xl p-4 border border-line/60 flex flex-col sm:flex-row items-stretch gap-4 hover:border-pink/60 transition group shadow-sm">
        {/* Visual box */}
        <div className="relative w-full sm:w-48 h-36 rounded-2xl overflow-hidden shrink-0 cursor-pointer" onClick={() => onQuickView(product)}>
          <ProductVisual type={visualType} hue={hue} />
          {badge && (
            <span className="absolute top-2 left-2 bg-panel/90 backdrop-blur-sm text-pink font-bold text-[10px] px-2 py-0.5 rounded-full border border-line">
              {badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between gap-2 min-w-0">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-muted uppercase tracking-wider">{jpName}</span>
              <RatingStars rating={rating} count={reviewsCount} size={12} />
            </div>
            <h3 
              onClick={() => onQuickView(product)}
              className="font-bold text-base text-ink hover:text-pink transition cursor-pointer"
            >
              {name}
            </h3>
            <p className="text-xs text-muted line-clamp-2 mt-1">{shortDesc}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-line/40">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold text-pink tabular-nums">
                {money(price)}
              </span>
              {originalPrice && (
                <span className="text-xs text-muted line-through tabular-nums">
                  {money(originalPrice)}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleWishlist(product)}
                className={
                  "w-9 h-9 rounded-full flex items-center justify-center transition border " +
                  (isWishlisted
                    ? "bg-soft border-pink text-pink"
                    : "bg-panel border-line text-muted hover:text-pink hover:border-pink")
                }
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart size={16} className={isWishlisted ? "fill-pink text-pink" : ""} />
              </button>

              <button
                onClick={() => onAddToCart(product)}
                className="rounded-full bg-pink text-white font-bold px-4 py-2 text-xs hover:brightness-110 active:scale-95 transition flex items-center gap-1.5 shadow-sm"
              >
                <Plus size={14} />
                <span>Add {cartQty > 0 ? `(${cartQty})` : ""}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="rise bg-panel rounded-[1.8rem] overflow-hidden border border-line/60 flex flex-col hover:border-pink/60 transition group shadow-sm hover:shadow-md">
      {/* Product Image Art Area */}
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
        <ProductVisual type={visualType} hue={hue} />
        
        {/* Gradient vignette hover overlay */}
        <div className="absolute inset-0 bg-deep/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="bg-panel text-pink font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition"
          >
            <Eye size={13} /> Quick View
          </button>
        </div>

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 bg-panel/95 backdrop-blur-sm text-pink font-extrabold text-[11px] px-2.5 py-1 rounded-full border border-line shadow-sm">
            {badge}
          </span>
        )}

        {/* Wishlist Floating Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={
            "absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition transform active:scale-90 " +
            (isWishlisted
              ? "bg-panel text-pink border border-pink"
              : "bg-panel/90 backdrop-blur-sm text-muted hover:text-pink hover:bg-panel")
          }
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={15} className={isWishlisted ? "fill-pink text-pink" : ""} />
        </button>

        {/* Low Stock Indicator */}
        {inStock <= 15 && (
          <span className="absolute bottom-2 left-2 bg-deep/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
            Only {inStock} left
          </span>
        )}
      </div>

      {/* Product Details Section */}
      <div className="p-4 sm:p-5 flex flex-col gap-2 flex-1 justify-between">
        <div>
          {/* Japanese Name & Ratings */}
          <div className="flex items-center justify-between gap-1 text-[11px]">
            <span className="font-bold text-muted tracking-wider truncate">{jpName}</span>
            <RatingStars rating={rating} count={reviewsCount} size={11} />
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-bold text-base text-ink mt-0.5 group-hover:text-pink transition cursor-pointer line-clamp-1"
          >
            {name}
          </h3>

          {/* Description snippet */}
          <p className="text-xs text-muted line-clamp-2 mt-1 leading-relaxed">
            {shortDesc}
          </p>

          {/* Dietary / Feature Tags */}
          {dietary.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2.5">
              {dietary.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold bg-soft text-pink px-2 py-0.5 rounded-full border border-line/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Bar: Price & Add to Cart */}
        <div className="pt-3 border-t border-line/50 flex items-center justify-between gap-2 mt-2">
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold text-pink tabular-nums leading-none">
              {money(price)}
            </span>
            {originalPrice && (
              <span className="text-[11px] text-muted line-through tabular-nums mt-0.5">
                {money(originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className={
              "rounded-full font-bold px-3.5 py-2 text-xs flex items-center gap-1.5 transition active:scale-95 shadow-sm " +
              (cartQty > 0
                ? "bg-deep text-white hover:brightness-125"
                : "bg-pink text-white hover:brightness-110")
            }
            aria-label={`Add ${name} to cart`}
          >
            {cartQty > 0 ? (
              <>
                <Check size={14} className="text-pink" />
                <span>In Cart ({cartQty})</span>
              </>
            ) : (
              <>
                <Plus size={14} />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
