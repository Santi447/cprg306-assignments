"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebase";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function signinginWithEmailAndPassword(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function signUpWithEmailAndPassword(email, password) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userDocRef = doc(db, "Users", userCredential.user.uid);

    await setDoc(userDocRef, {
      userId: userCredential.user.uid,
    });

    return userCredential;
  }
  const gitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const userDocRef = doc(db, "Users", userCredential.user.uid);

    await setDoc(userDocRef, {
      userId: userCredential.user.uid,
    });

    return userCredential;
  };

  const firebaseSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        gitHubSignIn,
        firebaseSignOut,
        signUpWithEmailAndPassword,
        signinginWithEmailAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(AuthContext);
};
