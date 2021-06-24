import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

interface RoomCodeProps {
    code: string;
}

export const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
    const copyRoomCodeToClipboard = () => {
        navigator.clipboard.writeText(code);
    };

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copiar código da sala" />
            </div>
            <span>Sala #{code}</span>
        </button>
    );
};
