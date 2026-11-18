import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'

export default function Header() {
  const { cartCount } = useCart()
  const { wishlistCount } = useWishlist()

  return (
    <header className="header">
      <Link to="/" className="logo">
        Store Name
      </Link>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/wishlist">Wishlist ({wishlistCount})</NavLink>
        <NavLink to="/cart">Cart ({cartCount})</NavLink>
      </nav>
    </header>
  )
}
