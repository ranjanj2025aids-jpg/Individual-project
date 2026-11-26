import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    if (!email.trim() || !password.trim()) {
      setError('Please enter both your email and password.')
      return
    }

    if (!event.currentTarget.elements.email.checkValidity()) {
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    navigate('/dashboard')
  }

  return (
    <section className="w-full max-w-sm">
      <h1 className="mb-2 text-2xl font-semibold text-gray-900">
        Farmers Direct Market Access
      </h1>
      <p className="mb-6 text-base text-gray-700">Login</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-gray-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded border border-gray-400 px-3 py-2 text-base outline-none focus:border-green-700"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-sm text-gray-800"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="w-full rounded border border-gray-400 px-3 py-2 text-base outline-none focus:border-green-700"
          />
        </div>

        {error && (
          <p role="alert" className="text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="rounded bg-green-700 px-5 py-2 text-base text-white hover:bg-green-800"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        This is a frontend demo; no account is verified.
      </p>
    </section>
  )
}

export default Login
