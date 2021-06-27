import { ButtonHTMLAttributes } from 'react';

import { ButtonStyle } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
    isOutlined = false,
    ...props
}) => {
    return (
        <>
            <ButtonStyle
                className={`button ${isOutlined ? 'outlined' : ''}`}
                {...props}
            />
        </>
    );
};
