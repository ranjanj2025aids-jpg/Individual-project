
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">

      <Link to="/" className="text-2xl font-bold text-green-700">
        DirectMarket
      </Link>

      <div className="flex gap-8 font-medium text-gray-700">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/login" className="hover:text-green-600">Login</Link>
        <Link to="/register" className="hover:text-green-600">Register</Link>
      </div>

    </nav>
  );
}

export default Navigation;
