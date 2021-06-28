import styled from 'styled-components';

export const ButtonStyle = styled.button`
    height: 3.4rem;
    border-radius: 0.6rem;
    font-weight: 500;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.whiteText};
    padding: 0 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    transition: filter 0.2s;

    img {
        margin-right: 0.6rem;
    }

    &.outlined {
        background: ${props => props.theme.colors.whiteText};
        border: 1px solid ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
    }

    &:not(:disabled):hover {
        background: ${props => props.theme.colors.mainButtonHover};
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
