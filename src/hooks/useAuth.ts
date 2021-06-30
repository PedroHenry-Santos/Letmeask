import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

export const useAuth = () => {
    const value = useContext(AuthContext);

    return value;
};
