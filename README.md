___________E-COMMERCE-PRODUCT-CATALOG______________

This is a Next.js-based Product Catalog App where users can browse products, view details, and add items to their shopping cart. The app is built with Material UI, React Query, and Jotai for state management.

________FEATURES___________

✔️ View Product Listings – Display products with images, prices, and ratings.
✔️ Filter by Category – Browse items by categories like electronics, clothing, etc.
✔️ Sort by Price/Rating – Easily sort products by price or customer ratings.
✔️ Product Details Page – See detailed product descriptions and reviews.
✔️ Shopping Cart – Add, remove, and adjust quantities of products in the cart.
✔️ Dark Mode Support – Switch between light and dark themes.

_______API-INTEGRATION____________

This project fetches product data from the Fake Store API:

📌 Base URL: https://fakestoreapi.com

GET /products → Fetch all products
GET /products/{id} → Fetch product details
GET /products/category/{category} → Fetch products by category

________TECH STACK___________

Next.js (App Router) – For server-side rendering & routing
Material UI – Beautiful UI components
React Query – Efficient API data fetching & caching
Jotai – Lightweight global state management
TypeScript – Strongly typed JavaScript

_______HOW THE SHOPPING CART WORKS_______

Products are stored in Jotai state.
Changes (add/remove/update) reflect instantly using React state.
The cart data persists in localStorage, so it remains even after refresh.



