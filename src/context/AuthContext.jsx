import {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react'

/* CONTEXT */

const AuthContext =
  createContext()

/* PROVIDER */

export function AuthProvider({
  children
}) {

  /* USER STATE */

  const [user, setUser] =
    useState(null)

  const [loading, setLoading] =
    useState(true)

  /* LOAD USER */

  useEffect(() => {

    const storedUser =
      localStorage.getItem(
        'romario-user'
      )

    if (storedUser) {

      setUser(
        JSON.parse(storedUser)
      )

    }

    setLoading(false)

  }, [])

  /* LOGIN */

  const login = (userData) => {

    setUser(userData)

    localStorage.setItem(
      'romario-user',
      JSON.stringify(userData)
    )

  }

  /* REGISTER */

  const register = (userData) => {

    setUser(userData)

    localStorage.setItem(
      'romario-user',
      JSON.stringify(userData)
    )

  }

  /* LOGOUT */

  const logout = () => {

    setUser(null)

    localStorage.removeItem(
      'romario-user'
    )

  }

  /* VALUES */

  const values = {

    user,

    loading,

    isAuthenticated:
      !!user,

    login,

    register,

    logout
  }

  return (

    <AuthContext.Provider
      value={values}
    >

      {children}

    </AuthContext.Provider>

  )
}

/* HOOK */

export function useAuth() {

  return useContext(
    AuthContext
  )
}