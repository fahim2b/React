# Sunakko (砂っこ) — Asian Street Kitchen & Artisan Market

A rich, fully-featured modern e-commerce web application built with **React 18**, **Tailwind CSS 3**, and **Vite**, preserving the authentic Japanese street food and sakura aesthetic of the Sunakko brand.

---

## ✨ Features

- **🌸 Sunakko Visual Design System**:
  - Consistent color tokens (`--frame`, `--panel`, `--ink`, `--muted`, `--pink`, `--soft`, `--line`, `--deep`)
  - Japanese typography pairing: `Zen Dots` (display) and `Zen Maru Gothic` (body)
  - Interactive falling sakura petals canvas animation
  - Pure SVG product art illustrations for bowls, kits, bottles, ceramics, and sweets
  - Dynamic Light & Dark Mode toggle with automatic local storage persistence

- **🍜 Rich Catalog & Product Filtering**:
  - 5 Product Categories: Fresh Meals, DIY Pantry Kits, Craft Drinks, Apparel & Merch, Sweets & Treats
  - Real-time search across English and Japanese titles, descriptions, and categories
  - Filter by Dietary / Tags (Spicy 🌶️, Vegetarian 🌱, Bestseller ⭐, Staff Pick 💖, New Arrival ✨, Nationwide Ship 📦)
  - Max price slider ($5 - $60)
  - Sorting: Featured, Price (Low to High), Price (High to Low), Highest Rated, Most Popular
  - Grid View and List View layout switcher

- **🔍 Quick View & Product Modal**:
  - Deep-dive product preview with high-res illustration
  - Overview story and background description
  - Ingredient, origin, and allergen specifications table
  - Customer review list with star ratings + interactive form to submit new reviews
  - Quantity stepper, one-click add to cart, and social link sharing

- **🛍️ Interactive Cart & Drawer**:
  - Real-time cart synchronization with `localStorage`
  - Free shipping progress bar (unlocks at $45.00)
  - Working promo codes system:
    - `SAKURA10`: 10% off entire order
    - `YUMMY5`: $5 off orders over $25
    - `BENTO20`: 20% off orders over $50
    - `FREESHIP`: Free standard delivery
  - Special kitchen order note input
  - Detailed cost breakdown: Subtotal, Discount, Shipping, Tax, and Final Total

- **💳 Multi-Step Checkout Flow**:
  - Step 1: Customer details & delivery preferences (Standard Courier, Priority Express, Kitchen Pickup)
  - Step 2: Payment method (Credit/Debit Card with encrypted mock fields, Apple Pay / G-Pay, Cash on Delivery)
  - Step 3: Order Confirmation with unique Order ID (`#SNK-XXXXXX`), live preparation tracker, and printable receipt

- **💖 Wishlist & Reordering System**:
  - Save items to favorites with heart toggle
  - Dedicated wishlist drawer with "Move All to Cart"
  - Order history viewer with instant "Reorder All" button

- **🎁 Deals & Loyalty Program**:
  - Interactive 8-stamp loyalty card (earn stamps, claim a free ramen bowl)
  - 1 + 1 = 3 Craft Drinks bundle builder (cheapest drink free)
  - Weekday Business Lunch special set tracker with live schedule status

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start Vite local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```
src/
├── main.jsx                   # React entry point
├── App.jsx                    # Root app state (cart, wishlist, orders, modals)
├── data.js                    # Catalog products, categories, coupons & pricing
├── index.css                  # Custom theme variables, fonts & animations
└── components/
    ├── Navbar.jsx             # Top bar, search, theme switch, wishlist & cart badges
    ├── StoreHero.jsx          # Hero banner with canvas petals & promo highlights
    ├── Catalog.jsx            # Filterable product grid, sort & view toggle
    ├── ProductCard.jsx        # Product card with SVG art, badge & quick actions
    ├── ProductModal.jsx       # Deep-dive product quick view modal & reviews
    ├── CartDrawer.jsx         # Slide-out cart drawer with free shipping progress
    ├── CheckoutModal.jsx      # Multi-step checkout & order receipt
    ├── WishlistModal.jsx      # Saved items drawer with move-to-cart
    ├── OrdersModal.jsx        # Order history viewer with reorder support
    ├── Promotions.jsx         # Loyalty stamps, 1+1=3 drinks & lunch sets
    ├── Location.jsx           # Store location & real-time opening hours
    ├── Footer.jsx             # Newsletter, contact, phone copy & links
    ├── Art.jsx                # Vector SVG illustrations & canvas falling petals
    └── ui.jsx                 # Reusable UI building blocks (Panel, Pill, Modal, RatingStars)
```
