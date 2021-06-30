import { motion, useCycle } from 'framer-motion';

import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

import { Menu } from './styles';

interface NavigationProps {
    openModalDeleteRoom: () => void;
    roomId: string;
    title: string;
}

export const SideMenu: React.FC<NavigationProps> = ({
    roomId,
    openModalDeleteRoom,
    title
}) => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <>
            <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
            <Menu
                isOpen={isOpen}
                as={motion.div}
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                    open: {
                        transition: { delay: 0 },
                        display: 'block'
                    },
                    closed: {
                        transition: { delay: 1 },
                        display: 'none'
                    }
                }}
                initial="closed"
            >
                {' '}
                <div />
                <Navigation
                    title={title}
                    roomId={roomId}
                    openModalDeleteRoom={openModalDeleteRoom}
                    style={{ display: `${isOpen ? '' : 'none'}` }}
                />
            </Menu>
        </>
    );
};
