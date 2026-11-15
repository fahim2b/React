import { useState } from "react";
import { Modal } from "./ui";
import { money } from "../data";
import {
  CheckCircle2,
  CreditCard,
  Truck,
  MapPin,
  ShieldCheck,
  Clock,
  ArrowRight,
  ArrowLeft,
  Receipt,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

export function CheckoutModal({
  isOpen,
  onClose,
  cart = {},
  checkoutDetails,
  onOrderComplete,
  onToast,
}) {
  const [step, setStep] = useState(1); // 1: Delivery, 2: Payment, 3: Success

  // Form states
  const [deliveryType, setDeliveryType] = useState("courier"); // 'courier', 'express', 'pickup'
  const [name, setName] = useState("Fahim Rahman");
  const [email, setEmail] = useState("fahim@example.com");
  const [phone, setPhone] = useState("(555) 234-5678");
  const [address, setAddress] = useState("214 Cherry Blossom Way");
  const [apt, setApt] = useState("Apt 4B");
  const [city, setCity] = useState("Tokyo Midtown");
  const [zip, setZip] = useState("107-0052");

  // Payment states
  const [paymentMethod, setPaymentMethod] = useState("card"); // 'card', 'applepay', 'cod'
  const [cardNumber, setCardNumber] = useState("4532 •••• •••• 8821");
  const [cardExpiry, setCardExpiry] = useState("08/28");
  const [cardCvv, setCardCvv] = useState("912");

  // Placed order data
  const [completedOrder, setCompletedOrder] = useState(null);

  if (!isOpen) return null;

  const items = Object.values(cart);
  const {
    subtotal = 0,
    discountAmount = 0,
    shippingFee = 0,
    tax = 0,
    finalTotal = 0,
    appliedCoupon = null,
    orderNote = "",
  } = checkoutDetails || {};

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!name || !address || !email) {
        onToast("Please complete required delivery details.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Place Order
      const orderId = "SNK-" + Math.floor(100000 + Math.random() * 900000);
      const newOrder = {
        id: orderId,
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        items: [...items],
        deliveryType,
        customer: { name, email, phone, address, apt, city, zip },
        paymentMethod,
        subtotal,
        discountAmount,
        shippingFee,
        tax,
        finalTotal,
        appliedCoupon: appliedCoupon ? appliedCoupon.code : null,
        orderNote,
        status: "Preparing in kitchen 🍜",
      };

      setCompletedOrder(newOrder);
      setStep(3);
      onOrderComplete(newOrder);
      onToast("Order placed successfully! 🌸");
    }
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const resetAndClose = () => {
    setStep(1);
    setCompletedOrder(null);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={step === 3 ? resetAndClose : onClose}
      title={step === 3 ? "Order Confirmation" : "Complete Your Order"}
      maxWidth="max-w-2xl"
    >
      {/* Progress Steps Header (Only for Steps 1 & 2) */}
      {step < 3 && (
        <div className="flex items-center justify-between mb-6 border-b border-line pb-3">
          <div className="flex items-center gap-2">
            <span
              className={
                "w-7 h-7 rounded-full text-xs font-extrabold flex items-center justify-center " +
                (step >= 1 ? "bg-pink text-white" : "bg-soft text-muted")
              }
            >
              1
            </span>
            <span className="text-xs font-bold text-ink">Delivery Address</span>
          </div>

          <div className="flex-1 max-w-[60px] sm:max-w-[100px] h-0.5 bg-line mx-2" />

          <div className="flex items-center gap-2">
            <span
              className={
                "w-7 h-7 rounded-full text-xs font-extrabold flex items-center justify-center " +
                (step >= 2 ? "bg-pink text-white" : "bg-soft text-muted")
              }
            >
              2
            </span>
            <span className="text-xs font-bold text-ink">Payment & Review</span>
          </div>
        </div>
      )}

      {/* STEP 1: Delivery Information */}
      {step === 1 && (
        <form onSubmit={handleNextStep} className="flex flex-col gap-4 text-xs">
          {/* Delivery Method Selector */}
          <div>
            <label className="font-bold text-ink block mb-2">
              Select Delivery Method:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                {
                  id: "courier",
                  title: "Standard Delivery",
                  time: "25-35 min",
                  price: "Free over $45",
                },
                {
                  id: "express",
                  title: "Priority Express",
                  time: "15-20 min",
                  price: "+$2.50",
                },
                {
                  id: "pickup",
                  title: "Kitchen Counter Pickup",
                  time: "Ready in 10m",
                  price: "No delivery fee",
                },
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setDeliveryType(opt.id)}
                  className={
                    "p-3 rounded-2xl border-2 cursor-pointer transition flex flex-col gap-1 " +
                    (deliveryType === opt.id
                      ? "border-pink bg-soft text-pink"
                      : "border-line bg-panel text-ink hover:border-pink/40")
                  }
                >
                  <span className="font-bold text-xs">{opt.title}</span>
                  <span className="text-[11px] text-muted">{opt.time}</span>
                  <span className="text-[10px] font-bold mt-1 text-pink">
                    {opt.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="font-bold text-ink block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-soft/50 border border-line rounded-xl px-3 py-2 text-ink outline-none focus:border-pink"
              />
            </div>
            <div>
              <label className="font-bold text-ink block mb-1">
                Email Address (for receipt) *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-soft/50 border border-line rounded-xl px-3 py-2 text-ink outline-none focus:border-pink"
              />
            </div>
          </div>

          {/* Address Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="font-bold text-ink block mb-1">
                Street Address *
              </label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-soft/50 border border-line rounded-xl px-3 py-2 text-ink outline-none focus:border-pink"
              />
            </div>
            <div>
              <label className="font-bold text-ink block mb-1">
                Apt / Suite
              </label>
              <input
                type="text"
                value={apt}
                onChange={(e) => setApt(e.target.value)}
                className="w-full bg-soft/50 border border-line rounded-xl px-3 py-2 text-ink outline-none focus:border-pink"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-ink block mb-1">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-soft/50 border border-line rounded-xl px-3 py-2 text-ink outline-none focus:border-pink"
              />
            </div>
            <div>
              <label className="font-bold text-ink block mb-1">
                Postal / Zip Code
              </label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-soft/50 border border-line rounded-xl px-3 py-2 text-ink outline-none focus:border-pink"
              />
            </div>
          </div>

          {/* Step 1 Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-line mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-line text-muted hover:text-ink font-bold"
            >
              Back to Cart
            </button>
            <button
              type="submit"
              className="rounded-full bg-pink text-white font-extrabold px-6 py-2.5 text-xs hover:brightness-110 active:scale-95 transition flex items-center gap-1.5 shadow-md"
            >
              <span>Continue to Payment</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </form>
      )}

      {/* STEP 2: Payment Method & Review */}
      {step === 2 && (
        <form onSubmit={handleNextStep} className="flex flex-col gap-4 text-xs">
          {/* Payment Method Selector */}
          <div>
            <label className="font-bold text-ink block mb-2">
              Payment Option:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: "card", title: "Credit / Debit Card", icon: "💳" },
                { id: "applepay", title: "Apple Pay / G-Pay", icon: "⚡" },
                { id: "cod", title: "Cash on Delivery", icon: "💵" },
              ].map((p) => (
                <div
                  key={p.id}
                  onClick={() => setPaymentMethod(p.id)}
                  className={
                    "p-3 rounded-2xl border-2 cursor-pointer transition flex items-center gap-2 " +
                    (paymentMethod === p.id
                      ? "border-pink bg-soft text-pink font-bold"
                      : "border-line bg-panel text-ink hover:border-pink/40")
                  }
                >
                  <span className="text-base">{p.icon}</span>
                  <span>{p.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Credit Card inputs */}
          {paymentMethod === "card" && (
            <div className="bg-soft/50 p-4 rounded-2xl border border-line flex flex-col gap-3">
              <div className="flex items-center justify-between text-ink font-bold">
                <span>Card Information</span>
                <span className="text-[10px] text-muted flex items-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-500" /> 256-bit
                  Encrypted
                </span>
              </div>
              <div>
                <label className="text-[11px] text-muted block mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <CreditCard
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                  />
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full bg-panel border border-line rounded-xl pl-9 pr-3 py-2 text-ink font-mono"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-muted block mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    placeholder="MM/YY"
                    className="w-full bg-panel border border-line rounded-xl px-3 py-2 text-ink font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] text-muted block mb-1">
                    Security Code (CVV)
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value)}
                    className="w-full bg-panel border border-line rounded-xl px-3 py-2 text-ink font-mono"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === "applepay" && (
            <div className="bg-soft/40 p-5 rounded-2xl border border-line text-center flex flex-col items-center gap-2">
              <div className="text-2xl">⚡</div>
              <div className="font-bold text-ink">
                Simulated Instant Express Pay
              </div>
              <div className="text-muted text-[11px]">
                Clicking Place Order will securely charge your biometric wallet.
              </div>
            </div>
          )}

          {paymentMethod === "cod" && (
            <div className="bg-soft/40 p-5 rounded-2xl border border-line text-center flex flex-col items-center gap-2">
              <div className="text-2xl">💵</div>
              <div className="font-bold text-ink">Pay Cash upon Delivery</div>
              <div className="text-muted text-[11px]">
                Please prepare exact cash for our courier upon food handover.
              </div>
            </div>
          )}

          {/* Quick Order Summary Checklist */}
          <div className="bg-soft/30 p-3.5 rounded-2xl border border-line/60 flex flex-col gap-1.5 text-xs">
            <div className="flex justify-between font-bold text-ink">
              <span>
                {items.reduce((s, it) => s + it.qty, 0)} items in order
              </span>
              <span className="text-pink tabular-nums">
                {money(finalTotal)}
              </span>
            </div>
            <div className="text-[11px] text-muted">
              Delivering to: <strong className="text-ink">{name}</strong> at{" "}
              <strong className="text-ink">
                {address}, {city}
              </strong>
            </div>
            {orderNote && (
              <div className="text-[11px] text-muted italic">
                Note: "{orderNote}"
              </div>
            )}
          </div>

          {/* Step 2 Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-line mt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-4 py-2 rounded-full border border-line text-muted hover:text-ink font-bold flex items-center gap-1"
            >
              <ArrowLeft size={14} /> Back
            </button>
            <button
              type="submit"
              className="rounded-full bg-pink text-white font-extrabold px-6 py-2.5 text-xs hover:brightness-110 active:scale-95 transition flex items-center gap-2 shadow-md"
            >
              <span>Place Order • {money(finalTotal)}</span>
              <Sparkles size={14} className="text-amber-200" />
            </button>
          </div>
        </form>
      )}

      {/* STEP 3: Order Placed Success Confirmation */}
      {step === 3 && completedOrder && (
        <div className="flex flex-col items-center text-center gap-4 py-3 text-xs">
          <div className="w-16 h-16 rounded-full bg-soft text-pink flex items-center justify-center text-3xl shadow-inner">
            🎉
          </div>

          <div>
            <span className="text-xs font-bold text-pink uppercase tracking-widest">
              Itadakimasu!
            </span>
            <h3 className="display text-2xl text-ink mt-0.5">
              Order Confirmed!
            </h3>
            <p className="text-xs text-muted max-w-sm mt-1">
              Your order{" "}
              <strong className="text-pink font-mono">
                {completedOrder.id}
              </strong>{" "}
              has been transmitted to our kitchen.
            </p>
          </div>

          {/* Live Order Tracker Status Steps */}
          <div className="w-full bg-soft/50 p-4 rounded-2xl border border-line flex items-center justify-between text-[11px] font-bold">
            <div className="flex flex-col items-center gap-1 text-pink">
              <CheckCircle2 size={16} />
              <span>Received</span>
            </div>
            <div className="flex-1 h-0.5 bg-pink mx-2" />
            <div className="flex flex-col items-center gap-1 text-pink">
              <Clock size={16} className="animate-spin text-pink" />
              <span>Simmering</span>
            </div>
            <div className="flex-1 h-0.5 bg-line mx-2" />
            <div className="flex flex-col items-center gap-1 text-muted">
              <Truck size={16} />
              <span>On Way</span>
            </div>
          </div>

          {/* Printable Receipt Card */}
          <div className="w-full bg-panel p-4 rounded-2xl border border-line text-left flex flex-col gap-2.5 shadow-sm">
            <div className="flex items-center justify-between border-b border-line pb-2">
              <div>
                <div className="font-extrabold text-sm text-ink">
                  Sunakko Kitchen Receipt
                </div>
                <div className="text-[10px] text-muted">
                  {completedOrder.date}
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-bold text-pink">
                  {completedOrder.id}
                </span>
              </div>
            </div>

            {/* Line items list */}
            <div className="flex flex-col gap-1.5 divide-y divide-line/40 max-h-36 overflow-y-auto pr-1">
              {completedOrder.items.map((it) => (
                <div
                  key={it.id}
                  className="pt-1.5 first:pt-0 flex justify-between"
                >
                  <span className="text-ink font-medium">
                    {it.qty}x {it.name}
                  </span>
                  <span className="tabular-nums font-bold text-ink">
                    {money(it.price * it.qty)}
                  </span>
                </div>
              ))}
            </div>

            {/* Total calculation */}
            <div className="pt-2 border-t border-line flex flex-col gap-1">
              <div className="flex justify-between text-muted text-[11px]">
                <span>Subtotal</span>
                <span>{money(completedOrder.subtotal)}</span>
              </div>
              {completedOrder.discountAmount > 0 && (
                <div className="flex justify-between text-pink text-[11px] font-bold">
                  <span>Discount</span>
                  <span>-{money(completedOrder.discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-muted text-[11px]">
                <span>Shipping</span>
                <span>
                  {completedOrder.shippingFee === 0
                    ? "FREE"
                    : money(completedOrder.shippingFee)}
                </span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-ink pt-1 border-t border-line/60">
                <span>Total Paid</span>
                <span className="text-pink">
                  {money(completedOrder.finalTotal)}
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 w-full pt-2">
            <button
              onClick={handlePrintReceipt}
              className="flex-1 py-2.5 rounded-full border border-line text-ink font-bold hover:bg-soft text-xs flex items-center justify-center gap-1.5"
            >
              <Receipt size={14} /> Print Receipt
            </button>
            <button
              onClick={resetAndClose}
              className="flex-1 py-2.5 rounded-full bg-pink text-white font-extrabold hover:brightness-110 active:scale-95 text-xs shadow-md"
            >
              Back to Store
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
