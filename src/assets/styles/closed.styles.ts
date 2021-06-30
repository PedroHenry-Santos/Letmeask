import styled from 'styled-components';

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
