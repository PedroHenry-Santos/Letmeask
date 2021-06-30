import styled from 'styled-components';

interface NavProps {
    isOpen?: boolean;
    height?: number;
}

export const Menu = styled.div.attrs((props: NavProps) => ({
    isOpen: !!props.isOpen
}))`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 40vh;

    @keyframes open {
        from {
            background: ${props => props.theme.colors.primary};
            clip-path: circle(2rem at calc(100% - 3.6rem) calc(2rem + 1rem));
        }
        to {
            background-color: ${props =>
                props.theme.colors.backgroundAnsweredQuestion};
            clip-path: circle(
                calc(40vh + 600px) at calc(100% - 3.6rem) calc(2rem + 1rem)
            );
        }
    }

    @keyframes closed {
        from {
            background: ${props =>
                props.theme.colors.backgroundAnsweredQuestion};
            clip-path: circle(
                calc(40vh + 600px) at calc(100% - 3.6rem) calc(2rem + 1rem)
            );
        }
        to {
            background: ${props => props.theme.colors.primary};
            clip-path: circle(2rem at calc(100% - 3.6rem) calc(2rem + 1rem));
        }
    }

    > div {
        z-index: 1;
        border-radius: 0 0 2rem 2rem;
        background: ${props =>
            props.isOpen
                ? props.theme.colors.backgroundAnsweredQuestion
                : props.theme.colors.primary};
        clip-path: ${props =>
            props.isOpen
                ? ''
                : 'circle(2rem at calc(100% - 3.6rem) calc(2rem + 1rem))'};
        animation-name: ${props => (props.isOpen ? 'open' : 'closed')};
        animation-duration: 1s;
        position: absolute;
        width: 100%;
        height: 100%;
        right: 0;
        top: 0;
    }

    ul {
        z-index: 2;
        border-radius: 0 0 0.8rem 0.8rem;
        width: calc(100vw - 6.4rem);
        height: 100%;
        padding: 2rem 0 2rem 2rem;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.1rem;

        > div {
            padding: 0 1rem 0 0;
            display: flex;
            column-gap: 1.5rem;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;

            > a {
                img {
                    max-width: 5rem !important;
                }
            }

            > h1 {
                font-family: 'Poppins', sans-serif;
                font-size: 1.2rem;
                ${props => props.theme.colors.mainText};
                max-height: 3.6rem;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        > button {
            height: 2.7rem;
            background: transparent !important;

            > span {
                font-size: 1rem;
                color: ${props => props.theme.colors.mainText} !important;
            }

            &:hover {
                color: ${props => props.theme.colors.whiteText};
            }
        }
    }
`;
