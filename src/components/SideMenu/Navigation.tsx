import { HTMLMotionProps, motion } from 'framer-motion';
import { useState } from 'react';

import { Button } from '../Button';
import { LogoIcon } from '../LogoIcon';
import { RoomCode } from '../RoomCode';
import { MenuItem } from './MenuItem';

interface NavigationProps extends HTMLMotionProps<'ul'> {
    openModalDeleteRoom: () => void;
    roomId: string;
    title: string;
}

export const Navigation: React.FC<NavigationProps> = ({
    openModalDeleteRoom,
    roomId,
    title,
    ...props
}) => {
    return (
        <motion.ul
            variants={{
                open: {
                    opacity: 1,
                    transition: {
                        delay: 0.5,
                        duration: 1
                    }
                },
                closed: {
                    opacity: 0,
                    transition: {
                        delay: 0,
                        duration: 1
                    }
                }
            }}
            {...props}
        >
            <div>
                <LogoIcon />
                <h1>Sala - {title}</h1>
            </div>

            <RoomCode code={roomId} />
            <Button type="button" isOutlined onClick={openModalDeleteRoom}>
                <p>Encerrar sala</p>
            </Button>
        </motion.ul>
    );
};
