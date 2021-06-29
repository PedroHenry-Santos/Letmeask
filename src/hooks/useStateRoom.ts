import { useEffect, useState } from 'react';

import { database } from '../services/firebase';

export const useStateRoom = (roomId: string) => {
    const [state, setState] = useState<boolean>(false);

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', room => {
            const databaseRoom = room.val();

            if (databaseRoom.endedAt) {
                setState(true);
            } else {
                setState(false);
            }
        });

        return () => {
            roomRef.off('value');
        };
    }, [[], roomId, state]);

    return state;
};
