import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const useTheme = () => {
    const value = useContext(ThemeContext);

    return value;
};
