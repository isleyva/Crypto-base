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
    const [user, setUser] = useState();
 
 
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

    useEffect (() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    return () => {
        unsubscriber()
    }
    },[])
    return (
        <AuthContext.Provider value={{ user, signUp, signIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );

};

export const UserAuth = () => {
    return useContext(UserContext);
}
