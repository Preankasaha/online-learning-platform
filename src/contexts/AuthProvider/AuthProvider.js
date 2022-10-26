import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    // const user = { displayname: 'ami' };

    

    //function for creating user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //function for log in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const providerSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    //function for logout
    const logOut = () => {
        return signOut(auth);
    }

    //user state changed set
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state changed', currentUser);
            setUser(currentUser);

        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = { user, createUser, signIn, providerSignIn, logOut };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;