import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme.context';

export const useTheme = () => {
    const value = useContext(ThemeContext);

    return value;
};
