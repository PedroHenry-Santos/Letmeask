import copyImg from '../../assets/images/copy.svg';

import { RoomCodeStyle } from './styled';

interface RoomCodeProps {
    code: string;
}

export const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
    const copyRoomCodeToClipboard = () => {
        navigator.clipboard.writeText(code);
    };

    return (
        <RoomCodeStyle className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copiar código da sala" />
            </div>
            <span>Sala #{code}</span>
        </RoomCodeStyle>
    );
};
