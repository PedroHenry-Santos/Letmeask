import { useState, useEffect } from 'react';
import { database } from '../services/firebase';
import { useAuth } from './useAuth';

interface Question {
    id: string;
    author: {
        name: string;
        avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
    likeCount: number;
    likeId: string | undefined;
}

type FirebaseQuestions = Record<
    string,
    {
        author: {
            name: string;
            avatar: string;
        };
        content: string;
        isAnswered: boolean;
        isHighLighted: boolean;
        likes: Record<
            string,
            {
                authorId: string;
            }
        >;
    }
>;

export const useRoom = (roomId: string) => {
    const { user } = useAuth();

    const [questions, setQuestions] = useState<Question[]>([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef
            .child('questions')
            .limitToFirst(20)
            .on('value', room => {
                const databaseRoom = room.val();

                const firebaseQuestion: FirebaseQuestions = databaseRoom ?? {};

                const parsedQuestions = Object.entries(firebaseQuestion).map(
                    ([key, value]) => {
                        return {
                            id: key,
                            content: value.content,
                            author: value.author,
                            isHighLighted: value.isHighLighted,
                            isAnswered: value.isAnswered,
                            likeCount: !value.isAnswered
                                ? Object.values(value.likes ?? {}).length
                                : -1,
                            likeId: Object.entries(value.likes ?? {}).find(
                                ([, like]) => like.authorId === user?.id
                            )?.[0]
                        };
                    }
                );

                parsedQuestions.sort((a, b) => {
                    if (a.isHighLighted && !a.isAnswered) return -1;
                    return b.likeCount - a.likeCount;
                });

                setQuestions(parsedQuestions);
            });

        roomRef.on('value', room => {
            const databaseRoom = room.val();

            setTitle(databaseRoom.title);
        });

        return () => {
            roomRef.off('value');
        };
    }, [roomId, user?.id]);

    return { questions, title };
};
