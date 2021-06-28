import styled from 'styled-components';

export const RoomCodeStyle = styled.button`
    height: 2.7rem;
    border-radius: 0.53rem;
    overflow: hidden;
    background: ${props => props.theme.colors.headerBackground};
    border: 1px solid ${props => props.theme.colors.primary};
    display: flex;
    cursor: pointer;

    div {
        background: ${props => props.theme.colors.primary};
        height: 100%;
        padding: 0 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background: ${props => props.theme.colors.mainButtonHover};
        }
    }

    span {
        color: ${props => props.theme.colors.mainText};
        display: block;
        align-self: center;
        flex: 1;
        padding: 0 1.1rem 0 0.8rem;
        width: 16rem;
        font-size: 0.8rem;
        font-weight: 500;
    }
`;
