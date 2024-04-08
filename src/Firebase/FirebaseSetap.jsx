import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const AuthContext = createContext(null);


const FirebaseSetap = ({ children }) => {
    const [user, setuser] =useState();
    const handelRegister = (email, password) => {
     return   createUserWithEmailAndPassword(auth, email, password)
    }
    const handelLogin = (email, password) => {
     return  signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth , currentuset =>{
        setuser(currentuset)
     });
     return()=>{
        unSubscribe();
     }
    }, [])
    const provid = {
        handelRegister,
        handelLogin,
        user
    }
    return (
        <AuthContext.Provider value={provid}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseSetap;