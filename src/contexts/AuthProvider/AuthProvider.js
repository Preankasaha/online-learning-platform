import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);



    //function for creating user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //function for log in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const providerSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    //function for logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //user state changed set
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);

        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = { user, loading, createUser, signIn, providerSignIn, logOut, updateUserProfile };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;