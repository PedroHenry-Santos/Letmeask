import { ForwardRefComponent, HTMLMotionProps, motion } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

import { ButtonStyle } from './styles';

type ButtonProps = HTMLMotionProps<'button'> &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        isOutlined?: boolean;
    };

export const Button: React.FC<ButtonProps> = ({
    isOutlined = false,
    ...props
}) => {
    return (
        <ButtonStyle
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className={`button ${isOutlined ? 'outlined' : ''}`}
            {...props}
        />
    );
};
