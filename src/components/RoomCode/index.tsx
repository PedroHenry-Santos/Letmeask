import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ThemeContext } from 'styled-components';

import copyImg from '../../assets/images/copy.svg';

import { RoomCodeStyle } from './styled';

interface RoomCodeProps {
    code: string;
}

export const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
    const { colors } = useContext(ThemeContext);

    const copyRoomCodeToClipboard = () => {
        navigator.clipboard.writeText(code);
        notifyCopiedCode();
    };

    const notifyCopiedCode = () =>
        toast.success('Código copiado!', {
            style: {
                border: `1px solid ${colors.confirm}`,
                padding: '20px',
                background: `${colors.modalBackground}`,
                color: colors.secondaryText
            }
        });

    return (
        <>
            <RoomCodeStyle
                className="room-code"
                onClick={copyRoomCodeToClipboard}
            >
                <div>
                    <img src={copyImg} alt="Copiar código da sala" />
                </div>

                <span>Sala #{code}</span>
            </RoomCodeStyle>
            <Toaster />
        </>
    );
};
