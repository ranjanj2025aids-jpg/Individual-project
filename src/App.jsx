import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Marketplace from './pages/Marketplace.jsx'
import MyProducts from './pages/MyProducts.jsx'
import NotFound from './pages/NotFound.jsx'
import Orders from './pages/Orders.jsx'
import './App.css'

function AppContent() {
  const { pathname } = useLocation()
  const isLoginPage = pathname === '/' || pathname === '/login'

  return (
    <main
      className={
        isLoginPage
          ? 'flex min-h-screen items-center justify-center px-4 py-8'
          : 'mx-auto min-h-screen w-full max-w-5xl px-4 py-8 sm:px-6'
      }
    >
      {!isLoginPage && <Navigation />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
