// =============================================
// Ambaji textiles – Cart System
// =============================================

const Cart = {
  items: JSON.parse(localStorage.getItem('Ambaji textiles_cart') || '[]'),

  save() {
    localStorage.setItem('Ambaji textiles_cart', JSON.stringify(this.items));
    this.updateBadge();
  },

  add(productId, qty = 1) {
    const existing = this.items.find(i => i.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      const product = PRODUCTS.find(p => p.id === productId);
      if (!product) return;
      this.items.push({ id: productId, qty, name: product.name, price: product.price });
    }
    this.save();
    showToast('Added to cart 🛒');
  },

  remove(productId) {
    this.items = this.items.filter(i => i.id !== productId);
    this.save();
  },

  updateQty(productId, qty) {
    const item = this.items.find(i => i.id === productId);
    if (item) {
      item.qty = qty;
      if (qty <= 0) this.remove(productId);
    }
    this.save();
  },

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  },

  getCount() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  },

  clear() {
    this.items = [];
    this.save();
  },

  updateBadge() {
    const badge = document.getElementById('cartCount');
    if (badge) {
      const count = this.getCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  }
};

// Initialize badge on load
document.addEventListener('DOMContentLoaded', () => Cart.updateBadge());

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function addToCart(id) {
  Cart.add(id);
}

function subscribeNewsletter() {
  const input = document.querySelector('.nl-input');
  if (input && input.value.includes('@')) {
    showToast('Thanks for subscribing! 🌿');
    input.value = '';
  } else {
    showToast('Please enter a valid email.');
  }
}

function buildProductCard(p) {
  return `
    <div class="product-card" onclick="location.href='${window.location.pathname.includes('/pages/') ? 'product.html' : 'pages/product.html'}?id=${p.id}'">
      <div class="product-img-wrap">
  ${p.badge ? `<span class="product-badge ${p.badge === 'sale' ? 'badge-sale' : 'badge-new'}">${p.badge === 'sale' ? 'SALE' : 'NEW'}</span>` : ''}

  <img
    src="${window.location.pathname.includes('/pages/') ? '../' : ''}${p.images[0]}"
    alt="${p.name}"
    style="
      width:100%;
      height:350px;
      object-fit:cover;
      display:block;
      border-radius:4px;
    "
  >
        <div class="product-actions">
          <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
          <button class="btn btn-ghost" onclick="event.stopPropagation(); wishlistAdd(${p.id})" title="Wishlist" style="flex:0;padding:10px 12px;">♡</button>
        </div>
      </div>
      <p class="product-name">${p.name}</p>
      <p class="product-weave">${p.weave}</p>
      <div class="product-price">
        ${p.originalPrice ? `<span class="original">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
        <span class="${p.originalPrice ? 'discounted' : ''}">₹${p.price.toLocaleString('en-IN')}</span>
      </div>
    </div>`;
}

function wishlistAdd(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (p) showToast(`${p.name} added to wishlist ♡`);
}
