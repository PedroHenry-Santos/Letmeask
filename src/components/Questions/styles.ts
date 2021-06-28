import styled from 'styled-components';

export const QuestionStyle = styled.div`
    background: ${props => props.theme.colors.modalBackground};
    border-radius: 0.6rem;
    box-shadow: 0 0.2px 0.8rem rgba(0, 0, 0, 0.04);
    padding: 1.6rem;

    & + .question {
        margin-top: 0.6rem;
    }

    p {
        color: ${props => props.theme.colors.mainText};
    }

    &.highlighted {
        background: ${props => props.theme.colors.backgroundSelectedQuestion};
        border: 1px solid ${props => props.theme.colors.primary};

        p {
            color: #29292e;
        }

        footer .user-info span {
            color: #737380;
        }
    }

    &.answered {
        background: ${props => props.theme.colors.backgroundAnsweredQuestion};
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.6rem;

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
                color: ${props => props.theme.colors.secondaryText};
                font-size: 0.9rem;
            }
        }

        > div {
            display: flex;
            align-items: center;
            gap: 1.1rem;

            button {
                display: flex;
                align-items: center;
            }
        }
    }
`;

export const ButtonIcon = styled.button`
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: filter 0.2s;

    &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${props => props.theme.colors.secondaryText};
        gap: 0.6rem;

        &.liked {
            color: ${props => props.theme.colors.primary};

            svg path {
                stroke: ${props => props.theme.colors.primary};
            }
        }
    }

    &:hover {
        color: ${props => props.theme.colors.mainButtonHover};

        svg path {
            stroke: ${props => props.theme.colors.mainButtonHover};
        }

        svg circle {
            stroke: ${props => props.theme.colors.primary};
        }
    }
`;
