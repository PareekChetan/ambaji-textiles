// =============================================
// Ambaji textiles – Home Page Scripts
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  // Featured / New Arrivals
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 4);
  const featuredEl = document.getElementById('featuredGrid');
  if (featuredEl) featuredEl.innerHTML = featured.map(buildProductCard).join('');

  // Bestsellers
  const best = PRODUCTS.filter(p => p.bestseller).slice(0, 4);
  const bestEl = document.getElementById('bestsellersGrid');
  if (bestEl) bestEl.innerHTML = best.map(buildProductCard).join('');
});
