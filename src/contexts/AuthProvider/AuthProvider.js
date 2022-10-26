import React from 'react';
import { createContext } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const user = { displayname: 'ami' };
    const authInfo = { user};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;