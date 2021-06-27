import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import { Questions } from '../components/Questions';
import { useRoom } from '../hooks/useRoom';
import { RoomCode } from '../components/RunCode';
import { Button } from '../components/Button';
import { database } from '../services/firebase';

import logo from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';

import '../styles/room.scss';

interface RoomParams {
    id: string;
}

export const AdminRoom = () => {
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const { questions, title } = useRoom(roomId);
    const history = useHistory();

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
            backgroundColor: '#F8F8F8'
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
        history.push('/');
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
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logo} alt="<Letmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button
                            type="button"
                            isOutlined
                            onClick={openModalDeleteRoom}
                        >
                            Encerrar sala
                        </Button>
                        <Modal
                            isOpen={modalIsOpenDeleteRoom}
                            onRequestClose={closeModalDeleteQuestion}
                            contentLabel="Confirmação para excluir mensagem"
                            style={customStyles}
                            ariaHideApp={false}
                        >
                            <div>
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
                                <p>
                                    Tem certeza que você deseja encerrar esta
                                    sala?
                                </p>
                                <div>
                                    <button
                                        className="cancel"
                                        onClick={closeModalDeleteRoom}
                                    >
                                        cancelar
                                    </button>
                                    <button
                                        className="confirm"
                                        onClick={handleEndRoom}
                                    >
                                        Sim, encerrar
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && (
                        <span>{questions.length} pergunta(s)</span>
                    )}
                </div>

                <div className="question-list">
                    {questions.map(question => {
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
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleQuestionAsAnswer(
                                                    question.id
                                                )
                                            }
                                        >
                                            <img
                                                src={checkImg}
                                                alt="Marcar pergunta como respondida"
                                            />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleHighlightQuestion(
                                                    question.id
                                                )
                                            }
                                        >
                                            <img
                                                src={answerImg}
                                                alt="Dar destaque à pergunta"
                                            />
                                        </button>
                                    </>
                                )}
                                <button
                                    type="button"
                                    onClick={openModalDeleteQuestion}
                                >
                                    <img
                                        src={deleteImg}
                                        alt="Remover pergunta"
                                    />
                                </button>
                                <Modal
                                    isOpen={modalIsOpenDeleteQuestion}
                                    onRequestClose={closeModalDeleteQuestion}
                                    contentLabel="Confirmação para excluir mensagem"
                                    style={customStyles}
                                    ariaHideApp={false}
                                >
                                    <div>
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
                                            Tem certeza que você deseja excluir
                                            esta pergunta?
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
                                    </div>
                                </Modal>
                            </Questions>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};
