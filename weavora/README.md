# Ambaji textiles – Saree E-Commerce Website

## How to Use This Website

### Open Locally
Just open `index.html` in any modern browser. No server needed for basic browsing.

### Upload Online
Upload the entire folder to any web host:
- **GitHub Pages** (free): Push to a GitHub repo → Settings → Pages → Deploy from main
- **Netlify** (free): Drag & drop the `Ambaji textiles` folder at netlify.com/drop
- **Vercel** (free): Run `npx vercel` in this folder
- **cPanel / traditional hosting**: Upload via File Manager, set index.html as entry point

---

## File Structure

```
Ambaji textiles/
├── index.html              ← Homepage
├── css/
│   ├── style.css           ← Global styles
│   ├── shop.css            ← Shop page styles
│   ├── product.css         ← Product detail styles
│   ├── cart.css            ← Cart page styles
│   └── checkout.css        ← Checkout page styles
├── js/
│   ├── data.js             ← All product data (EDIT THIS)
│   ├── cart.js             ← Cart logic + shared functions
│   └── home.js             ← Homepage product grid logic
└── pages/
    ├── shop.html           ← Product listing with filters
    ├── product.html        ← Product detail page
    ├── cart.html           ← Cart with promo codes
    ├── checkout.html       ← Multi-step checkout + payment
    ├── about.html          ← Our Story page
    └── ... (other pages)
```

---

## Adding Your Own Saree Products

Edit `js/data.js`. Each product looks like:

```javascript
{
  id: 9,                                    // Unique number
  name: "Your Saree Name",
  weave: "Weave type · Region",
  price: 1999,
  originalPrice: 2499,                     // null if no sale
  badge: "new",                            // "new", "sale", or null
  category: "cotton",                      // cotton/silk/linen/banarasi
  tags: ["cotton", "new"],
  description: "Your product description here.",
  details: ["Fabric: ...", "Length: ..."],
  color: "#8B4513",                        // Main colour hex
  gradient: "linear-gradient(135deg, #8B4513 0%, #C4956A 100%)",
  inStock: true,
  featured: true,                          // Shows on homepage
  bestseller: false
}
```

### Adding Real Product Images
Replace the SVG placeholders by adding image tags.
In `js/cart.js` → `buildProductCard()`, change:
```javascript
${getSVGForProduct(p)}
```
to:
```javascript
<img src="../images/${p.id}.jpg" alt="${p.name}"/>
```
Place your images in the `images/` folder named by product ID (1.jpg, 2.jpg etc.)

---

## Payment Integration

The checkout form is a UI demo. To take real payments, integrate:

1. **Razorpay** (recommended for India): https://razorpay.com/docs/
2. **PayU**: https://developer.payumoney.com/
3. **Cashfree**: https://docs.cashfree.com/

Add your Razorpay key in checkout.html and replace the `placeOrder()` function.

---

## Promo Codes (Demo)

Currently active codes for testing:
- `Ambaji textiles10` — 10% off
- `FIRST15`   — 15% off
- `HANDLOOM20` — 20% off

Edit in `pages/cart.html` → `applyPromo()` function.

---

## Customising the Brand

- **Brand name**: Search & replace "Ambaji textiles" across all files
- **Colours**: Edit CSS variables in `css/style.css` (`:root` block)
- **Fonts**: Change the Google Fonts link and `--font-display`/`--font-body` variables

---

@ 2026 Ambaji textiles. Built as a template — replace branding, products, and payment gateway before going live.
