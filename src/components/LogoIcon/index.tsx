import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

import logoImgDark from '../../assets/images/logo_dark.svg';
import logoImgLight from '../../assets/images/logo_light.svg';

export const LogoIcon = () => {
    const { theme } = useTheme();

    return (
        <Link to="/">
            <img
                src={theme.now.title === 'light' ? logoImgLight : logoImgDark}
                alt="Letmeask"
            />
        </Link>
    );
};
