import Switch from 'react-switch';
import { useTheme } from '../../hooks/useTheme';

export const SwitchTheme = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Switch
            onChange={() => {
                toggleTheme();
            }}
            checked={theme.now.title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offHandleColor={theme.now.colors.tertiaryText}
            onHandleColor={theme.now.colors.mainText}
            offColor={theme.now.colors.primary}
            onColor={theme.now.colors.secondary}
        />
    );
};
