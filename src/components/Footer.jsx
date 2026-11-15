import { useState } from "react";
import { Logo } from "./Art";
import { Copy, Check, Send, Heart } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const [emailSub, setEmailSub] = useState("");
  const [subDone, setSubDone] = useState(false);
  const phone = "(555) 014-2290";

  const copy = () => {
    try {
      navigator.clipboard.writeText(phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      setCopied(true);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailSub) return;
    setSubDone(true);
    setEmailSub("");
    setTimeout(() => setSubDone(false), 4000);
  };

  return (
    <footer className="bg-panel rounded-[2rem] p-6 sm:p-8 border border-line/60 shadow-sm flex flex-col gap-8">
      {/* Newsletter signup row */}
      <div className="bg-soft/70 rounded-3xl p-5 sm:p-6 border border-line flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="max-w-md text-center md:text-left">
          <h4 className="display text-pink text-lg sm:text-xl">
            Join the Sunakko Bento Club
          </h4>
          <p className="text-xs text-muted mt-1 leading-relaxed">
            Get exclusive secret menu drops, early access to limited edition
            ramen bowl releases, and an instant 15% discount coupon!
          </p>
        </div>

        {subDone ? (
          <div className="bg-pink text-white text-xs font-bold px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <Check size={14} /> Welcome to the club! Check your inbox for the
            code.
          </div>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex gap-2 w-full md:w-auto max-w-sm"
          >
            <input
              type="email"
              required
              value={emailSub}
              onChange={(e) => setEmailSub(e.target.value)}
              placeholder="Enter your email address"
              className="bg-panel border border-line text-xs rounded-full px-4 py-2.5 text-ink flex-1 outline-none focus:border-pink"
            />
            <button
              type="submit"
              className="rounded-full bg-pink text-white font-bold px-5 py-2.5 text-xs hover:brightness-110 active:scale-95 transition flex items-center gap-1.5 shadow-sm shrink-0"
            >
              <span>Join</span>
              <Send size={12} />
            </button>
          </form>
        )}
      </div>

      {/* Main Footer Links & Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs">
        {/* Brand Column */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <Logo size={40} />
            <div className="flex flex-col">
              <span className="display text-pink text-xl font-bold">
                Sunakko
              </span>
              <span className="text-[10px] text-muted tracking-wider uppercase font-semibold">
                Tokyo Street Kitchen
              </span>
            </div>
          </div>
          <p className="text-muted leading-relaxed">
            Crafting soul-warming ramen, artisanal Kyoto pantry staples, and
            limited edition Japanese street culture goods.
          </p>
        </div>

        {/* Categories Link Column */}
        <div className="flex flex-col gap-2">
          <span className="font-extrabold text-ink uppercase tracking-wider text-[11px]">
            Explore Menu
          </span>
          <a href="#menu" className="text-muted hover:text-pink transition">
            Signature Tonkotsu Ramen
          </a>
          <a href="#menu" className="text-muted hover:text-pink transition">
            Black Garlic Miso
          </a>
          <a href="#menu" className="text-muted hover:text-pink transition">
            Golden Katsu Curry
          </a>
          <a href="#menu" className="text-muted hover:text-pink transition">
            Artisan Daifuku Mochi
          </a>
          <a href="#menu" className="text-muted hover:text-pink transition">
            Uji Ceremonial Matcha
          </a>
        </div>

        {/* Customer Care */}
        <div className="flex flex-col gap-2">
          <span className="font-extrabold text-ink uppercase tracking-wider text-[11px]">
            Market & Care
          </span>
          <a
            href="#promotions"
            className="text-muted hover:text-pink transition"
          >
            Loyalty Stamp Club
          </a>
          <a
            href="#promotions"
            className="text-muted hover:text-pink transition"
          >
            Weekday Business Lunch
          </a>
          <a href="#location" className="text-muted hover:text-pink transition">
            Location & Hours
          </a>
          <span className="text-muted">Nationwide Thermal Shipping</span>
          <span className="text-muted">Eco-friendly Packaging</span>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-2">
          <span className="font-extrabold text-ink uppercase tracking-wider text-[11px]">
            Kitchen Counter
          </span>
          <div className="text-muted">214 Cherry Lane, Midtown</div>
          <div className="text-muted">Open 11:00 AM - 11:00 PM Daily</div>
          <div className="text-muted">hello@sunakko.example</div>
          <button
            onClick={copy}
            className="self-start text-pink font-extrabold hover:underline tabular-nums flex items-center gap-1 mt-1"
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            <span>{copied ? "Copied Phone Number!" : phone}</span>
          </button>
        </div>
      </div>

      {/* Bottom copyright & attribution */}
      <div className="pt-4 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted">
        <div>
          © {new Date().getFullYear()} Sunakko Street Kitchen & Market. All
          rights reserved.
        </div>
        <div className="flex items-center gap-1">
          Crafted with <Heart size={12} className="text-pink fill-pink" /> in
          React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
