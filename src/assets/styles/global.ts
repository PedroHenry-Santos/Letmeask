import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 85.5%;
        }
    }

    @media (max-width: 480px) {
        html {
            font-size: 75%;
        }
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.mainText};
    }

    body, input, button, textarea {
        font: 400 16px 'Roboto', sans-serif;
    }
`;