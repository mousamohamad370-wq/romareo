import {
  Navigate
} from 'react-router-dom'

import {
  useAuth
} from '../../context/AuthContext'

function ProtectedRoute({
  children
}) {

  const {
    isAuthenticated,
    loading
  } = useAuth()

  /* LOADING */

  if (loading) {

    return (

      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '20px'
        }}
      >

        جاري التحميل...

      </div>

    )

  }

  /* NOT AUTHORIZED */

  if (!isAuthenticated) {

    return (
      <Navigate to="/login" />
    )

  }

  /* AUTHORIZED */

  return children
}

export default ProtectedRoute