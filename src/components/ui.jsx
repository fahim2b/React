import { useEffect } from "react";
import { Star, X } from "lucide-react";

export const Panel = ({ children, className = "", id }) => (
  <section
    id={id}
    className={"bg-panel text-ink rounded-[2rem] p-4 sm:p-6 shadow-sm border border-line/40 transition-colors " + className}
  >
    {children}
  </section>
);

export const Pill = ({ children, className = "", variant = "primary", ...p }) => {
  let base = "rounded-full px-4 py-2 text-sm font-bold active:scale-95 transition flex items-center justify-center gap-1.5 ";
  if (variant === "primary") {
    base += "bg-pink text-white hover:brightness-110 shadow-sm ";
  } else if (variant === "soft") {
    base += "bg-soft text-pink hover:brightness-95 ";
  } else if (variant === "outline") {
    base += "border-2 border-line text-ink hover:border-pink hover:text-pink ";
  } else if (variant === "ghost") {
    base += "text-ink hover:bg-soft ";
  } else if (variant === "dark") {
    base += "bg-deep text-white hover:brightness-125 ";
  }
  return (
    <button className={base + className} {...p}>
      {children}
    </button>
  );
};

export const Badge = ({ children, variant = "pink", className = "" }) => {
  let style = "inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full ";
  if (variant === "pink") {
    style += "bg-soft text-pink border border-line/60 ";
  } else if (variant === "hot") {
    style += "bg-red-500/10 text-red-500 border border-red-200 dark:border-red-900/50 ";
  } else if (variant === "gold") {
    style += "bg-amber-400/20 text-amber-700 dark:text-amber-300 border border-amber-300/40 ";
  } else if (variant === "green") {
    style += "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-300/40 ";
  } else if (variant === "deep") {
    style += "bg-deep text-white ";
  }
  return <span className={style + className}>{children}</span>;
};

export const RatingStars = ({ rating = 5, count, size = 14, className = "" }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.4;
  return (
    <div className={"flex items-center gap-1 " + className} aria-label={`${rating} out of 5 stars`}>
      <div className="flex text-amber-400">
        {[...Array(5)].map((_, i) => {
          const filled = i < fullStars;
          return (
            <Star
              key={i}
              size={size}
              className={
                filled
                  ? "fill-amber-400 text-amber-400"
                  : i === fullStars && hasHalf
                  ? "fill-amber-400/60 text-amber-400"
                  : "text-muted/30"
              }
            />
          );
        })}
      </div>
      <span className="text-xs font-bold tabular-nums text-ink">{rating.toFixed(1)}</span>
      {count !== undefined && (
        <span className="text-xs text-muted">({count})</span>
      )}
    </div>
  );
};

export const Modal = ({ isOpen, onClose, title, children, maxWidth = "max-w-2xl" }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" role="dialog" aria-modal="true">
      <div
        className="fixed inset-0 bg-deep/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`relative w-full ${maxWidth} bg-panel text-ink rounded-[2rem] shadow-2xl border border-line/60 overflow-hidden rise z-10 my-8`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-line">
          <h3 className="display text-xl text-pink">{title}</h3>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-soft text-pink flex items-center justify-center hover:scale-105 active:scale-95 transition"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-6 max-h-[82vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
