import { useState, useEffect } from 'react';
import { createContext, ReactNode } from 'react';

import { auth, firebase } from '../services/firebase';

interface User {
    id: string;
    name: string;
    avatar: string;
}
interface AuthContextType {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    children
}) => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged(userData => {
            if (userData) {
                const { displayName, photoURL, uid } = userData;

                if (!displayName || !photoURL) {
                    throw new Error('Missing information from Google Account.');
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                });
            }
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        const result = await auth.signInWithPopup(provider);

        if (result.user) {
            const { displayName, photoURL, uid } = result.user;

            if (!displayName || !photoURL) {
                throw new Error('Missing information from Google Account.');
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            });
        }
    };

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    );
};
