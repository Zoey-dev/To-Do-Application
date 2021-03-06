import React, { createContext, useState, useEffect, useContext} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom'
import { signUpWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         sendPasswordResetEmail, 
         addToStore, 
         auth,
         getFromStore } from '../Firebase/firebase'

export const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}



export function AuthProvider({ children }) {

    const history = useHistory();
    const match = useRouteMatch();

    const [ currentUser, setCurrentUser ] = useState()

    async function signup(name, email, password){
       const userId =  await signUpWithEmailAndPassword(email, password);
       let userInfo = await addToStore("userProfile",  {email, name, imageUrl: "", }, userId)
    }

    async function login(email, password){
        return await signInWithEmailAndPassword(email, password)
    }

    async function resetPassword(email){
        return await sendPasswordResetEmail(email)
    }

    async function handleSetUserInfo(user){
        if(user){
            const  data = await getFromStore("userProfile", user.uid);
            if(data){
                setCurrentUser({id: user.uid, ...data});
            }
        }else{
            setCurrentUser(null);
        }
        
    }

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            handleSetUserInfo(user)
        })
        return unsubscribe;
    })

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

