export const CATEGORIES = [
  { id: "all", name: "All Items", icon: "✨", desc: "Explore our full kitchen and market" },
  { id: "meals", name: "Fresh Meals", icon: "🍜", desc: "Hot bowls made fresh to order" },
  { id: "pantry", name: "Pantry & DIY Kits", icon: "🥢", desc: "Cook authentic Sunakko at home" },
  { id: "drinks", name: "Craft Drinks", icon: "🍵", desc: "Cold sodas, teas & artisan matcha" },
  { id: "merch", name: "Apparel & Merch", icon: "🌸", desc: "Original ceramics, tees & accessories" },
  { id: "sweets", name: "Sweets & Treats", icon: "🍡", desc: "Fresh mochi, dango & Japanese confections" },
];

export const DIETARY_TAGS = [
  "Spicy 🌶️",
  "Vegetarian 🌱",
  "Bestseller ⭐",
  "Staff Pick 💖",
  "New Arrival ✨",
  "Nationwide Ship 📦",
];

export const PRODUCTS = [
  // --- FRESH MEALS ---
  {
    id: "m-tonkotsu",
    name: "Signature Tonkotsu Ramen",
    jpName: "特製 豚骨ラーメン",
    category: "meals",
    price: 14.50,
    originalPrice: 16.00,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Bestseller",
    dietary: ["Bestseller ⭐", "Spicy 🌶️"],
    prepTime: "12-15 min",
    inStock: 25,
    visualType: "ramen-tonkotsu",
    hue: 14,
    shortDesc: "Twelve-hour rich pork bone broth, tender torched chashu, marinated ajitama egg & spring onions.",
    longDesc: "Our flagship ramen bowl. The broth is slowly simmered for twelve hours with roasted marrow bones, aromatics, and kombu to yield an unctuous, milky consistency. Served with springy wheat noodles, slow-braised chashu pork belly, seasoned bamboo shoots (menma), nori, and our house ajitama egg.",
    specs: {
      "Broth": "12-Hour Rich Pork Bone & Collagen",
      "Noodles": "Handmade Medium Wavy Noodles",
      "Toppings": "Torched Chashu, Ajitama, Menma, Wood-ear Mushroom, Nori",
      "Allergens": "Wheat, Soy, Egg, Sesame",
    },
    reviews: [
      { author: "Kenji S.", rating: 5, date: "2 days ago", comment: "The broth depth is unparalleled outside of Fukuoka. Absolutely rich and comforting." },
      { author: "Maya T.", rating: 5, date: "1 week ago", comment: "The torched chashu literally melts on your tongue. Must try!" },
      { author: "Alex R.", rating: 4, date: "2 weeks ago", comment: "Incredible flavor, packaging kept it steaming hot until arrival." }
    ]
  },
  {
    id: "m-black-garlic",
    name: "Black Garlic Miso Ramen",
    jpName: "黒麻油 味噌ラーメン",
    category: "meals",
    price: 15.00,
    rating: 4.8,
    reviewsCount: 98,
    badge: "Staff Pick",
    dietary: ["Spicy 🌶️", "Staff Pick 💖"],
    prepTime: "12-15 min",
    inStock: 18,
    visualType: "ramen-blackgarlic",
    hue: 6,
    shortDesc: "Double miso broth infused with smoky roasted black garlic mayu oil, chili threads and sweet corn.",
    longDesc: "A deeply aromatic bowl combining red Sendai miso and white sweet miso with our dark toasted garlic mayu oil. The smoky aroma hits first, balanced by tender pork mince, sweet Hokkaido butter corn, bean sprouts, and ajitama.",
    specs: {
      "Broth": "Aged Double Miso with House Mayu Oil",
      "Noodles": "Thick Chewy Tokyo-Style Noodles",
      "Spice Level": "Medium Spice (2/3)",
      "Allergens": "Wheat, Soy, Sesame, Dairy",
    },
    reviews: [
      { author: "Emi K.", rating: 5, date: "3 days ago", comment: "The black garlic oil adds an earthy sweetness that cuts through the rich miso. Divine." },
      { author: "David P.", rating: 5, date: "2 weeks ago", comment: "My absolute favorite ramen in the city. The corn and garlic combo is perfection." }
    ]
  },
  {
    id: "m-veggie-shoyu",
    name: "Truffle Shoyu Veggie Ramen",
    jpName: "トリュフ 醤油 菜食ラーメン",
    category: "meals",
    price: 13.50,
    rating: 4.7,
    reviewsCount: 76,
    badge: "Vegetarian",
    dietary: ["Vegetarian 🌱", "New Arrival ✨"],
    prepTime: "10-12 min",
    inStock: 20,
    visualType: "ramen-shoyu",
    hue: 88,
    shortDesc: "Golden shiitake-kombu clear dashi broth drizzled with white truffle oil, braised king oyster mushrooms.",
    longDesc: "A 100% plant-based masterpiece. We extract clean umami from sun-dried donko shiitake and Rishiri kombu, accented with barrel-aged shoyu tare and aromatic white truffle droplets. Topped with seared tofu chashu, tender bok choy, and crispy lotus root.",
    specs: {
      "Broth": "Clear Shiitake, Roasted Vegetable & Rishiri Kombu Dashi",
      "Noodles": "Spinach Wheat Noodles",
      "Dietary": "Vegan / Plant-Based Friendly",
      "Allergens": "Wheat, Soy, Sesame",
    },
    reviews: [
      { author: "Sara L.", rating: 5, date: "Yesterday", comment: "Finally a vegetarian ramen that doesn't feel like an afterthought! The truffle note is so elegant." },
      { author: "Marcus V.", rating: 4, date: "3 weeks ago", comment: "Great mushroom broth, very fragrant and clean." }
    ]
  },
  {
    id: "m-katsu-curry",
    name: "Golden Katsu Curry Bowl",
    jpName: "黄金 カツカレー丼",
    category: "meals",
    price: 13.50,
    originalPrice: 15.00,
    rating: 4.9,
    reviewsCount: 164,
    badge: "Bestseller",
    dietary: ["Bestseller ⭐"],
    prepTime: "10-14 min",
    inStock: 30,
    visualType: "rice-katsu",
    hue: 38,
    shortDesc: "Panko-crusted pork cutlet over steamed Koshihikari rice, 48-hour slow-cooked sweet apple curry.",
    longDesc: "Crisp, golden Japanese panko cutlet fried to airy crunch on the outside while staying succulent inside. Served with our signature house curry made with grated Fuji apples, caramelized onions, and 16 ground spices. Accompanied by bright red fukujinzuke pickles.",
    specs: {
      "Protein": "Tender Pork Loin (or Tofu Katsu upon request)",
      "Rice": "Premium Niigata Koshihikari Rice",
      "Curry": "Mild-Sweet Japanese Home-style Curry",
      "Allergens": "Wheat, Soy, Egg",
    },
    reviews: [
      { author: "Liam B.", rating: 5, date: "4 days ago", comment: "Crispy cutlet and that curry sauce is drinkable. Generous portion!" },
      { author: "Chloë W.", rating: 5, date: "1 week ago", comment: "Comfort food defined. The pickles add the exact right tang." }
    ]
  },
  {
    id: "m-unagi-don",
    name: "Unagi Kabayaki Donburi",
    jpName: "極上 鰻蒲焼き重",
    category: "meals",
    price: 17.50,
    rating: 4.9,
    reviewsCount: 88,
    badge: "Premium",
    dietary: ["Staff Pick 💖"],
    prepTime: "12 min",
    inStock: 15,
    visualType: "rice-unagi",
    hue: 24,
    shortDesc: "Charcoal-glazed freshwater eel with sweet tare reduction, sansho pepper & shredded nori.",
    longDesc: "Plump fillets of freshwater eel, traditionally steamed then glazed multiple times over binchotan charcoal with our vintage sweet soy reduction. Finished with citrusy sansho mountain pepper and served over steaming pearl rice.",
    specs: {
      "Main": "Glazed Freshwater Eel (Unagi)",
      "Rice": "Steamed Koshihikari with Tare drizzle",
      "Garnish": "Kyoto Sansho Pepper, Toasted Sesame, Shiso Leaf",
      "Allergens": "Fish, Soy, Wheat",
    },
    reviews: [
      { author: "Hidetoshi N.", rating: 5, date: "5 days ago", comment: "Super tender and not too greasy. Tare sauce is authentic." }
    ]
  },
  {
    id: "m-takoyaki",
    name: "Osaka Takoyaki (8 pcs)",
    jpName: "大阪名物 たこ焼き",
    category: "meals",
    price: 8.50,
    rating: 4.8,
    reviewsCount: 110,
    badge: "Street Favorite",
    dietary: ["Bestseller ⭐"],
    prepTime: "8 min",
    inStock: 35,
    visualType: "snack-takoyaki",
    hue: 20,
    shortDesc: "Piping hot octopus dumplings brushed with sweet brown sauce, Japanese kewpie mayo & dancing bonito flakes.",
    longDesc: "Straight from the streets of Dotonbori. Molten dashi batter balls stuffed with tender octopus pieces, red pickled ginger, and tempura crisps. Topped with dancing katsuobushi bonito flakes, aonori seaweed powder, and criss-cross kewpie mayo.",
    specs: {
      "Count": "8 Pieces per order",
      "Filling": "Octopus (Tako), Beni Shoga Ginger, Tenkasu",
      "Sauces": "House Otafuku Sauce & Kewpie Mayonnaise",
      "Allergens": "Mollusc, Wheat, Egg, Soy, Fish",
    },
    reviews: [
      { author: "Rachel Z.", rating: 5, date: "3 days ago", comment: "The bonito flakes were literally dancing when it arrived. Perfect crust and creamy center." }
    ]
  },
  {
    id: "m-gyoza",
    name: "Crispy Skirt Gyoza (6 pcs)",
    jpName: "羽付き 焼き餃子",
    category: "meals",
    price: 8.00,
    rating: 4.7,
    reviewsCount: 94,
    badge: "Crispy",
    dietary: [],
    prepTime: "8 min",
    inStock: 40,
    visualType: "snack-gyoza",
    hue: 34,
    shortDesc: "Pan-fried pork and garlic chive dumplings with a delicate lace-crisp bottom skirt and rayu ponzu dip.",
    longDesc: "Thin dumpling skins packed with seasoned Berkshire pork mince, napa cabbage, and Chinese chives. Pan-seared with a cornstarch slurry that produces an ultra-thin, crackling web skirt on the bottom. Served with spicy chili rayu ponzu.",
    specs: {
      "Count": "6 Dumplings",
      "Filling": "Berkshire Pork, Garlic Chives, Napa Cabbage, Ginger",
      "Dip": "Rayu Sesame Chili Ponzu",
      "Allergens": "Wheat, Soy, Sesame",
    },
    reviews: [
      { author: "Tom H.", rating: 5, date: "1 week ago", comment: "The crispy lace skirt is so satisfying to crack into! Juicy filling." }
    ]
  },

  // --- PANTRY & DIY KITS ---
  {
    id: "p-ramen-kit",
    name: "Sunakko DIY 4-Pack Ramen Meal Kit",
    jpName: "宅麺 自宅ラーメンセット",
    category: "pantry",
    price: 38.00,
    originalPrice: 44.00,
    rating: 4.95,
    reviewsCount: 230,
    badge: "Nationwide Best",
    dietary: ["Nationwide Ship 📦", "Bestseller ⭐"],
    prepTime: "Ready in 10 min",
    inStock: 22,
    visualType: "pantry-kit",
    hue: 350,
    shortDesc: "Everything to recreate Sunakko ramen at home: 4 noodle bundles, 4 concentrated broth pouches, chashu & menma.",
    longDesc: "Bring the counter experience straight into your home kitchen. This insulated kit contains 4 servings of fresh semi-dried artisan noodles, flash-frozen craft broth bases (2 Tonkotsu, 2 Black Garlic Miso), vacuum-sealed braised chashu slices, seasoned menma bamboo, and nori sheets.",
    specs: {
      "Servings": "4 complete bowls (2 Tonkotsu + 2 Black Garlic Miso)",
      "Shelf Life": "Keeps refrigerated for 14 days, or frozen for 3 months",
      "Cook Time": "Under 10 minutes at home",
      "Shipping": "Shipped cold in recyclable thermal insulation",
    },
    reviews: [
      { author: "Nathan G.", rating: 5, date: "Yesterday", comment: "Shipped cold to my door in 2 days. The restaurant flavor at home is surreal!" },
      { author: "Elena M.", rating: 5, date: "1 week ago", comment: "Such high quality. Made dinner for the family and everyone was raving." }
    ]
  },
  {
    id: "p-chili-crunch",
    name: "House Umami Chili Crunch Oil (250g)",
    jpName: "自家製 食べるラー油",
    category: "pantry",
    price: 11.50,
    rating: 4.9,
    reviewsCount: 312,
    badge: "Cult Favorite",
    dietary: ["Vegetarian 🌱", "Bestseller ⭐", "Nationwide Ship 📦"],
    prepTime: "Shelf-stable",
    inStock: 65,
    visualType: "pantry-chili",
    hue: 5,
    shortDesc: "Slow-infused chili oil packed with crispy fried garlic flakes, shallots, sesame, roasted soybeans & togarashi.",
    longDesc: "The condiment you will put on literally everything: eggs, rice, noodles, dumplings, pizza, or straight on avocado toast. Made in small artisanal batches with non-GMO sesame and rapeseed oil, whole toasted spices, and deeply browned crispy garlic.",
    specs: {
      "Net Weight": "250g (8.8 oz) Glass Jar",
      "Ingredients": "Fried Garlic, Shallots, Sesame Seeds, Chili Peppers, Soy Sauce, Shiitake Powder, Sea Salt",
      "Spice Level": "Mild to Medium (Crispy Crunch)",
      "Dietary": "Vegan / Non-GMO",
    },
    reviews: [
      { author: "Sophie W.", rating: 5, date: "3 days ago", comment: "I am on my 4th jar. It is crunchy, savory, fragrant, and dangerously addictive." },
      { author: "Julian C.", rating: 5, date: "2 weeks ago", comment: "Better than any grocery store brand by miles. Incredible crispiness." }
    ]
  },
  {
    id: "p-kyoto-shoyu",
    name: "Kyoto Barrel-Aged Shoyu Tare & Dashi",
    jpName: "京都 熟成醤油タレ",
    category: "pantry",
    price: 14.00,
    rating: 4.8,
    reviewsCount: 67,
    badge: "Artisan",
    dietary: ["Vegetarian 🌱", "Nationwide Ship 📦"],
    prepTime: "Shelf-stable",
    inStock: 30,
    visualType: "pantry-shoyu",
    hue: 30,
    shortDesc: "Aged 18 months in cedar barrels with kombu dashi. The secret soul behind all our ramen broths and marinades.",
    longDesc: "Crafted by a 200-year-old brewery in Kyoto exclusively for Sunakko. Fermented in century-old cedar kegs with non-GMO whole soybeans, roasted wheat, and Hokkaido kombu. Ideal as ramen seasoning tare, sashimi dip, or steak finishing drizzle.",
    specs: {
      "Volume": "300ml Glass Bottle with Pour Spout",
      "Aging": "18 Months in Sugi Cedar Vats",
      "Origin": "Kyoto Prefecture, Japan",
    },
    reviews: [
      { author: "Marcus D.", rating: 5, date: "1 week ago", comment: "Rich and complex without being overwhelmingly salty. You taste the oak notes." }
    ]
  },
  {
    id: "p-furikake-trio",
    name: "Artisan Furikake Seasoning Trio",
    jpName: "職人 ふりかけ 3種揃え",
    category: "pantry",
    price: 13.50,
    rating: 4.75,
    reviewsCount: 82,
    badge: "Gift Idea",
    dietary: ["Nationwide Ship 📦"],
    prepTime: "Shelf-stable",
    inStock: 45,
    visualType: "pantry-furikake",
    hue: 45,
    shortDesc: "Three glass shaker jars: Roasted Nori Sesame, Wasabi Herb Crunch, and Shiso Bonito Plum.",
    longDesc: "Elevate your morning rice, noodle dishes, salads, and popcorn. Contains three distinct hand-blended Japanese rice seasonings: Golden Roasted Nori Sesame, Spicy Wasabi Crunch, and Tangy Shiso Umami.",
    specs: {
      "Contents": "3 x 50g Glass Shaker Bottles",
      "Varieties": "1. Nori Sesame, 2. Wasabi Crunch, 3. Shiso Bonito Plum",
      "Packaging": "Recycled Kraft Gift Box",
    },
    reviews: [
      { author: "Aoi T.", rating: 5, date: "4 days ago", comment: "The wasabi one has the perfect gentle kick! Great gift for foodies." }
    ]
  },

  // --- CRAFT DRINKS ---
  {
    id: "d-ramune-pack",
    name: "Classic Marble Ramune Soda (6-Pack)",
    jpName: "懐かしの ラムネ 6本セット",
    category: "drinks",
    price: 14.00,
    rating: 4.9,
    reviewsCount: 154,
    badge: "Iconic",
    dietary: ["Bestseller ⭐", "Vegetarian 🌱"],
    prepTime: "Chilled",
    inStock: 50,
    visualType: "drink-ramune",
    hue: 195,
    shortDesc: "The iconic Japanese codd-neck glass bottle with the glass marble inside! 6 fizzy lemon-lime sodas.",
    longDesc: "Nothing matches the satisfying pop of pushing the glass marble into the bottle. Crisp, effervescent lemon-lime soda crafted with real cane sugar and pure spring water. Served ice-cold.",
    specs: {
      "Pack": "6 x 200ml Codd-neck Glass Bottles",
      "Flavor": "Original Citrus Lemon-Lime",
      "Fun fact": "Includes traditional push opener cap for each bottle",
    },
    reviews: [
      { author: "Jenna B.", rating: 5, date: "5 days ago", comment: "So nostalgic and refreshing. Opening them is half the fun!" }
    ]
  },
  {
    id: "d-ceremonial-matcha",
    name: "Ceremonial Uji Matcha Tin (40g)",
    jpName: "宇治 御抹茶 祥風",
    category: "drinks",
    price: 24.00,
    rating: 4.95,
    reviewsCount: 188,
    badge: "First Harvest",
    dietary: ["Vegetarian 🌱", "Nationwide Ship 📦", "Staff Pick 💖"],
    prepTime: "Whisk with 70°C water",
    inStock: 28,
    visualType: "drink-matcha",
    hue: 125,
    shortDesc: "First-harvest ceremonial grade stone-ground green tea from Uji, Kyoto. Vivid emerald green and zero bitterness.",
    longDesc: "Shaded for 25 days before harvest in the misty hills of Uji, Kyoto. Hand-picked young leaves are gently de-veined (tencha) and stone-ground by granite mills at 40g per hour. Whisk with warm water for a creamy jade froth with rich umami.",
    specs: {
      "Weight": "40g Airtight Steel Caddy",
      "Grade": "Top Tier Ceremonial Grade",
      "Origin": "Uji, Kyoto Prefecture",
      "Notes": "Sweet pea, white chocolate, rich velvety crema",
    },
    reviews: [
      { author: "Clara V.", rating: 5, date: "2 days ago", comment: "The color is so vibrant electric green! Zero bitterness, tastes sweet on its own." },
      { author: "Patrick S.", rating: 5, date: "1 week ago", comment: "Makes the dreamiest iced oat milk matcha lattes ever." }
    ]
  },
  {
    id: "d-yuzu-sparkler",
    name: "Sparkling Kochi Yuzu Soda (4-Pack)",
    jpName: "高知名産 柚子ソーダ 4缶",
    category: "drinks",
    price: 12.50,
    rating: 4.85,
    reviewsCount: 92,
    badge: "Citrus Crisp",
    dietary: ["Vegetarian 🌱", "Bestseller ⭐"],
    prepTime: "Ice cold",
    inStock: 38,
    visualType: "drink-yuzu",
    hue: 45,
    shortDesc: "Tart, floral Kochi yuzu juice lightly carbonated with wildflower honey and spring water.",
    longDesc: "Yuzu is Japan's revered citrus fruit, boasting notes of mandarin orange, Meyer lemon, and white blossoms. Lightly sparkling, sweetened only with raw wildflower honey. Cuts through rich ramen broths cleanly.",
    specs: {
      "Pack": "4 x 250ml Aluminum Cans",
      "Juice": "12% Pure Kochi Prefecture Yuzu Juice",
      "Sugar": "Lightly sweetened with natural honey",
    },
    reviews: [
      { author: "Liam K.", rating: 5, date: "3 days ago", comment: "The floral citrus aroma is unmatched. Super refreshing with the spicy ramen." }
    ]
  },
  {
    id: "d-sakura-cooler",
    name: "Sakura Blossom Rose Cooler",
    jpName: "桜と薔薇の 冷茶",
    category: "drinks",
    price: 4.75,
    rating: 4.7,
    reviewsCount: 75,
    badge: "Seasonal",
    dietary: ["Vegetarian 🌱", "New Arrival ✨"],
    prepTime: "Freshly poured",
    inStock: 25,
    visualType: "drink-sakura",
    hue: 335,
    shortDesc: "Cold-steeped salted cherry blossoms, organic hibiscus, lychee nectar and rose petals over crushed ice.",
    longDesc: "Our seasonal tribute to cherry blossom season. Pickled yaezakura sakura petals are steeped with organic hibiscus flower for a ruby-pink natural hue, infused with sweet lychee juice and rose water.",
    specs: {
      "Serving": "16 oz iced cup with real edible sakura petals",
      "Flavor": "Floral, delicate sweet-tart, lychee finish",
    },
    reviews: [
      { author: "Samantha P.", rating: 5, date: "Yesterday", comment: "Looks gorgeous and tastes subtle, not overly perfumed. So aesthetic!" }
    ]
  },

  // --- APPAREL & MERCH ---
  {
    id: "m-ceramic-bowl",
    name: "Sunakko Artisan Ceramic Ramen Bowl & Spoon",
    jpName: "信楽焼 特製ラーメン丼と蓮華",
    category: "merch",
    price: 28.00,
    originalPrice: 34.00,
    rating: 4.95,
    reviewsCount: 160,
    badge: "Collector",
    dietary: ["Nationwide Ship 📦", "Staff Pick 💖"],
    prepTime: "Ready to ship",
    inStock: 16,
    visualType: "merch-bowl",
    hue: 320,
    shortDesc: "Heavyweight matte blush & midnight plum glazed stoneware bowl with carved chopstick notch and matching soup spoon.",
    longDesc: "Custom thrown stoneware fired at 1280°C for exceptional durability and heat retention. Features our signature two-tone glaze: speckled sakura blush outside with ink plum inside. Built-in resting notch holds your chopsticks neatly.",
    specs: {
      "Capacity": "1,100 ml (37 oz) - Large Ramen Size",
      "Material": "Lead-free, Food-grade High-fire Stoneware",
      "Care": "Microwave and Dishwasher Safe",
      "Included": "1 Stoneware Bowl + 1 Matching Glazed Soup Spoon (Renge)",
    },
    reviews: [
      { author: "Oliver F.", rating: 5, date: "3 days ago", comment: "The weight and feel are exquisite. My ramen feels like high dining at home." },
      { author: "Grace T.", rating: 5, date: "2 weeks ago", comment: "Packaged securely, zero chips. The chopstick notch is a genius touch!" }
    ]
  },
  {
    id: "m-hoodie",
    name: "Sunakko 'Midnight Ramen' Heavy Hoodie",
    jpName: "夜鳴きそば ヘビーウェイト パーカー",
    category: "merch",
    price: 58.00,
    rating: 4.9,
    reviewsCount: 95,
    badge: "Limited Drop",
    dietary: ["Nationwide Ship 📦", "New Arrival ✨"],
    prepTime: "Ships in 24h",
    inStock: 14,
    visualType: "merch-hoodie",
    hue: 340,
    shortDesc: "450gsm ultra-heavy French terry cotton hoodie in faded sakura pink with embroidered chest logo & street art back graphic.",
    longDesc: "Crafted from 100% heavyweight comb-spun cotton French terry. Features a vintage wash pink colorway, double-lined thick hood that stands tall, embroidered Sunakko kanji on the chest, and an original retro-futuristic Tokyo street noodle cart back illustration.",
    specs: {
      "Fabric": "450 GSM (13.3 oz) 100% Organic French Terry Cotton",
      "Fit": "Boxy, relaxed Japanese streetwear fit",
      "Details": "Embroidered chest detail, screen-printed rear illustration, ribbed cuffs",
      "Sizes Available": "S, M, L, XL, XXL",
    },
    reviews: [
      { author: "Derek C.", rating: 5, date: "4 days ago", comment: "Thickest hoodie I own! Cozy hood and the embroidery is flawless." },
      { author: "Mia L.", rating: 5, date: "1 week ago", comment: "Love the oversized drape. Color is a subtle muted pink that goes with everything." }
    ]
  },
  {
    id: "m-chopsticks-set",
    name: "Natural Ironwood Chopsticks & Rest (4 Pairs)",
    jpName: "銘木 天然木箸 4膳セット",
    category: "merch",
    price: 16.00,
    rating: 4.8,
    reviewsCount: 114,
    badge: "Eco Craft",
    dietary: ["Nationwide Ship 📦"],
    prepTime: "Ready to ship",
    inStock: 40,
    visualType: "merch-chopsticks",
    hue: 35,
    shortDesc: "Four pairs of carved natural ironwood chopsticks with laser-etched cherry blossom motifs and ceramic dumpling rests.",
    longDesc: "Carved from sustainably harvested Japanese ironwood and finished with natural beeswax. Hexagonal upper grips prevent rolling on tables, with micro-grooved tips for easily picking up slippery noodles and edamame. Comes with 4 cute ceramic dumpling-shaped rests.",
    specs: {
      "Length": "23.5 cm (9.25 in)",
      "Material": "Natural Ironwood + Beeswax Finish",
      "Set Includes": "4 Chopsticks Pairs + 4 Ceramic Dumpling Rests in a Gift Box",
    },
    reviews: [
      { author: "Hannah S.", rating: 5, date: "5 days ago", comment: "The noodle grip is fantastic! The little dumpling rests make me smile every meal." }
    ]
  },
  {
    id: "m-tote-bag",
    name: "Sunakko Heavy Canvas Market Tote",
    jpName: "特製 帆布 お買い物バッグ",
    category: "merch",
    price: 18.00,
    rating: 4.85,
    reviewsCount: 78,
    badge: "Eco Friendly",
    dietary: ["Nationwide Ship 📦"],
    prepTime: "Ready to ship",
    inStock: 35,
    visualType: "merch-tote",
    hue: 330,
    shortDesc: "14oz unbleached natural canvas bag with interior bottle holder sleeve, zip pocket, and screen-printed mascot.",
    longDesc: "Built for heavy grocery runs and weekend strolls. Reinforced cross-stitched handles with a 10-inch drop that fits comfortably over winter coats. Features a zippered inner security pocket and an elastic bottle loop that keeps your Ramune upright.",
    specs: {
      "Dimensions": "38cm H x 42cm W x 12cm D",
      "Material": "14oz 100% Unbleached Heavyweight Cotton Canvas",
      "Features": "Inner zippered phone pocket + interior drink bottle holster",
    },
    reviews: [
      { author: "Zoe K.", rating: 5, date: "1 week ago", comment: "Sturdy fabric, the bottle pocket inside is such a smart feature!" }
    ]
  },

  // --- SWEETS & TREATS ---
  {
    id: "s-mochi-box",
    name: "Artisan Daifuku Mochi Box (6 Flavors)",
    jpName: "手作り 大福餅 6種詰め合わせ",
    category: "sweets",
    price: 15.00,
    rating: 4.95,
    reviewsCount: 204,
    badge: "Crowd Favorite",
    dietary: ["Vegetarian 🌱", "Bestseller ⭐"],
    prepTime: "Fresh daily",
    inStock: 25,
    visualType: "sweets-mochi",
    hue: 310,
    shortDesc: "Six handmade pillowy soft rice cakes: Uji Matcha, Sweet Strawberry, Black Sesame, Taro Cream, Yuzu, and Red Bean.",
    longDesc: "Pounded daily from Mochigome glutinous rice for that dreamy chewy, melt-in-the-mouth texture. Filled with smooth Hokkaido azuki red bean paste, fresh seasonal fruits, and real cream. Lightly dusted with roasted soy flour.",
    specs: {
      "Flavors Included": "Matcha Cream, Fresh Strawberry, Toasted Black Sesame, Silky Taro, Yuzu Citrus, Hokkaido Azuki",
      "Storage": "Enjoy within 3 days chilled, or freeze up to 1 month",
      "Allergens": "Dairy, Soy, Sesame",
    },
    reviews: [
      { author: "Kaitlyn M.", rating: 5, date: "Yesterday", comment: "Soft as clouds! The black sesame and taro flavors are out of this world." },
      { author: "Brandon S.", rating: 5, date: "3 days ago", comment: "Best mochi in town. The packaging makes it look like a luxury jewelry box." }
    ]
  },
  {
    id: "s-dango-skewer",
    name: "Hanami Tri-Color Dango (3 Skewers)",
    jpName: "花見団子 3本組",
    category: "sweets",
    price: 6.50,
    rating: 4.85,
    reviewsCount: 120,
    badge: "Traditional",
    dietary: ["Vegetarian 🌱"],
    prepTime: "Fresh daily",
    inStock: 30,
    visualType: "sweets-dango",
    hue: 330,
    shortDesc: "Three bamboo skewers of classic pink (sakura), white (sweet rice), and green (mugwort) chewy dumplings.",
    longDesc: "The quintessential Japanese seasonal confection symbolizing spring. The pink ball represents sakura cherry blossom buds, the white ball evokes winter snow melting away, and the green ball represents lush spring grass.",
    specs: {
      "Pack": "3 Skewers (9 dango balls total)",
      "Flavor": "Subtly sweet, chewy rice dumplings with hints of mugwort and cherry leaf",
      "Dietary": "Vegan / Gluten-Free Friendly",
    },
    reviews: [
      { author: "Yuki W.", rating: 5, date: "4 days ago", comment: "Tastes just like the tea house stalls in Kyoto during spring." }
    ]
  },
  {
    id: "s-dorayaki-stack",
    name: "Honey Castella Dorayaki Pancakes (3-Pack)",
    jpName: "極上 蜂蜜どら焼き 3個入り",
    category: "sweets",
    price: 7.50,
    rating: 4.8,
    reviewsCount: 89,
    badge: "Sweet Honey",
    dietary: ["Vegetarian 🌱"],
    prepTime: "Ready to eat",
    inStock: 35,
    visualType: "sweets-dorayaki",
    hue: 32,
    shortDesc: "Golden fluffy honey pancakes sandwiching slow-simmered chunky Hokkaido sweet red bean paste.",
    longDesc: "Baked on a smooth copper griddle using cage-free eggs, Japanese clover honey, and mirin for a soft castella sponge cake texture. Stuffed generously with simmered tsubuan sweet red bean paste.",
    specs: {
      "Quantity": "3 individually wrapped cakes",
      "Filling": "Slow-simmered Tsubuan Red Bean (Hokkaido Azuki)",
      "Allergens": "Egg, Wheat, Soy",
    },
    reviews: [
      { author: "Leo N.", rating: 5, date: "1 week ago", comment: "Pancakes are so fluffy and honey-sweet, bean filling has real texture." }
    ]
  }
];

export const COUPONS = {
  SAKURA10: { code: "SAKURA10", type: "percent", value: 10, desc: "10% off entire order" },
  YUMMY5: { code: "YUMMY5", type: "fixed", value: 5.00, desc: "$5.00 off orders over $25", minSpend: 25 },
  BENTO20: { code: "BENTO20", type: "percent", value: 20, desc: "20% off orders over $50", minSpend: 50 },
  FREESHIP: { code: "FREESHIP", type: "shipping", value: 0, desc: "Free standard delivery" },
};

export const money = (n) => "$" + Number(n || 0).toFixed(2);
