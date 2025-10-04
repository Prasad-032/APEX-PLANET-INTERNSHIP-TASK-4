const products = [
  { name: "Laptop", category: "electronics", price: 1200, rating: 4.5 },
  { name: "Book", category: "books", price: 20, rating: 4.8 },
  { name: "Headphones", category: "electronics", price: 100, rating: 4.2 },
  // ...add more
];

const list = document.getElementById('product-list');
const categoryFilter = document.getElementById('category-filter');
const sortSelect = document.getElementById('sort');

function renderProducts() {
  let filtered = [...products];
  if (categoryFilter.value) {
    filtered = filtered.filter(p => p.category === categoryFilter.value);
  }
  if (sortSelect.value === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortSelect.value === 'rating-desc') {
    filtered.sort((a, b) => b.rating - a.rating);
  }
  list.innerHTML = filtered.map(p =>
    `<div class="product">
      <h2>${p.name}</h2>
      <p>Category: ${p.category}</p>
      <p>Price: $${p.price}</p>
      <p>Rating: ${p.rating}</p>
    </div>`
  ).join('');
}

categoryFilter.onchange = renderProducts;
sortSelect.onchange = renderProducts;

renderProducts();