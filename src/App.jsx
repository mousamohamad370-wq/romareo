import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

/* LAYOUT */

import Layout from './components/layout/Layout'

/* SHARED */

import ScrollToTop
from './components/shared/ScrollToTop'

/* PROTECTED */

import ProtectedRoute
from './components/protected/ProtectedRoute'

/* PAGES */

import Home from './pages/Home'

import Marketplace
from './pages/Marketplace'

import ServiceDetails
from './pages/ServiceDetails'

import CategoryPage
from './pages/CategoryPage'

import Login
from './pages/Login'

import Register
from './pages/Register'

import Wallet
from './pages/Wallet'

import Orders
from './pages/Orders'

import Profile
from './pages/Profile'

function App() {

  return (

    <BrowserRouter>

      <ScrollToTop />

      <Layout>

        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* MARKETPLACE */}

          <Route
            path="/marketplace"
            element={<Marketplace />}
          />

          {/* CATEGORY PAGE */}

          <Route
            path="/category/:slug"
            element={<CategoryPage />}
          />

          {/* SERVICE DETAILS */}

          <Route
            path="/service/:id"
            element={<ServiceDetails />}
          />

          {/* AUTH */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          {/* PROTECTED */}

          <Route
            path="/wallet"
            element={
              <ProtectedRoute>
                <Wallet />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

        </Routes>

      </Layout>

    </BrowserRouter>

  )
}

export default App