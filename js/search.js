const input = document.getElementById("searchInput");
const results = document.getElementById("results");

input.addEventListener("input", () => {

    const query = input.value.toLowerCase();

    const filtered = PRODUCTS.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

   results.innerHTML = filtered.map(product => `
  <div class="product-card"
       onclick="window.location.href='product.html?id=${product.id}'"
       style="cursor:pointer">

    <img src="../${product.images[0]}"
         alt="${product.name}"
         style="width:100%;height:320px;object-fit:cover;">

    <div style="padding:15px">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
    </div>

  </div>
`).join('');

});