import styled from 'styled-components';

export const AuthStyle = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
        flex: 47;
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.whiteText};
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 8rem 5.4rem;

        img {
            max-width: 21.4rem;
        }

        strong {
            font: 700 2.4rem 'Poppins', sans-serif;
            line-height: 2.8rem;
            margin-top: 1.1rem;
        }

        p {
            font-size: 1.6rem;
            line-height: 2.1rem;
            margin-top: 1.1rem;
            color: ${props => props.theme.colors.whiteText};
        }
    }

    main {
        flex: 53;
        flex-direction: column;
        padding: 0 2.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .main-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 21.4rem;
        align-items: stretch;
        text-align: center;

        > img {
            align-self: center;
        }

        > div {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
            align-self: center;

            span {
                font-size: 0.9rem;
                font-weight: 500;
                padding: 0 1rem;
            }
        }

        h2 {
            font-size: 1.6rem;
            margin: 4.3rem 0 1.6rem;
            font-family: 'Poppins', sans-serif;
        }

        form {
            input {
                height: 3.4rem;
                border-radius: 0.6rem;
                padding: 0 1.1rem;
                background: ${props =>
                    props.theme.colors.interactionBackground};
                border: 1px solid ${props => props.theme.colors.tertiaryText};
                color: ${props => props.theme.colors.mainText};

                &:focus {
                    outline: none !important;
                    border-color: ${props => props.theme.colors.primary};
                    box-shadow: 0 0 0.33rem
                        ${props => props.theme.colors.primary};
                }
            }

            button {
                margin-top: 1.1rem;

                &:focus {
                    outline: none !important;
                    border-color: ${props => props.theme.colors.primary};
                    box-shadow: 0 0 0.33rem
                        ${props => props.theme.colors.mainButtonHover};
                }
            }

            button,
            input {
                width: 100%;
            }
        }

        p {
            font-size: 0.9rem;
            color: ${props => props.theme.colors.tertiaryText};
            margin-top: 1.1rem;

            a {
                color: ${props => props.theme.colors.secondary};
            }
        }
    }

    .create-room {
        margin-top: 4.3rem;
        height: 3.4rem;
        border-radius: 0.6rem;
        font-weight: 500;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.mainText};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid ${props => props.theme.colors.tertiaryText};
        transition: filter 0.2s;

        svg {
            margin-right: 0.6rem;
        }

        &:focus {
            outline: none !important;
            border-color: ${props => props.theme.colors.googleHover};
            box-shadow: 0 0 0.33rem ${props => props.theme.colors.googleHover};
        }

        &:hover {
            background: ${props => props.theme.colors.googleHover};
            color: ${props => props.theme.colors.whiteText};

            svg path {
                fill: ${props => props.theme.colors.whiteText};
            }
        }
    }

    .separator {
        font-size: 0.9rem;
        color: ${props => props.theme.colors.tertiaryText};
        margin: 2.2rem 0;
        display: flex;
        align-items: center;

        &::before {
            content: '';
            flex: 1;
            height: 1px;
            background: ${props => props.theme.colors.tertiaryText};
            margin-right: 1.1rem;
        }

        &::after {
            content: '';
            flex: 1;
            height: 1px;
            background: ${props => props.theme.colors.tertiaryText};
            margin-left: 1.1rem;
        }
    }
`;
