
import { createContext, useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut} from 'firebase/auth'
import {auth} from '../firebase'

export const authContext = createContext()

export const useAuth = ()=>{
    const context = useContext(authContext)
    if(!context) throw new Error("there is not auth provider")
    return context
}



export function AuthProvider({ children }) {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUp =async (email,password)=> await createUserWithEmailAndPassword(auth,email,password)

    const logIn = async (email,password)=> await signInWithEmailAndPassword(auth,email,password)

    const logOut = async ()=> signOut(auth)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser )
            setLoading(false)
        })
        return () => unsubscribe()
    },[])



    return (
        <authContext.Provider value={{  signUp, logIn , user , logOut, loading}}>
            {children}
        </authContext.Provider>
    )
}