import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { StoreHero } from "./components/StoreHero";
import { Catalog } from "./components/Catalog";
import { Promotions } from "./components/Promotions";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { CheckoutModal } from "./components/CheckoutModal";
import { WishlistModal } from "./components/WishlistModal";
import { OrdersModal } from "./components/OrdersModal";
import { ProductModal } from "./components/ProductModal";
import { PRODUCTS, money } from "./data";

export default function App() {
  // Cart state stored in localStorage
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("sunakko-cart")) || {};
    } catch (e) {
      return {};
    }
  });

  // Wishlist state stored in localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("sunakko-wishlist")) || [];
    } catch (e) {
      return [];
    }
  });

  // Orders history stored in localStorage
  const [orders, setOrders] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("sunakko-orders")) || [];
    } catch (e) {
      return [];
    }
  });

  // Search & Category state
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Cart enhancements
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [orderNote, setOrderNote] = useState("");

  // Toast notification state
  const [toast, setToast] = useState("");

  // Sync states to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("sunakko-cart", JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("sunakko-wishlist", JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem("sunakko-orders", JSON.stringify(orders));
    } catch (e) {}
  }, [orders]);

  // Toast trigger
  const triggerToast = (msg) => {
    setToast(msg);
    clearTimeout(triggerToast.timer);
    triggerToast.timer = setTimeout(() => setToast(""), 2200);
  };

  // Cart operations
  const addToCart = (product, showToast = true) => {
    setCart((prev) => {
      const existing = prev[product.id];
      const newQty = (existing?.qty || 0) + (product.qty || 1);
      return {
        ...prev,
        [product.id]: {
          ...product,
          qty: newQty,
        },
      };
    });
    if (showToast) {
      triggerToast(`Added ${product.name} to order 🍜`);
    }
  };

  const setQty = (id, q) => {
    setCart((prev) => {
      const next = { ...prev };
      if (q <= 0) {
        delete next[id];
      } else if (next[id]) {
        next[id] = { ...next[id], qty: q };
      }
      return next;
    });
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    triggerToast("Item removed from cart");
  };

  const clearCart = () => {
    setCart({});
    setAppliedCoupon(null);
    triggerToast("Cart cleared");
  };

  // Wishlist operations
  const toggleWishlist = (product) => {
    const isSaved = wishlist.some((w) => w.id === product.id);
    if (isSaved) {
      setWishlist((prev) => prev.filter((w) => w.id !== product.id));
      triggerToast(`Removed from wishlist 💔`);
    } else {
      setWishlist((prev) => [...prev, product]);
      triggerToast(`Saved ${product.name} to wishlist 💖`);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((w) => w.id !== id));
    triggerToast("Item removed from wishlist");
  };

  const moveAllWishlistToCart = () => {
    wishlist.forEach((it) => addToCart(it, false));
    setWishlist([]);
    triggerToast("Moved all wishlist items into your cart! 🛍️");
    setIsWishlistOpen(false);
    setIsCartOpen(true);
  };

  // Order placement & reorder
  const handleOrderComplete = (newOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
    setCart({});
    setAppliedCoupon(null);
    setOrderNote("");
  };

  const handleReorder = (order) => {
    order.items.forEach((it) => addToCart(it, false));
    triggerToast(`Added ${order.items.length} items from ${order.id} to cart! 🍜`);
    setIsOrdersOpen(false);
    setIsCartOpen(true);
  };

  // Calculations for header
  const cartLines = Object.values(cart);
  const cartCount = cartLines.reduce((sum, item) => sum + item.qty, 0);
  const cartTotalAmount = cartLines.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div className="max-w-[1140px] mx-auto flex flex-col gap-5 p-2 sm:p-4">
      {/* Navbar with brand, theme toggle, search, wishlist & cart badges */}
      <Navbar
        cartCount={cartCount}
        cartTotal={money(cartTotalAmount)}
        onOpenCart={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        ordersCount={orders.length}
        onOpenOrders={() => setIsOrdersOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Hero with Sakura theme, canvas falling petals & promo highlights */}
      <StoreHero
        onFilterQuick={(cat) => {
          setActiveCategory(cat);
          document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
        }}
        onExploreMenu={() => {
          document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Main Product Catalog with full filtering, sorting & view modes */}
      <Catalog
        products={PRODUCTS}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        cart={cart}
        onAddToCart={addToCart}
        wishlist={wishlist}
        onToggleWishlist={toggleWishlist}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      {/* Promotions: Loyalty stamps, 1+1=3 drinks bundle, business lunch */}
      <Promotions onAddToCart={addToCart} onToast={triggerToast} />

      {/* Store Location & Live Clock Open/Close Status */}
      <Location />

      {/* Footer with newsletter subscription, phone copy, quick links */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        setQty={setQty}
        removeItem={removeItem}
        clearCart={clearCart}
        appliedCoupon={appliedCoupon}
        setAppliedCoupon={setAppliedCoupon}
        orderNote={orderNote}
        setOrderNote={setOrderNote}
        onProceedToCheckout={(details) => {
          setCheckoutDetails(details);
          setIsCheckoutOpen(true);
        }}
        onToast={triggerToast}
      />

      {/* Multi-step Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        checkoutDetails={checkoutDetails}
        onOrderComplete={handleOrderComplete}
        onToast={triggerToast}
      />

      {/* Wishlist Drawer / Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={removeFromWishlist}
        onAddToCart={(p) => {
          addToCart(p);
          removeFromWishlist(p.id);
        }}
        onMoveAllToCart={moveAllWishlistToCart}
        onToast={triggerToast}
      />

      {/* Past Orders History Modal */}
      <OrdersModal
        isOpen={isOrdersOpen}
        onClose={() => setIsOrdersOpen(false)}
        orders={orders}
        onReorder={handleReorder}
        onToast={triggerToast}
      />

      {/* Deep-Dive Product Quick View Modal */}
      <ProductModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={addToCart}
        cartQty={quickViewProduct ? cart[quickViewProduct.id]?.qty || 0 : 0}
        isWishlisted={quickViewProduct ? wishlist.some((w) => w.id === quickViewProduct.id) : false}
        onToggleWishlist={toggleWishlist}
        onToast={triggerToast}
      />

      {/* Polite Floating Notification Toast */}
      <div
        role="status"
        aria-live="polite"
        className={
          "fixed left-1/2 -translate-x-1/2 bg-deep text-white text-xs sm:text-sm font-bold rounded-full px-5 py-2.5 z-50 transition-all duration-300 shadow-2xl flex items-center gap-2 border border-white/20 " +
          (toast ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none")
        }
        style={{ bottom: "calc(20px + env(safe-area-inset-bottom, 0px))" }}
      >
        <span>{toast}</span>
      </div>
    </div>
  );
}
