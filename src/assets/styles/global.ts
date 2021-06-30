import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (min-width: 800px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (min-width: 500px) {
        html {
            font-size: 75.5%;
        }
    }


    html {
        font-size: 75%;
    }


    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.mainText};
    }

    body, input, button, textarea {
        font: 400 16px 'Roboto', sans-serif;
    }
`;
