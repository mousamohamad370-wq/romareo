import {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react'

/* FIREBASE AUTH */

import {
  auth
} from '../firebase/firebase'

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth'

/* CONTEXT */

const AuthContext =
  createContext()

/* PROVIDER */

export function AuthProvider({
  children
}) {

  /* STATES */

  const [user, setUser] =
    useState(null)

  const [loading, setLoading] =
    useState(true)

  /* AUTH LISTENER */

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          if (currentUser) {

            setUser({

              uid:
                currentUser.uid,

              email:
                currentUser.email,

              name:
                currentUser.displayName || '',

              phone:
                currentUser.phoneNumber || ''
            })

          } else {

            setUser(null)

          }

          setLoading(false)

        }
      )

    return () =>
      unsubscribe()

  }, [])

  /* LOGIN */

  const login = async (
    email,
    password
  ) => {

    const response =
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

    return response.user
  }

  /* REGISTER */

  const register = async (
    email,
    password
  ) => {

    const response =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

    return response.user
  }

  /* LOGOUT */

  const logout = async () => {

    await signOut(auth)

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