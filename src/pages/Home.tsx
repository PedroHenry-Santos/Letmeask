import { FormEvent, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import { GoogleIcon } from '../components/GoogleIcon';
import { LogoIcon } from '../components/LogoIcon';
import { SwitchTheme } from '../components/SwithTheme';
import { UserInfo } from '../components/UserInfor';

import illustrationImg from '../assets/images/illustration.svg';

import {
    AuthStyle,
    Aside,
    Main,
    ButtonGoogle,
    Content,
    CreateRoom,
    ContentAside
} from '../assets/styles/auth.styles';

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

        const roomDirectRef = await database.ref(`rooms/${roomCode}/authorId`);

        roomDirectRef.once('value', room => {
            if (user?.id === room.val()) {
                history.push(`admin/room/${roomCode}`);
            } else {
                history.push(`room/${roomCode}`);
            }
        });
    };

    return (
        <AuthStyle>
            <MediaQuery minWidth={300} maxWidth={720}>
                <Aside
                    as={motion.aside}
                    transition={{ delay: 1.7, duration: 2.7 }}
                    variants={{
                        show: { flex: 0, alignItems: 'none', padding: 0 },
                        hidden: {
                            flex: 100,
                            alignItems: 'center',
                            padding: '8rem 5.4rem'
                        }
                    }}
                    initial="hidden"
                    animate="show"
                >
                    <ContentAside
                        as={motion.div}
                        transition={{ delay: 2, duration: 3 }}
                        variants={{
                            hidden: {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            },
                            show: { display: 'none' }
                        }}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.img
                            transition={{ delay: 0.5, duration: 1.6 }}
                            variants={{
                                hidden: { opacity: 1 },
                                show: { opacity: 0 }
                            }}
                            initial="hidden"
                            animate="show"
                            src={illustrationImg}
                            alt="Ilustração simbolizando perguntas e respostas"
                        />
                        <motion.strong
                            transition={{ delay: 0.5, duration: 1.6 }}
                            variants={{
                                hidden: { opacity: 1 },
                                show: { opacity: 0 }
                            }}
                            initial="hidden"
                            animate="show"
                        >
                            Crie salas de Q&amp;A ao-vivo
                        </motion.strong>
                        <motion.p
                            transition={{ delay: 0.5, duration: 1.6 }}
                            variants={{
                                hidden: { opacity: 1 },
                                show: { opacity: 0 }
                            }}
                            initial="hidden"
                            animate="show"
                        >
                            Tire as dúvidas da sua audiência em tempo real
                        </motion.p>
                    </ContentAside>
                </Aside>

                <Main
                    as={motion.main}
                    transition={{ delay: 1.7, duration: 2.7 }}
                    variants={{
                        show: { flex: 100, padding: '0 2.2rem' },
                        hidden: { flex: 0, padding: 0 }
                    }}
                    initial="hidden"
                    animate="show"
                >
                    <Content
                        as={motion.main}
                        transition={{ delay: 3.3, duration: 3.6 }}
                        variants={{
                            show: { opacity: 1, display: 'flex' },
                            hidden: { opacity: 0, display: 'none' }
                        }}
                        initial="hidden"
                        animate="show"
                    >
                        <LogoIcon />
                        <div>
                            <span>Trocar tema</span>
                            <SwitchTheme />
                        </div>

                        {user ? (
                            <CreateRoom>
                                <h3>Bem vindo!</h3>
                                <UserInfo
                                    author={{
                                        name: user.name,
                                        avatar: user.avatar
                                    }}
                                />
                                <Button
                                    type="button"
                                    onClick={handleCreateRoom}
                                >
                                    Crie sua sala
                                </Button>
                            </CreateRoom>
                        ) : (
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
                        )}

                        <Toaster />
                        <div className="separator">ou entre em uma sala</div>
                        <form onSubmit={handleJoinRoom}>
                            <input
                                type="text"
                                placeholder="Digite o código da sala"
                                onChange={event =>
                                    setRoomCode(event.target.value)
                                }
                                value={roomCode}
                            />
                            <Button type="submit">Entrar na sala</Button>
                        </form>
                    </Content>
                </Main>
            </MediaQuery>
            <MediaQuery minWidth={720}>
                <Aside
                    as={motion.aside}
                    transition={{ delay: 0, duration: 2.5 }}
                    variants={{
                        show: { flex: 47, alignItems: 'none' },
                        hidden: { flex: 100, alignItems: 'center' }
                    }}
                    initial="hidden"
                    animate="show"
                >
                    <ContentAside>
                        <img
                            src={illustrationImg}
                            alt="Ilustração simbolizando perguntas e respostas"
                        />
                        <strong>Crie salas de Q&amp;A ao-vivo</strong>
                        <p>Tire as dúvidas da sua audiência em tempo real</p>
                    </ContentAside>
                </Aside>
                <Main
                    as={motion.main}
                    transition={{ delay: 1.3, duration: 2.5 }}
                    variants={{
                        show: { flex: 53, padding: '0 2.2rem' },
                        hidden: { flex: 0, padding: 0 }
                    }}
                    initial="hidden"
                    animate="show"
                >
                    <Content
                        as={motion.main}
                        transition={{ delay: 2, duration: 2.5 }}
                        variants={{
                            show: { opacity: 1, display: 'flex' },
                            hidden: { opacity: 0, display: 'none' }
                        }}
                        initial="hidden"
                        animate="show"
                    >
                        <LogoIcon />
                        <div>
                            <span>Trocar tema</span>
                            <SwitchTheme />
                        </div>

                        {user ? (
                            <CreateRoom>
                                <h3>Bem vindo!</h3>
                                <UserInfo
                                    author={{
                                        name: user.name,
                                        avatar: user.avatar
                                    }}
                                />
                                <Button
                                    type="button"
                                    onClick={handleCreateRoom}
                                >
                                    Crie sua sala
                                </Button>
                            </CreateRoom>
                        ) : (
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
                        )}

                        <Toaster />
                        <div className="separator">ou entre em uma sala</div>
                        <form onSubmit={handleJoinRoom}>
                            <input
                                type="text"
                                placeholder="Digite o código da sala"
                                onChange={event =>
                                    setRoomCode(event.target.value)
                                }
                                value={roomCode}
                            />
                            <Button type="submit">Entrar na sala</Button>
                        </form>
                    </Content>
                </Main>
            </MediaQuery>
        </AuthStyle>
    );
};
