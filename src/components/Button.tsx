import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
    isOutlined = false,
    ...props
}) => {
    return (
        <>
            <button
                className={`button ${isOutlined ? 'outlined' : ''}`}
                {...props}
            />
        </>
    );
};
