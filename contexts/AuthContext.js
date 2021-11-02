import React, { useContext, useState, useEffect } from "react";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);

// Context provides authentication to rest of application
const AuthContext = React.createContext();

// Custom hooks, provides access to AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // State to determine if a user is logged in
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Create user account using email & password
  function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredentiall;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  // Try logging in using email & password
  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredentiall;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  // Logout currently signed in user
  function logout() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  }

  // Sets current user when component is used
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    // Provides login details to all child components
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
