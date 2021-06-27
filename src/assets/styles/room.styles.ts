import styled from 'styled-components';

export const RoomStyle = styled.div`
    header {
        padding: 1.6rem;
        border-bottom: 1px solid
            ${props => props.theme.colors.backgroundAnsweredQuestion};
        background: ${props => props.theme.colors.headerBackground};

        .content {
            max-width: 74.7rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            > img {
                max-height: 3rem;
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
        max-width: 53.4rem;
        margin: 0 auto;

        .room-title {
            margin: 2.2rem 0 1.6rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            > div {
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
        }

        form {
            textarea {
                width: 100%;
                border: 0;
                padding: 1.1rem;
                border-radius: 0.6rem;
                background: ${props =>
                    props.theme.colors.interactionBackground};
                box-shadow: 0 2px 0.8rem rgba(0, 0, 0, 0.04);
                resize: vertical;
                min-width: 8.7rem;
                color: ${props => props.theme.colors.mainText};

                &:focus {
                    outline: none !important;
                    border-color: ${props => props.theme.colors.primary};
                    box-shadow: 0 0 0.33rem
                        ${props => props.theme.colors.primary};
                }
            }

            .form-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 1.1rem;

                .user-info {
                    display: flex;
                    align-items: center;

                    img {
                        width: 2.2rem;
                        height: 2.2rem;
                        border-radius: 50%;
                    }

                    span {
                        margin-left: 0.6rem;
                        color: ${props => props.theme.colors.mainText};
                        font-weight: 500;
                        font-size: 0.9rem;
                    }
                }

                > span {
                    font-size: 0.9rem;
                    color: ${props => props.theme.colors.secondaryText};
                    font-weight: 500;

                    button {
                        background: transparent;
                        border: 0;
                        color: ${props => props.theme.colors.primary};
                        text-decoration: underline;
                        font-size: 0.9rem;
                        font-weight: 500;
                        cursor: pointer;
                    }
                }
            }
        }

        .question-list {
            margin-top: 2.2rem;

            > .emptyContent {
                padding: 5rem 0 0 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                img {
                    width: 10rem;
                    height: 10rem;
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
