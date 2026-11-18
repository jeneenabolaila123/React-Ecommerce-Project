# Furniture Store: React + TypeScript E-Commerce Website

A responsive, frontend-only e-commerce website for a furniture and home store, built with React and TypeScript.

> Store name, branding and full description: coming soon.

## Team

| Member | Responsibilities |
|---|---|
| Mohammad Kassem | Home page, products listing, search / filters / sorting, product cards |
| Louay Abou Merhi | Shopping cart, wishlist, shared state & localStorage |
| Jeneen Abou Laila | Checkout page, form validation, order confirmation |

## Features

- [ ] Home page: hero, featured products, categories
- [ ] Products page: search, category & price filters, price sorting
- [ ] Shopping cart: quantities, remove, clear, totals (persists after refresh)
- [ ] Wishlist: add/remove, move to cart, no duplicates (persists after refresh)
- [ ] Checkout: delivery form with validation, order reference & summary

## Technologies

- React + TypeScript (Vite)
- React Router
- Context API + useReducer
- localStorage
- Zod
- Vitest + React Testing Library

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
git clone https://github.com/mmk119/React-Ecommerce-Project.git
cd React-Ecommerce-Project
npm install
npm run dev
```

Open the link printed in the terminal (usually http://localhost:5173).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm test` | Run the automated tests |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── assets/images/     product & banner images
├── components/
│   ├── layout/        Header, Footer, Layout
│   └── product/       ProductCard, ProductGrid
├── context/           CartContext, WishlistContext
├── data/              products.ts (product catalogue)
├── hooks/             useLocalStorage
├── pages/             Home, Products, Cart, Wishlist, Checkout, NotFound
├── schemas/           checkoutSchema (Zod)
├── tests/             test setup and automated tests
├── types/             shared TypeScript types
└── utils/             formatPrice, filterProducts
```

## Git workflow

- `main`: final, stable version (no direct pushes)
- `dev`: integration branch
- `feature/*`: one branch per developer/feature, merged into `dev` through reviewed pull requests
