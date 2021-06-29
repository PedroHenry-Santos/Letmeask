import styled from 'styled-components';

export const RoomStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 11vh 89vh;
    height: 100vh;

    header {
        grid-area: 'header';
        padding: 0 1.6rem;
        border-bottom: 1px solid
            ${props => props.theme.colors.backgroundAnsweredQuestion};
        background: ${props => props.theme.colors.headerBackground};
        justify-content: center;
        align-items: center;

        .content {
            width: 100%;
            height: 100%;
            max-width: 74.7rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                display: flex;

                > img {
                    justify-self: center;
                    align-self: center;
                    max-height: 3rem;
                }
            }

            > div {
                display: flex;
                gap: 1.1rem;

                button {
                    height: 2.7rem;
                    background: transparent;

                    &:hover {
                        color: ${props => props.theme.colors.whiteText};
                    }
                }
            }
        }
    }

    main {
        padding: 0 1.6rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 17% 83%;
        margin: 0 auto;
        height: 100%;
        width: 100%;
        max-width: 53.4rem;

        .room-title {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 1.7rem;

            .info-questions {
                display: flex;
                align-items: center;

                h1 {
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.6rem;
                    ${props => props.theme.colors.mainText};
                }

                span {
                    margin-left: 1.1rem;
                    background: ${props => props.theme.colors.secondary};
                    border-radius: 9999px;
                    padding: 0.6rem 1.1rem;
                    color: ${props => props.theme.colors.whiteText};
                    font-weight: 500;
                    font-size: 0.9rem;
                }
            }

            .theme-mode {
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    font-size: 0.9rem;
                    font-weight: 500;
                    padding: 0 1rem;
                }
            }
        }

        .question-list {
            padding: 0 0.5rem;
            border-radius: 0.8rem;
            overflow: auto;

            &::-webkit-scrollbar {
                width: 0.5rem;
                background-color: ${props => props.theme.colors.background};
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 9999px;
                width: 0.4rem !important;
                background: red;
                background-color: ${props =>
                    props.theme.colors.backgroundAnsweredQuestion};
            }

            > .emptyContent {
                padding: 5rem 0 0 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                img {
                    width: 12rem;
                    height: 12rem;
                }

                h3 {
                    padding: 1rem 0;
                    font-size: 1.2rem;
                    font-weight: 600;
                    font-family: 'Poppins', sans-serif;
                    color: ${props => props.theme.colors.mainText};
                }

                p {
                    width: 20rem;
                    text-align: center;
                    font-size: 0.9rem;
                    line-height: 1.4rem;
                    color: ${props => props.theme.colors.secondaryText};
                }
            }
        }
    }
`;

export const ModalStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 3.33rem;

    > svg {
        height: 3.2rem;
        width: 3.2rem;

        path {
            stroke: ${props => props.theme.colors.alertButton};
        }
    }

    h2 {
        padding-top: 1rem;
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        line-height: 2.3rem;
        color: ${props => props.theme.colors.mainText};
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.1rem;
        line-height: 1.7rem;
        text-align: center;
        color: ${props => props.theme.colors.secondaryText};
        padding: 0.7rem;
    }

    > div {
        gap: 10px;
        display: flex;

        button {
            height: 3.33rem;
            border-radius: 0.6rem;
            font-weight: 500;
            padding: 0 2.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border: 0;
            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }

        .cancel {
            background: ${props => props.theme.colors.disabledButton};
            color: ${props => props.theme.colors.secondaryText};

            &:hover {
                background: ${props => props.theme.colors.disabledButtonHover};
            }
        }

        .confirm {
            background: ${props => props.theme.colors.alertButton};
            color: ${props => props.theme.colors.whiteText};

            &:hover {
                background: ${props => props.theme.colors.alertButtonHover};
            }
        }
    }
`;