import { useState } from "react";
import { Modal, RatingStars, Pill, Badge } from "./ui";
import { ProductVisual } from "./Art";
import { money } from "../data";
import { Heart, Plus, Minus, Check, Share2, Clock, Sparkles, MessageSquare } from "lucide-react";

export function ProductModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
  cartQty = 0,
  isWishlisted = false,
  onToggleWishlist,
  onToast,
}) {
  if (!product) return null;

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("overview"); // 'overview', 'specs', 'reviews'
  const [reviewsList, setReviewsList] = useState(product.reviews || []);
  const [newAuthor, setNewAuthor] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);

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
    longDesc,
    specs = {},
    visualType,
    hue,
    inStock,
    prepTime,
  } = product;

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      onAddToCart(product, false);
    }
    onToast(`Added ${qty}x ${name} to your cart! 🍜`);
    onClose();
  };

  const handleShare = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      onToast("Product link copied to clipboard! 📋");
    } catch (e) {
      onToast("Link copied! 📋");
    }
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;
    const rev = {
      author: newAuthor.trim(),
      rating: Number(newRating),
      date: "Just now",
      comment: newComment.trim(),
    };
    setReviewsList([rev, ...reviewsList]);
    setNewAuthor("");
    setNewComment("");
    setShowReviewForm(false);
    onToast("Thank you! Your review was posted ⭐");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={name} maxWidth="max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Product Visual Presentation */}
        <div className="flex flex-col gap-3">
          <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 border border-line/60 shadow-inner">
            <ProductVisual type={visualType} hue={hue} />
            {badge && (
              <span className="absolute top-4 left-4 bg-panel/95 backdrop-blur-md text-pink font-extrabold text-xs px-3 py-1 rounded-full border border-line shadow-sm">
                {badge}
              </span>
            )}
            <div className="absolute bottom-3 right-3 bg-panel/90 backdrop-blur-sm text-ink text-xs font-bold px-3 py-1 rounded-full border border-line flex items-center gap-1.5">
              <Clock size={13} className="text-pink" />
              <span>{prepTime || "Quick prep"}</span>
            </div>
          </div>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center gap-1.5">
            {dietary.map((tag) => (
              <Badge key={tag} variant="pink">
                {tag}
              </Badge>
            ))}
            <span className="text-xs text-muted ml-auto font-medium">
              In Stock: <strong className="text-ink">{inStock} units</strong>
            </span>
          </div>

          {/* Tab buttons */}
          <div className="flex gap-1.5 border-b border-line pt-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={
                "pb-2 text-xs font-bold transition border-b-2 " +
                (activeTab === "overview"
                  ? "border-pink text-pink"
                  : "border-transparent text-muted hover:text-ink")
              }
            >
              Story & Details
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={
                "pb-2 text-xs font-bold transition border-b-2 " +
                (activeTab === "specs"
                  ? "border-pink text-pink"
                  : "border-transparent text-muted hover:text-ink")
              }
            >
              Specifications & Allergens
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={
                "pb-2 text-xs font-bold transition border-b-2 " +
                (activeTab === "reviews"
                  ? "border-pink text-pink"
                  : "border-transparent text-muted hover:text-ink")
              }
            >
              Reviews ({reviewsList.length})
            </button>
          </div>
        </div>

        {/* Right: Product Details & Purchase Actions */}
        <div className="flex flex-col justify-between gap-5 min-w-0">
          <div className="flex flex-col gap-3">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-pink tracking-widest uppercase">
                  {jpName}
                </span>
                <button
                  onClick={handleShare}
                  className="text-xs text-muted hover:text-pink flex items-center gap-1 p-1 rounded-lg"
                  title="Share product link"
                >
                  <Share2 size={14} /> Share
                </button>
              </div>
              <h2 className="display text-2xl font-bold text-ink mt-0.5">
                {name}
              </h2>
              <div className="flex items-center gap-3 mt-1.5">
                <RatingStars rating={rating} count={reviewsList.length || reviewsCount} size={14} />
                <span className="text-xs text-muted">• Handcrafted Batch</span>
              </div>
            </div>

            {/* Price display */}
            <div className="flex items-baseline gap-3 py-1">
              <span className="text-3xl font-extrabold text-pink tabular-nums">
                {money(price)}
              </span>
              {originalPrice && (
                <span className="text-sm text-muted line-through tabular-nums">
                  {money(originalPrice)}
                </span>
              )}
              {originalPrice && (
                <span className="text-xs font-bold bg-pink text-white px-2 py-0.5 rounded-full">
                  Save {money(originalPrice - price)}
                </span>
              )}
            </div>

            {/* TAB CONTENTS */}
            {activeTab === "overview" && (
              <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted">
                <p className="text-ink font-medium">{shortDesc}</p>
                <p className="text-xs leading-relaxed">{longDesc}</p>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="flex flex-col gap-2 bg-soft/50 rounded-2xl p-3.5 border border-line text-xs">
                {Object.entries(specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between py-1 border-b border-line/60 last:border-0">
                    <span className="font-bold text-ink">{key}:</span>
                    <span className="text-muted text-right max-w-[60%]">{val}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="flex flex-col gap-3 max-h-56 overflow-y-auto pr-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-ink">Customer Feedback</span>
                  <button
                    onClick={() => setShowReviewForm(!showReviewForm)}
                    className="text-xs font-bold text-pink hover:underline flex items-center gap-1"
                  >
                    <MessageSquare size={13} /> {showReviewForm ? "Cancel" : "Write Review"}
                  </button>
                </div>

                {showReviewForm && (
                  <form onSubmit={handleAddReview} className="bg-soft p-3 rounded-2xl flex flex-col gap-2 text-xs">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        className="flex-1 bg-panel border border-line rounded-lg px-2.5 py-1 text-ink outline-none focus:border-pink"
                        required
                      />
                      <select
                        value={newRating}
                        onChange={(e) => setNewRating(e.target.value)}
                        className="bg-panel border border-line rounded-lg px-2 py-1 text-ink outline-none"
                      >
                        <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                        <option value="4">⭐⭐⭐⭐ (4/5)</option>
                        <option value="3">⭐⭐⭐ (3/5)</option>
                      </select>
                    </div>
                    <textarea
                      placeholder="Share your thoughts about this dish or item..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      rows={2}
                      className="w-full bg-panel border border-line rounded-lg p-2 text-ink outline-none focus:border-pink"
                      required
                    />
                    <button
                      type="submit"
                      className="self-end bg-pink text-white font-bold px-3 py-1 rounded-full hover:brightness-110 text-xs"
                    >
                      Post Review
                    </button>
                  </form>
                )}

                {reviewsList.map((rev, idx) => (
                  <div key={idx} className="bg-soft/40 p-2.5 rounded-xl border border-line/50 text-xs flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-ink">{rev.author}</span>
                      <span className="text-[10px] text-muted">{rev.date}</span>
                    </div>
                    <div className="text-amber-500 text-[10px]">{"★".repeat(rev.rating)}</div>
                    <p className="text-muted leading-relaxed">{rev.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Actions: Stepper + Add to Cart + Wishlist */}
          <div className="flex flex-col gap-3 pt-3 border-t border-line">
            <div className="flex items-center gap-3">
              {/* Quantity Stepper */}
              <div className="flex items-center border-2 border-line rounded-full bg-panel px-2 py-1">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-7 h-7 rounded-full bg-soft text-pink font-bold flex items-center justify-center hover:scale-105 active:scale-95 transition"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center text-sm font-extrabold text-ink tabular-nums">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-7 h-7 rounded-full bg-pink text-white font-bold flex items-center justify-center hover:scale-105 active:scale-95 transition"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => onToggleWishlist(product)}
                className={
                  "px-4 py-2 rounded-full border-2 text-xs font-bold flex items-center gap-1.5 transition " +
                  (isWishlisted
                    ? "bg-soft border-pink text-pink"
                    : "border-line text-muted hover:border-pink hover:text-pink")
                }
              >
                <Heart size={15} className={isWishlisted ? "fill-pink text-pink" : ""} />
                <span>{isWishlisted ? "Saved" : "Save"}</span>
              </button>
            </div>

            {/* Big Add to Cart CTA */}
            <button
              onClick={handleAdd}
              className="w-full rounded-full bg-pink text-white font-extrabold py-3 text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition shadow-md"
            >
              <Plus size={18} />
              <span>Add {qty} to Order • {money(price * qty)}</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
