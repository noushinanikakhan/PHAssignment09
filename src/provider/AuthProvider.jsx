import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";



export const AuthContext= createContext()

const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const  [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true)

  console.log(loading, user)

  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password)=> {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=> {
         unsubscribe()
    }
  }, [])
  
  //     {
//     name: "hasina",
//     email: "hasina@khaleda.com"
//   }
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
  }

  return (
   <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;