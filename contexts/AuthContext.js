import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'


// Context provides authentication to rest of application
const AuthContext = React.createContext()

// Custom hooks, provides access to AuthContext
export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  // State to determine if a user is logged in
  const [currentUser, setCurrentUser] = useState()

  function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredentiall
    }).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })
  }

  // Sets current user when component is used
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup
  }

  return (
    // Provides login details to all child components
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}
