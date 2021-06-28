import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { LogoIcon } from '../components/LogoIcon';
import { SwitchTheme } from '../components/SwithTheme';
import { database } from '../services/firebase';

import illustrationImg from '../assets/images/illustration.svg';

import { Aside, AuthStyle, Content, Main } from '../assets/styles/auth.styles';

export const NewRoom = () => {
    const { user } = useAuth();
    const history = useHistory();

    const [newRoom, setNewRoom] = useState('');

    const handleCreateRoom = async (event: FormEvent) => {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        });

        history.push(`/admin/room/${firebaseRoom.key}`);
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
            <Main>
                <Content>
                    <LogoIcon />
                    <div>
                        <span>Trocar tema</span>
                        <SwitchTheme />
                    </div>
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente?{' '}
                        <Link to="/">Click aqui</Link>{' '}
                    </p>
                </Content>
            </Main>
        </AuthStyle>
    );
};
