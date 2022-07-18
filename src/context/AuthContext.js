import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "../firebase/auth";
import { doc, setDoc } from "../firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    return setDoc(doc(db, "users", email), {
      watchList: [],
    });
  };
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  }
    const logOut = () => {
        return signOut(auth)
    }
};
