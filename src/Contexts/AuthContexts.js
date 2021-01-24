import React, { createContext, useState, useEffect, useContext} from 'react';
import { signUpWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from '../Firebase/firebase'

export const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [ currentUser, setCurrentUser ] = useState()

    function signup(name, email, password){
       return signUpWithEmailAndPassword(email, password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(email, password)
    }
    function resetPassword(email){
        return sendPasswordResetEmail(email)
    }

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         setCurrentUser(user)
    //     })
    //     return unsubscribe;
    // }, [])

    const value = {
        currentUser,
        login,
        signup,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

