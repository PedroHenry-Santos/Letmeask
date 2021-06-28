import styled from 'styled-components';

export const UserInfoStyle = styled.div`
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
`;
