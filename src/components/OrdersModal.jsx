import { Modal } from "./ui";
import { money } from "../data";
import { Receipt, RotateCcw, Clock, CheckCircle2, ChevronRight, Package } from "lucide-react";

export function OrdersModal({
  isOpen,
  onClose,
  orders = [],
  onReorder,
  onToast,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Order History & Receipts" maxWidth="max-w-2xl">
      <div className="flex flex-col gap-4 text-xs">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-12 px-4 gap-3">
            <div className="w-16 h-16 rounded-full bg-soft text-pink flex items-center justify-center">
              <Receipt size={28} className="text-pink" />
            </div>
            <h3 className="display text-lg text-ink">No orders yet</h3>
            <p className="text-xs text-muted max-w-xs leading-relaxed">
              When you place an order, your tracking details and downloadable receipts will be saved right here.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-1">
            {orders.map((ord) => (
              <div
                key={ord.id}
                className="bg-soft/40 p-4 rounded-2xl border border-line flex flex-col gap-3"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-line/60 pb-2 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Package size={15} className="text-pink" />
                    <span className="font-mono font-bold text-ink">{ord.id}</span>
                    <span className="text-muted">• {ord.date}</span>
                  </div>
                  <span className="bg-panel px-2.5 py-0.5 rounded-full text-pink font-bold border border-line text-[11px]">
                    {ord.status || "Completed"}
                  </span>
                </div>

                {/* Items summary */}
                <div className="flex flex-col gap-1 text-[11px] text-muted">
                  {ord.items.map((it, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span>{it.qty}x {it.name}</span>
                      <span className="tabular-nums text-ink font-semibold">{money(it.price * it.qty)}</span>
                    </div>
                  ))}
                </div>

                {/* Footer with Total & Reorder */}
                <div className="flex items-center justify-between pt-2 border-t border-line/60">
                  <div className="text-xs">
                    <span className="text-muted">Paid: </span>
                    <strong className="text-pink text-sm tabular-nums">{money(ord.finalTotal)}</strong>
                  </div>

                  <button
                    onClick={() => onReorder(ord)}
                    className="rounded-full bg-pink text-white font-bold px-3.5 py-1.5 text-xs hover:brightness-110 active:scale-95 transition flex items-center gap-1.5 shadow-sm"
                  >
                    <RotateCcw size={13} /> Reorder All
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}
