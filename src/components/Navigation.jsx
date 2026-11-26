import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="mb-8 flex flex-wrap gap-x-6 gap-y-2 border-b border-gray-200 pb-3 text-sm"
    >
      <Link to="/dashboard" className="text-gray-700 hover:text-green-700">
        Dashboard
      </Link>
      <Link to="/marketplace" className="text-gray-700 hover:text-green-700">
        Marketplace
      </Link>
      <Link to="/my-products" className="text-gray-700 hover:text-green-700">
        My Products
      </Link>
      <Link to="/orders" className="text-gray-700 hover:text-green-700">
        Orders
      </Link>
      <Link to="/login" className="text-gray-700 hover:text-green-700">
        Login
      </Link>
    </nav>
  )
}

export default Navigation
