// Shared types used by the whole team.
// Agree on changes together before editing: every page depends on these.

export type Category =
  | 'living-room'
  | 'bedroom'
  | 'dining'
  | 'carpets'
  | 'outdoor'
  | 'kids'

export interface Product {
  id: string
  name: string
  category: Category
  price: number // current price in USD
  oldPrice?: number // original price, shows a discount badge when set
  image: string
  description: string
  featured?: boolean // shown in the Home page "Featured" section
}

export interface CartItem {
  product: Product
  quantity: number
}

// Delivery form fields (draft, adjust to match the checkout form)
export interface DeliveryInfo {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  notes?: string
}

export interface Order {
  reference: string
  items: CartItem[]
  delivery: DeliveryInfo
  subtotal: number
  deliveryFee: number
  total: number
  createdAt: string // ISO date
}

// Contract for the cart context (implemented in src/context/CartContext.tsx)
export interface CartContextValue {
  items: CartItem[]
  cartCount: number // total quantity, shown on the header icon
  subtotal: number
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
  clearCart: () => void
}

// Contract for the wishlist context (implemented in src/context/WishlistContext.tsx)
export interface WishlistContextValue {
  items: Product[]
  wishlistCount: number
  isInWishlist: (productId: string) => boolean
  toggleWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
}
