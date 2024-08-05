/* eslint-disable no-unreachable */
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [ user, setUser ] = useState({});

  async function signUp(email, password) {
    try{
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, 'users', email), {
        savedShows: []
      });
      return userCred;
    }catch(err){
      console.error(err);
    };
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }  

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    }
  })

  return (
    <AuthContext.Provider value={{signUp, user, logOut, logIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export function UserAuth() {
  return useContext(AuthContext);
}