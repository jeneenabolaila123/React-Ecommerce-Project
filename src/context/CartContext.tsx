import { createContext, useContext, type ReactNode } from 'react'
import type { CartContextValue } from '../types'

const CartContext = createContext<CartContextValue | null>(null)

// TODO: implement with useReducer + useLocalStorage.
// Placeholder values for now so the app runs while the cart is being built.
export function CartProvider({ children }: { children: ReactNode }) {
  const value: CartContextValue = {
    items: [],
    cartCount: 0,
    subtotal: 0,
    addToCart: () => {},
    removeFromCart: () => {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    clearCart: () => {},
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart(): CartContextValue {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside <CartProvider>')
  return context
}
