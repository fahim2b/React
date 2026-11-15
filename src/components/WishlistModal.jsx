import { Modal } from "./ui";
import { ProductVisual } from "./Art";
import { money } from "../data";
import { Heart, Trash2, Plus, ArrowRight, ShoppingBag } from "lucide-react";

export function WishlistModal({
  isOpen,
  onClose,
  wishlist = [],
  onRemoveFromWishlist,
  onAddToCart,
  onMoveAllToCart,
  onToast,
}) {
  const totalValue = wishlist.reduce((s, it) => s + it.price, 0);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Your Saved Wishlist" maxWidth="max-w-2xl">
      <div className="flex flex-col gap-4 text-xs">
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-12 px-4 gap-3">
            <div className="w-16 h-16 rounded-full bg-soft text-pink flex items-center justify-center">
              <Heart size={28} className="text-pink" />
            </div>
            <h3 className="display text-lg text-ink">Your wishlist is empty</h3>
            <p className="text-xs text-muted max-w-xs leading-relaxed">
              Tap the heart icon on any ramen bowl, DIY kit, or merchandise to save it for later!
            </p>
            <button
              onClick={onClose}
              className="mt-2 rounded-full bg-pink text-white font-bold px-5 py-2 text-xs hover:brightness-110 active:scale-95 transition shadow-sm"
            >
              Discover Menu
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between border-b border-line pb-3">
              <span className="text-muted">
                {wishlist.length} saved {wishlist.length === 1 ? "item" : "items"} • Total:{" "}
                <strong className="text-pink tabular-nums">{money(totalValue)}</strong>
              </span>
              <button
                onClick={onMoveAllToCart}
                className="bg-soft text-pink font-bold px-3 py-1.5 rounded-full hover:brightness-95 active:scale-95 transition flex items-center gap-1.5"
              >
                <ShoppingBag size={13} /> Move All to Cart
              </button>
            </div>

            <div className="flex flex-col gap-3 divide-y divide-line/40 max-h-[55vh] overflow-y-auto pr-1">
              {wishlist.map((it) => (
                <div key={it.id} className="pt-3 first:pt-0 flex items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-line">
                    <ProductVisual type={it.visualType} hue={it.hue} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-muted font-bold tracking-wider">{it.jpName}</span>
                    <h4 className="font-bold text-sm text-ink truncate">{it.name}</h4>
                    <span className="text-xs font-extrabold text-pink tabular-nums">
                      {money(it.price)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => onAddToCart(it)}
                      className="rounded-full bg-pink text-white font-bold px-3 py-1.5 text-xs hover:brightness-110 active:scale-95 transition flex items-center gap-1 shadow-sm"
                    >
                      <Plus size={13} /> Add
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(it.id)}
                      className="w-8 h-8 rounded-full border border-line text-muted hover:text-red-500 hover:border-red-300 flex items-center justify-center transition"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
