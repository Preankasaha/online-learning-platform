import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
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


    const authInfo = { user, createUser };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;