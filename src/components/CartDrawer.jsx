import { useState } from "react";
import { money, COUPONS } from "../data";
import { ProductVisual } from "./Art";
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Tag,
  ArrowRight,
  Sparkles,
  Truck,
  Check,
} from "lucide-react";

export function CartDrawer({
  isOpen,
  onClose,
  cart = {},
  setQty,
  removeItem,
  clearCart,
  appliedCoupon,
  setAppliedCoupon,
  orderNote,
  setOrderNote,
  onProceedToCheckout,
  onToast,
}) {
  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState("");

  const items = Object.values(cart);
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);

  // Free shipping calculation ($45 threshold)
  const FREE_SHIPPING_THRESHOLD = 45.0;
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(
    100,
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
  );

  // Discount calculation
  let discountAmount = 0;
  let isFreeShippingCoupon = false;

  if (appliedCoupon) {
    if (appliedCoupon.type === "percent") {
      discountAmount = (subtotal * appliedCoupon.value) / 100;
    } else if (appliedCoupon.type === "fixed") {
      discountAmount = Math.min(subtotal, appliedCoupon.value);
    } else if (appliedCoupon.type === "shipping") {
      isFreeShippingCoupon = true;
    }
  }

  // Shipping cost
  const isShippingFree =
    subtotal >= FREE_SHIPPING_THRESHOLD || isFreeShippingCoupon;
  const shippingFee = items.length === 0 ? 0 : isShippingFree ? 0 : 4.99;

  // Tax & Total
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const tax = items.length === 0 ? 0 : taxableAmount * 0.08;
  const finalTotal = Math.max(0, taxableAmount + shippingFee + tax);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError("");
    const code = couponInput.trim().toUpperCase();
    if (!code) return;

    const matched = COUPONS[code];
    if (!matched) {
      setCouponError("Invalid promo code. Try SAKURA10!");
      return;
    }

    if (matched.minSpend && subtotal < matched.minSpend) {
      setCouponError(
        `This code requires minimum spend of ${money(matched.minSpend)}.`,
      );
      return;
    }

    setAppliedCoupon(matched);
    setCouponInput("");
    onToast(`Promo code ${code} applied! 🎉`);
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    onToast("Coupon removed.");
  };

  return (
    <div
      className={
        "fixed inset-0 z-50 transition-all duration-300 " +
        (isOpen
          ? "visible opacity-100"
          : "invisible opacity-0 pointer-events-none")
      }
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Shopping Cart Drawer"
    >
      {/* Dark backdrop blur */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-deep/50 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <aside
        className={
          "absolute right-0 top-0 h-full w-[min(94vw,440px)] bg-panel text-ink shadow-2xl flex flex-col transition-transform duration-300 border-l border-line/60 " +
          (isOpen ? "translate-x-0" : "translate-x-full")
        }
        style={{
          paddingTop: "max(12px, env(safe-area-inset-top, 0px))",
          paddingBottom: "max(12px, env(safe-area-inset-bottom, 0px))",
          paddingRight: "max(12px, env(safe-area-inset-right, 0px))",
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-line">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-pink" />
            <h2 className="display text-xl text-pink">Your Cart</h2>
            <span className="text-xs font-extrabold bg-soft text-pink px-2 py-0.5 rounded-full border border-line">
              {items.reduce((sum, item) => sum + item.qty, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-soft text-pink flex items-center justify-center hover:scale-105 active:scale-95 transition"
            aria-label="Close cart"
          >
            <X size={16} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="px-5 py-3 bg-soft/40 border-b border-line/60 flex flex-col gap-1.5 text-xs">
          <div className="flex items-center justify-between font-bold">
            <span className="flex items-center gap-1.5 text-ink">
              <Truck size={14} className="text-pink" />
              {amountToFreeShipping === 0 ? (
                <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">
                  🎉 Free Delivery Unlocked!
                </span>
              ) : (
                <span>
                  Add{" "}
                  <strong className="text-pink tabular-nums">
                    {money(amountToFreeShipping)}
                  </strong>{" "}
                  more for Free Shipping
                </span>
              )}
            </span>
            <span className="text-muted tabular-nums font-semibold">
              {Math.round(freeShippingProgress)}%
            </span>
          </div>
          <div className="w-full bg-line/80 h-2 rounded-full overflow-hidden">
            <div
              className="bg-pink h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Item Lines List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 flex flex-col gap-3 divide-y divide-line/40">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-16 px-4 gap-3">
              <div className="w-16 h-16 rounded-full bg-soft text-pink flex items-center justify-center text-2xl">
                🍜
              </div>
              <h3 className="display text-lg text-ink">Your cart is empty</h3>
              <p className="text-xs text-muted max-w-xs leading-relaxed">
                Explore our piping hot ramen bowls, Kyoto artisan sauces, and
                fresh mochi treats to fill your tray!
              </p>
              <button
                onClick={onClose}
                className="mt-2 rounded-full bg-pink text-white font-bold px-5 py-2 text-xs hover:brightness-110 active:scale-95 transition"
              >
                Browse Menu & Market
              </button>
            </div>
          ) : (
            items.map((line) => (
              <div
                key={line.id}
                className="pt-3 first:pt-0 flex items-center gap-3"
              >
                {/* Visual Thumbnail */}
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-line/60">
                  <ProductVisual type={line.visualType} hue={line.hue} />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-ink truncate">
                    {line.name}
                  </h4>
                  <div className="text-xs text-muted tabular-nums mt-0.5">
                    {money(line.price)} each
                  </div>
                  <div className="text-xs font-bold text-pink tabular-nums mt-0.5">
                    Subtotal: {money(line.price * line.qty)}
                  </div>
                </div>

                {/* Stepper + Remove */}
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <div className="flex items-center border border-line rounded-full bg-panel p-0.5">
                    <button
                      onClick={() => setQty(line.id, line.qty - 1)}
                      className="w-6 h-6 rounded-full bg-soft text-pink flex items-center justify-center active:scale-90"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-6 text-center text-xs font-bold tabular-nums text-ink">
                      {line.qty}
                    </span>
                    <button
                      onClick={() => setQty(line.id, line.qty + 1)}
                      className="w-6 h-6 rounded-full bg-pink text-white flex items-center justify-center active:scale-90"
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(line.id)}
                    className="text-muted hover:text-red-500 p-1 text-[11px] flex items-center gap-0.5 transition"
                    title="Remove item"
                  >
                    <Trash2 size={12} />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            ))
          )}

          {/* Order Note Area */}
          {items.length > 0 && (
            <div className="pt-3">
              <label
                htmlFor="order-notes"
                className="text-xs font-bold text-ink block mb-1"
              >
                Special Kitchen Note / Gift Instructions:
              </label>
              <textarea
                id="order-notes"
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                placeholder="E.g., No green onions, extra spicy rayu on the side, ring doorbell..."
                rows={2}
                className="w-full text-xs p-2.5 rounded-xl border border-line bg-soft/50 text-ink focus:border-pink outline-none"
              />
            </div>
          )}
        </div>

        {/* Bottom Checkout & Summary Footer */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-line bg-panel flex flex-col gap-3">
            {/* Promo Code Input */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-soft p-2.5 rounded-xl border border-line text-xs">
                  <div className="flex items-center gap-2">
                    <Tag size={14} className="text-pink" />
                    <div>
                      <span className="font-extrabold text-pink font-mono">
                        {appliedCoupon.code}
                      </span>
                      <span className="text-[11px] text-muted ml-2">
                        ({appliedCoupon.desc})
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleRemoveCoupon}
                    className="text-xs font-bold text-muted hover:text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                    />
                    <input
                      type="text"
                      placeholder="Promo code (e.g. SAKURA10)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="w-full text-xs pl-8 pr-3 py-2 rounded-full border border-line bg-soft/40 text-ink focus:border-pink outline-none uppercase font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-full bg-soft text-pink font-bold px-4 py-2 text-xs hover:brightness-95 active:scale-95 transition"
                  >
                    Apply
                  </button>
                </form>
              )}
              {couponError && (
                <div className="text-[11px] text-red-500 mt-1 font-semibold">
                  {couponError}
                </div>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="flex flex-col gap-1.5 text-xs pt-1">
              <div className="flex justify-between text-muted">
                <span>Subtotal</span>
                <span className="tabular-nums font-bold text-ink">
                  {money(subtotal)}
                </span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-pink font-bold">
                  <span>Discount ({appliedCoupon.code})</span>
                  <span className="tabular-nums">-{money(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-muted">
                <span>Estimated Shipping</span>
                <span className="tabular-nums font-bold">
                  {isShippingFree ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">
                      FREE
                    </span>
                  ) : (
                    money(shippingFee)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-muted">
                <span>Estimated Tax (8%)</span>
                <span className="tabular-nums font-bold text-ink">
                  {money(tax)}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-ink pt-2 border-t border-line">
                <span>Total Amount</span>
                <span className="tabular-nums text-pink text-lg">
                  {money(finalTotal)}
                </span>
              </div>
            </div>

            {/* Actions: Clear & Checkout CTA */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={clearCart}
                className="rounded-full border-2 border-line px-3.5 py-2.5 text-xs font-bold text-muted hover:text-red-500 hover:border-red-300 transition"
                title="Clear all items from cart"
              >
                Clear
              </button>
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout({
                    subtotal,
                    discountAmount,
                    shippingFee,
                    tax,
                    finalTotal,
                    appliedCoupon,
                    orderNote,
                  });
                }}
                className="flex-1 rounded-full bg-pink text-white font-extrabold py-3 text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition shadow-md"
              >
                <span>Checkout</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
