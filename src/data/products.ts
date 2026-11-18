import type { Category, Product } from '../types'

export const categories: { id: Category; label: string }[] = [
  { id: 'living-room', label: 'Living Room' },
  { id: 'bedroom', label: 'Bedroom' },
  { id: 'dining', label: 'Dining' },
  { id: 'carpets', label: 'Carpets' },
  { id: 'outdoor', label: 'Outdoor' },
  { id: 'kids', label: 'Kids Rooms' },
]

// TODO: add the product catalogue (aim for 24-36 products across all categories)
export const products: Product[] = []
