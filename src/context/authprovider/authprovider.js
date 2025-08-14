import { createContext, useEffect, useState } from "react"
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, FacebookAuthProvider,getRedirectResult, updateProfile} from 'firebase/auth'
import app from "../../firebase/firebase.config";


  

 export const AuthContext = createContext(); 
 const auth = getAuth(app);
  

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser] = useState(null);
    const[loading,setLoading] = useState(true);
    
    const createUser = ( email,password ) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const facebooklogin = ( ) => {
        return getRedirectResult(auth)

    }
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser,userInfo)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider);
        setLoading(true);
    }
    const signIn = ( email,password ) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth);
    }
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe()
        }
    },[])
    const authInfo = {createUser,signIn,logOut,updateUser,googleSignIn,user,loading,facebooklogin};

      return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    )
}
export default AuthProvider;
