import styled from 'styled-components';

export const Aside = styled.aside`
    flex: 0;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.whiteText};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8rem 5.4rem;

    @media (min-width: 720px) {
        flex: 47;
    }
`;

export const ContentAside = styled.div`
    max-width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        max-width: 16rem;
    }

    strong {
        font: 700 2.4rem 'Poppins', sans-serif;
        line-height: 2.8rem;
        margin-top: 1.1rem;
        text-align: center;
    }

    p {
        font-size: 1.6rem;
        line-height: 2.1rem;
        margin-top: 1.1rem;
        text-align: center;
        color: ${props => props.theme.colors.whiteText};
    }

    @media (min-width: 800px) {
        max-width: 36rem;

        img {
            max-width: 21.4rem;
        }
    }
`;

export const Main = styled.main`
    flex: 100;
    flex-direction: column;
    padding: 0 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 720px) {
        flex: 53;
    }
`;

export const Content = styled.div`
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

        span {
            font-size: 0.9rem;
            font-weight: 500;
            padding: 0 1rem;
        }
    }

    h2 {
        font-size: 1.6rem;
        margin: 0.9rem 0 1.6rem;
        font-family: 'Poppins', sans-serif;
    }

    form {
        input {
            height: 3.4rem;
            border-radius: 0.6rem;
            padding: 0 1.1rem;
            background: ${props => props.theme.colors.interactionBackground};
            border: 1px solid ${props => props.theme.colors.tertiaryText};
            color: ${props => props.theme.colors.mainText};

            &:focus {
                outline: none !important;
                border-color: ${props => props.theme.colors.primary};
                box-shadow: 0 0 0.33rem ${props => props.theme.colors.primary};
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
`;

export const ButtonGoogle = styled.button`
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
`;

export const AuthStyle = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
    overflow-y: hidden;

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

export const UserImage = styled.img`
    width: 4.7rem;
    border-radius: 50%;
    margin-top: 2.5rem;
`;

export const CreateRoom = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
    }

    > div {
        padding: 1rem 0;
    }

    button {
        width: 100%;
    }
`;

export const ClosedStyles = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
        padding: 3rem 0;

        .content {
            max-width: 74.7rem;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;

            > img {
                max-height: 3rem;
            }
        }
    }

    main {
        max-width: 53.4rem;
        margin: 0 auto;

        .question-list {
            margin-top: 2.2rem;

            > .emptyContent {
                padding: 5rem 0 0 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                img {
                    width: 14rem;
                    height: 14rem;
                }

                h3 {
                    padding: 2rem 0;
                    font-size: 1.8rem;
                    font-weight: 600;
                    font-family: 'Poppins', sans-serif;
                    color: ${props => props.theme.colors.mainText};
                }
            }
        }
    }
`;
