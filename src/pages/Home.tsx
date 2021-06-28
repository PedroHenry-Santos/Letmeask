import { FormEvent, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import {
    AuthStyle,
    Aside,
    Main,
    ButtonGoogle
} from '../assets/styles/auth.styles';
import { GoogleIcon } from '../components/GoogleIcon';
import { LogoIcon } from '../components/LogoIcon';

import illustrationImg from '../assets/images/illustration.svg';
import { SwitchTheme } from '../components/SwithTheme';

export const Home = () => {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();
    const { colors } = useContext(ThemeContext);

    const [roomCode, setRoomCode] = useState('');

    const notifyRoomNotExist = () =>
        toast.error('Não existe a sala informada!', {
            style: {
                border: `1px solid ${colors.error}`,
                padding: '20px',
                background: `${colors.modalBackground}`,
                color: colors.secondaryText
            },
            iconTheme: {
                primary: colors.error,
                secondary: colors.whiteText
            }
        });

    const notifyRoomClosed = () =>
        toast.error('A sala informada se encontra fechada!', {
            style: {
                border: `1px solid ${colors.alert}`,
                padding: '20px',
                background: `${colors.modalBackground}`,
                color: colors.secondaryText
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
        <AuthStyle>
            <Aside>
                <img
                    src={illustrationImg}
                    alt="Ilustração simbolizando perguntas e respostas"
                />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </Aside>
            <Main
                as={motion.section}
                transition={{ delay: 0.5, duration: 2 }}
                variants={{
                    show: { opacity: 1, y: '0' },
                    hidden: { opacity: 0, y: '50%' }
                }}
                initial="hidden"
                animate="show"
            >
                <div className="main-content">
                    <LogoIcon />
                    <div>
                        <span>Trocar tema</span>
                        <SwitchTheme />
                    </div>

                    <ButtonGoogle
                        as={motion.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        className="create-room"
                        type="button"
                        onClick={handleCreateRoom}
                    >
                        <GoogleIcon />
                        Crie sua sala com o Google
                    </ButtonGoogle>

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
            </Main>
        </AuthStyle>
    );
};
