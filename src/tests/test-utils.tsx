import { render } from '@testing-library/react'
import type { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'
import { WishlistProvider } from '../context/WishlistContext'

// Render a component with the router and both providers, like in main.tsx
export function renderWithProviders(ui: ReactElement, route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <CartProvider>
        <WishlistProvider>{ui}</WishlistProvider>
      </CartProvider>
    </MemoryRouter>,
  )
}
