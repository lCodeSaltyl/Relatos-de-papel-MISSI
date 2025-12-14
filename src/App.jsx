import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Catalog from './pages/Catalog'

const AppLayout = ({ searchQuery, setSearchQuery, cartCount, addToCart }) => {
  const location = useLocation()
  const hideNavbar = location.pathname === '/' || location.pathname === '/login'

  return (
    <div className="app">
      {!hideNavbar && (
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} cartCount={cartCount} />
      )}
      <main className={`app__content ${hideNavbar ? 'app__content--full' : ''}`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog searchQuery={searchQuery} addToCart={addToCart} />} />
          <Route
            path="/book/:id"
            element={<div className="catalog__empty">Detalle del libro disponible muy pronto.</div>}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)

  const addToCart = () => {
    setCartCount((count) => count + 1)
  }

  return (
    <BrowserRouter>
      <AppLayout
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cartCount}
        addToCart={addToCart}
      />
    </BrowserRouter>
  )
}

export default App
