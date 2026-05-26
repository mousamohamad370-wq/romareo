import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

/* LAYOUT */

import Layout from './components/layout/Layout'

/* PAGES */

import Home from './pages/Home'

import ServiceDetails
from './pages/ServiceDetails'

function App() {

  return (

    <BrowserRouter>

      <Layout>

        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* SERVICE DETAILS */}

          <Route
            path="/service/:id"
            element={<ServiceDetails />}
          />

        </Routes>

      </Layout>

    </BrowserRouter>

  )
}

export default App