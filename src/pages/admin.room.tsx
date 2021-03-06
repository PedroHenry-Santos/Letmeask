import { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import { ThemeContext } from 'styled-components';
import MediaQuery from 'react-responsive';

import { motion } from 'framer-motion';
import { Questions } from '../components/Questions';
import { useRoom } from '../hooks/useRoom';
import { RoomCode } from '../components/RoomCode';
import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { LogoIcon } from '../components/LogoIcon';
import { SwitchTheme } from '../components/SwithTheme';
import { useStateRoom } from '../hooks/useStateRoom';
import { SideMenu } from '../components/SideMenu';

import Apresentation from '../assets/images/apresentation.svg';

import {
    RoomStyle,
    ModalStyle,
    MainRoom,
    RoomTitle,
    Header,
    QuestionList,
    EmptyList,
    MainAdminRoom
} from '../assets/styles/room.styles';
import { ButtonIcon } from '../components/Questions/styles';

interface RoomParams {
    id: string;
}

export const AdminRoom = () => {
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const history = useHistory();
    const state = useStateRoom(roomId);

    useEffect(() => {
        if (state) {
            history.push(`/room/closed`);
        }
    }, [history, roomId, state]);

    const { questions, title } = useRoom(roomId);
    const { colors } = useContext(ThemeContext);

    const [modalIsOpenDeleteQuestion, setIsOpenDeleteQuestion] =
        useState(false);
    const [modalIsOpenDeleteRoom, setIsOpenDeleteRoom] = useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: `${colors.modalBackground}`
        },
        overlay: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }
    };

    const openModalDeleteQuestion = () => {
        setIsOpenDeleteQuestion(true);
    };

    const closeModalDeleteQuestion = () => {
        setIsOpenDeleteQuestion(false);
    };

    const openModalDeleteRoom = () => {
        setIsOpenDeleteRoom(true);
    };

    const closeModalDeleteRoom = () => {
        setIsOpenDeleteRoom(false);
    };

    const handleEndRoom = async () => {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date()
        });

        closeModalDeleteRoom();
        history.push('/room/closed');
    };

    const handleDeleteQuestion = async (questionId: string) => {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        closeModalDeleteQuestion();
    };

    const handleQuestionAsAnswer = async (questionId: string) => {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true
        });
    };

    const handleHighlightQuestion = async (questionId: string) => {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighLighted: true
        });
    };

    return (
        <RoomStyle>
            <Header>
                <div className="content">
                    <LogoIcon />
                    <MediaQuery maxWidth="799px" minWidth="300px">
                        <div className="theme-mode">
                            <span>Trocar tema</span>
                            <SwitchTheme />
                        </div>
                    </MediaQuery>

                    <MediaQuery maxWidth="799px" minWidth="300px">
                        <SideMenu
                            title={title}
                            openModalDeleteRoom={openModalDeleteRoom}
                            roomId={roomId}
                        />
                    </MediaQuery>
                    <MediaQuery minWidth="800px">
                        <div>
                            <RoomCode code={roomId} />
                            <Button
                                type="button"
                                isOutlined
                                onClick={openModalDeleteRoom}
                            >
                                <p>Encerrar sala</p>
                            </Button>
                        </div>
                    </MediaQuery>
                </div>
            </Header>

            <MainAdminRoom>
                <RoomTitle>
                    <div className="info-questions">
                        <h1>Sala - {title} </h1>
                        {questions.length > 0 && (
                            <span>{questions.length} pergunta(s)</span>
                        )}
                    </div>
                    <MediaQuery minWidth="800px">
                        <div className="theme-mode">
                            <span>Trocar tema</span>
                            <SwitchTheme />
                        </div>
                    </MediaQuery>
                </RoomTitle>

                <QuestionList>
                    {questions.length > 0 ? (
                        questions.map(question => {
                            return (
                                <Questions
                                    key={question.id}
                                    content={question.content}
                                    author={question.author}
                                    isAnswered={question.isAnswered}
                                    isHighLighted={question.isHighLighted}
                                >
                                    {!question.isAnswered && (
                                        <>
                                            <ButtonIcon
                                                as={motion.button}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                type="button"
                                                onClick={() =>
                                                    handleQuestionAsAnswer(
                                                        question.id
                                                    )
                                                }
                                            >
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle
                                                        cx="12.0003"
                                                        cy="11.9998"
                                                        r="9.00375"
                                                        stroke="#737380"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193"
                                                        stroke="#737380"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </ButtonIcon>
                                            <ButtonIcon
                                                as={motion.button}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`like-button ${
                                                    question.isHighLighted
                                                        ? 'liked'
                                                        : ''
                                                }`}
                                                type="button"
                                                onClick={() =>
                                                    handleHighlightQuestion(
                                                        question.id
                                                    )
                                                }
                                            >
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M12 17.9999H18C19.657 17.9999 21 16.6569 21 14.9999V6.99988C21 5.34288 19.657 3.99988 18 3.99988H6C4.343 3.99988 3 5.34288 3 6.99988V14.9999C3 16.6569 4.343 17.9999 6 17.9999H7.5V20.9999L12 17.9999Z"
                                                        stroke="#737380"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </ButtonIcon>
                                        </>
                                    )}
                                    <ButtonIcon
                                        as={motion.button}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        type="button"
                                        onClick={openModalDeleteQuestion}
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3 5.99988H5H21"
                                                stroke="#737380"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
                                                stroke="#737380"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </ButtonIcon>

                                    <Modal
                                        isOpen={modalIsOpenDeleteQuestion}
                                        onRequestClose={
                                            closeModalDeleteQuestion
                                        }
                                        contentLabel="Confirma????o para excluir mensagem"
                                        style={customStyles}
                                        ariaHideApp={false}
                                    >
                                        <ModalStyle>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 5.99988H5H21"
                                                    stroke="#737380"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
                                                    stroke="#737380"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <h2>Excluir pergunta</h2>
                                            <p>
                                                Tem certeza que voc?? deseja
                                                excluir esta pergunta?
                                            </p>
                                            <div>
                                                <button
                                                    className="cancel"
                                                    onClick={
                                                        closeModalDeleteQuestion
                                                    }
                                                >
                                                    cancelar
                                                </button>
                                                <button
                                                    className="confirm"
                                                    onClick={() =>
                                                        handleDeleteQuestion(
                                                            question.id
                                                        )
                                                    }
                                                >
                                                    Sim, excluir
                                                </button>
                                            </div>
                                        </ModalStyle>
                                    </Modal>
                                </Questions>
                            );
                        })
                    ) : (
                        <EmptyList>
                            <img
                                src={Apresentation}
                                alt="Imagem de apresenta????o"
                            />
                            <h3>Nenhuma pergunta por aqui...</h3>
                            <p>
                                Envie o c??digo desta sala para seus amigos e
                                comece a responder perguntas!
                            </p>
                        </EmptyList>
                    )}
                </QuestionList>
            </MainAdminRoom>

            <Modal
                isOpen={modalIsOpenDeleteRoom}
                onRequestClose={closeModalDeleteQuestion}
                contentLabel="Confirma????o para excluir mensagem"
                style={customStyles}
                ariaHideApp={false}
            >
                <ModalStyle>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 5.99988H5H21"
                            stroke="#737380"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
                            stroke="#737380"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <h2>Encerrar sala</h2>
                    <p>Tem certeza que voc?? deseja encerrar esta sala?</p>
                    <div>
                        <button
                            className="cancel"
                            onClick={closeModalDeleteRoom}
                        >
                            cancelar
                        </button>
                        <button className="confirm" onClick={handleEndRoom}>
                            Sim, encerrar
                        </button>
                    </div>
                </ModalStyle>
            </Modal>
        </RoomStyle>
    );
};
