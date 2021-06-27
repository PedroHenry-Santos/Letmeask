import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            background: string;
            headerBackground: string;
            interactionBackground: string;
            modalBackground: string;
            backgroundSelectedQuestion: string;
            backgroundAnsweredQuestion: string;
            primary: string;
            secondary: string;

            mainText: string;
            secondaryText: string;
            tertiaryText: string;
            whiteText: string;

            mainButton: string;
            confirmationButton: string;
            alertButton: string;
            disabledButton: string;

            alert: string;
            notify: string;
            confirm: string;
            error: string;

            googleHover: string;
            mainButtonHover: string;
            confirmationButtonHover: string;
            alertButtonHover: string;
            disabledButtonHover: string;
        };
    }
}
