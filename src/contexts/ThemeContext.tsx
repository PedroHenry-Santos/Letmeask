import { createContext, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';
import dark from '../assets/styles/themes/dark';
import light from '../assets/styles/themes/light';
import usePersistedState from '../hooks/usePersistedState';

interface Theme {
    state: boolean;
    now: DefaultTheme;
}
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeContextProvider: React.FC<AuthContextProviderProps> = ({
    children
}) => {
    const [theme, setTheme] = usePersistedState<Theme>('theme', {
        state: false,
        now: light
    });

    const toggleTheme = () => {
        setTheme({
            state: !theme.state,
            now: theme.now.title === 'light' ? dark : light
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
