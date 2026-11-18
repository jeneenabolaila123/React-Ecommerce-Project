import { createContext, useContext, type ReactNode } from 'react'
import type { WishlistContextValue } from '../types'

const WishlistContext = createContext<WishlistContextValue | null>(null)

// TODO: implement with useReducer/useState + useLocalStorage (no duplicates).
// Placeholder values for now so the app runs while the wishlist is being built.
export function WishlistProvider({ children }: { children: ReactNode }) {
  const value: WishlistContextValue = {
    items: [],
    wishlistCount: 0,
    isInWishlist: () => false,
    toggleWishlist: () => {},
    removeFromWishlist: () => {},
  }
  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWishlist(): WishlistContextValue {
  const context = useContext(WishlistContext)
  if (!context) throw new Error('useWishlist must be used inside <WishlistProvider>')
  return context
}
