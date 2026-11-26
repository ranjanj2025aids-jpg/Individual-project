import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section>
      <h1 className="mb-3 text-2xl font-semibold text-gray-900">
        404 - Page not found
      </h1>
      <p className="mb-5 text-base text-gray-700">
        The page you are looking for does not exist.
      </p>
      <Link to="/dashboard" className="text-green-700 hover:underline">
        Return to dashboard
      </Link>
      <span className="px-2 text-gray-500">or</span>
      <Link to="/login" className="text-green-700 hover:underline">
        login
      </Link>
    </section>
  )
}

export default NotFound
