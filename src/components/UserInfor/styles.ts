import styled from 'styled-components';

export const UserInfoStyle = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 50%;
    }

    > span {
        width: 4rem;
        height: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${props => props.theme.colors.secondaryText};
        font-size: 0.9rem;

        @media (min-width: 350px) {
            width: 8rem;
            height: 2rem;
        }

        @media (min-width: 430px) {
            width: initial;
            height: initial;
        }
    }
`;
