import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

export const Home = () => {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    const [roomCode, setRoomCode] = useState('');

    const notifyRoomNotExist = () =>
        toast.error('Não existe a sala informada!', {
            style: {
                border: '1px solid #E73F5D',
                padding: '20px',
                color: '#737380'
            },
            iconTheme: {
                primary: '#E73F5D',
                secondary: '#f8f8f8'
            }
        });

    const notifyRoomClosed = () =>
        toast.error('A sala informada se encontra fechada!', {
            style: {
                border: '1px solid #ffcf33',
                padding: '20px',
                color: '#737380'
            },
            icon: '⚠️'
        });

    const handleCreateRoom = async () => {
        if (!user) {
            await signInWithGoogle();
        }

        history.push('/room/new');
    };

    const handleJoinRoom = async (event: FormEvent) => {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            notifyRoomNotExist();
            return;
        }

        if (roomRef.val().endedAt) {
            notifyRoomClosed();
            return;
        }

        history.push(`room/${roomCode}`);
    };

    return (
        <div id="page-auth">
            <aside>
                <img
                    src={illustrationImg}
                    alt="Ilustração simbolizando perguntas e respostas"
                />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button
                        className="create-room"
                        type="button"
                        onClick={handleCreateRoom}
                    >
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <Toaster />
                    <div className="separator">ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    );
};
