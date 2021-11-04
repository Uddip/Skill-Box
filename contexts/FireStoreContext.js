import React, { useContext, useState, useEffect } from "react";
import { fs } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Context provides firestore to rest of application
const FirestoreContext = React.createContext();

// Custom hooks, provides access to FirestoreContext
export function useFireStore() {
  return useContext(FirestoreContext);
}

export function FirestoreProvider({ children }) {
  // Create/update user profile data
  function addUserData(id, display, fullName, userEmail, skillSet, userBio) {
    setDoc(doc(fs, "users", id), {
      uid: id,
      display_name: display,
      name: fullName,
      email: userEmail,
      skills: skillSet,
      bio: userBio,
    })
      .then({
        // Data added
      })
      .catch({
        // Error adding
      });
  }

  // Read existing data
  function readUserData(uid) {
    return getDoc(doc(fs, "users", uid));
  }

  const value = {
    addUserData,
    readUserData,
  };

  return (
    // Provides login details to all child components
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  );
}
