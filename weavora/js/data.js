// =============================================
// Ambaji textiles – Product Data
// Replace SVG placeholders with real product images
// =============================================

const PRODUCTS = [
  {
    id: 1,
    name: "Cotton doriyan saree",
    weave: "Pure Cotton · India",
    price: 450,
    originalPrice: null,
    badge: "new",
    category: "cotton",
    tags: ["cotton", "handblock", "new"],
    description: "Comfortable pure cotton saree suitable for daily wear and special occasions.",

    details: ["Fabric: cotton doriyan", "Length: 6.30 metres + 90cm blouse piece", "Wash Care: Gentle machine wash, cold water", "Dye: Azo-free natural indigo"],
    images: ["images/cotton.jpg"],
    colors: ["#1B4B7A", "#2C6FAC"],
    inStock: true,
    featured: true,
    color: "#1B4B7A",
    gradient: "linear-gradient(135deg, #1B4B7A 0%, #2C3E50 100%)"
  },
  {
  id: 2,
  name: "Linen cotton ",
  weave: "Pure Cotton · India",
  price: 500,
  originalPrice: 10000,
  badge: "sale",
  category: "cotton",
  tags: ["cotton", "sale"],

  description: "Graceful blue and ivory saree featuring elegant geometric prints and a stylish border. Lightweight, comfortable, and perfect for daily wear, office wear, and special occasions.",

  details: [
    "Fabric: Pure Cotton",
    "Length: 6.30 metres + blouse piece",
    "Wash Care: Gentle Hand Wash"
  ],

  images: ["images/cotton2.jpg"],

  inStock: true,
  featured: true
},
  {
  id: 3,
  name: "Silk Jacquard Saree",
  weave: "Silk Jacquard · India",
  price: 480,
  originalPrice: null,
  badge: "new",
  category: "silk",
  tags: ["silk", "new"],

  description: "Elegant silk jacquard saree with rich woven patterns and a luxurious finish.",

  details: [
    "Fabric: Silk Jacquard",
    "Length: 6.30 metres + blouse piece",
    "Wash Care: Dry Clean Only"
  ],

  images: ["images/silk1.jpg"],

  inStock: true,
  featured: true,
  bestseller: true
},
  {
  id: 4,
  name: "Linen Cotton Saree Sale",
  weave: "Pure Cotton · India",
  price: 500,
  originalPrice: 750,
  badge: "sale",

  category: "linen",
  tags: ["linen", "sale"],

  description: "Crafted from premium pure linen cotton, this saree offers the perfect blend of softness, breathability, and elegance. Its lightweight texture and natural drape make it ideal for everyday comfort as well as special occasions. Designed for modern women who appreciate timeless style and effortless grace.",

  details: [
    "Fabric: Linen cotton",
    "Length: 6.30 metres + blouse piece",
    "Wash Care: Gentle Wash"
  ],

  images: ["images/cotton3.jpg"],

  inStock: true,
  featured: true
},
  {
  id: 5,
  name: "Silk Jacquard Saree",
  weave: "Silk Jacquard · India",
  price: 500,
  originalPrice: 750,
  badge: "sale",

  category: "silk",
  tags: ["silk", "sale"],

  description: "A luxurious Silk Jacquard saree featuring intricate woven patterns and a rich texture. Crafted with fine silk threads, it offers an elegant drape and timeless appeal, making it perfect for weddings, festive celebrations, and special occasions.",

  details: [
    "Fabric: Silk Jacquard",
    "Length: 6.30 metres + blouse piece",
    "Texture: Rich Woven Jacquard",
    "Occasion: Wedding, Party & Festive Wear"
  ],

  images: ["images/silk2.jpg"],

  inStock: true,
  bestseller: true
  
},
  {
    id: 6,
    name: "Midnight Kalamkari Silk",
    weave: "Pen Kalamkari · Srikalahasti",
    price: 4199,
    originalPrice: null,
    badge: null,
    category: "silk",
    tags: ["silk", "handblock"],
    description: "Hand-painted pen Kalamkari on charcoal silk. Each motif — peacocks, vines, temple pillars — is drawn freehand by master craftspeople in Andhra Pradesh.",
    details: ["Fabric: Raw Silk", "Length: 5.5 metres + 80cm blouse piece", "Wash Care: Dry clean recommended", "Technique: Pen Kalamkari (hand-painted)"],
    images: ["img6"],
    color: "#1C1C3A",
    gradient: "linear-gradient(135deg, #1C1C3A 0%, #34344E 60%, #C4956A 100%)",
    inStock: true,
    bestseller: true
  },
  {
    id: 7,
    name: "Blush Mul Mul Cotton",
    weave: "Mul Mul · Rajasthan",
    price: 1299,
    originalPrice: null,
    badge: "new",
    category: "cotton",
    tags: ["cotton", "new"],
    description: "Feather-soft mul mul cotton in dusky blush with a hand block border in terracotta. So light it feels like wearing a cloud.",
    details: ["Fabric: Double-thread Mul Mul Cotton", "Length: 5.5 metres + 80cm blouse piece", "Wash Care: Machine wash, cold", "Dye: Azo-free"],
    images: ["img7"],
    color: "#D4A0A0",
    gradient: "linear-gradient(135deg, #D4A0A0 0%, #C47A7A 100%)",
    inStock: true,
    bestseller: true
  },
  {
    id: 8,
    name: "Forest Green Maheshwari",
    weave: "Handloom Maheshwari · Madhya Pradesh",
    price: 2899,
    originalPrice: null,
    badge: null,
    category: "silk",
    tags: ["silk", "chanderi"],
    description: "Reversible silk-cotton Maheshwari with characteristic temple border in gold. The weave is so fine it catches light at every angle.",
    details: ["Fabric: Silk-Cotton Maheshwari", "Length: 5.5 metres + 80cm blouse piece", "Wash Care: Gentle machine wash", "Weave: Handloom"],
    images: ["img8"],
    color: "#1B4D2E",
    gradient: "linear-gradient(135deg, #1B4D2E 0%, #2E7D52 100%)",
    inStock: true,
    bestseller: false
  },

];
// Colour swatches for filter
const CATEGORIES = [
  { id: "all", label: "All Sarees" },
  { id: "cotton", label: "Cotton" },
  { id: "silk", label: "Silk" },
  { id: "linen", label: "Linen" },
  { id: "chanderi", label: "Chanderi" },
  { id: "handblock", label: "Hand Block" },
  { id: "banarasi", label: "Banarasi" },
  { id: "new", label: "New Arrivals" },
  { id: "sale", label: "Sale" }
];

function getSVGForProduct(p) {
  return `
    <svg viewBox="0 0 220 290" xmlns="http://www.w3.org/2000/svg" class="prod-svg">
      <defs>
        <linearGradient id="g${p.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${p.gradient.match(/#[A-Fa-f0-9]{6}/g)[0]};stop-opacity:1"/>
          <stop offset="100%" style="stop-color:${p.gradient.match(/#[A-Fa-f0-9]{6}/g)[1] || p.gradient.match(/#[A-Fa-f0-9]{6}/g)[0]};stop-opacity:1"/>
        </linearGradient>
      </defs>
      <rect width="220" height="290" fill="url(#g${p.id})" rx="2"/>
      <rect x="0" y="250" width="220" height="40" fill="rgba(0,0,0,0.25)"/>
      <rect x="0" y="252" width="220" height="1.5" fill="rgba(255,255,255,0.3)"/>
      <!-- Motif circles -->
      <circle cx="160" cy="60" r="22" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.2"/>
      <circle cx="160" cy="60" r="14" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="0.8"/>
      <circle cx="160" cy="60" r="5" fill="rgba(255,255,255,0.2)"/>
      <circle cx="60" cy="140" r="16" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
      <circle cx="60" cy="140" r="8" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="0.7"/>
      <!-- Pallu lines -->
      <line x1="0" y1="200" x2="220" y2="200" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
      <line x1="0" y1="208" x2="220" y2="208" stroke="rgba(255,255,255,0.12)" stroke-width="0.7"/>
      <!-- Label -->
      <text x="110" y="272" text-anchor="middle" font-family="serif" font-size="7" fill="rgba(255,255,255,0.55)" letter-spacing="2">Ambaji textiles</text>
    </svg>`;
}
