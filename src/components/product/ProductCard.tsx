import type { Product } from '../../types'

interface ProductCardProps {
  product: Product
}

// TODO: image, name, category, price (+ old price / discount), Add to Cart, wishlist toggle
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <h3>{product.name}</h3>
    </article>
  )
}
