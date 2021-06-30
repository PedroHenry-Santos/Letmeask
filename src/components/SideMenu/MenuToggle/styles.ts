import styled from 'styled-components';

interface MenuToggleStyleProps {
    isOpen: boolean;
}

export const MenuToggleStyle = styled.button.attrs(
    (props: MenuToggleStyleProps) => ({
        isOpen: props.isOpen
    })
)`
    display: flex;
    z-index: 2;
    outline: none;
    border: none;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primary};

    svg {
        margin-top: ${props => (props.isOpen ? '0.3rem' : '0.4rem')};
        margin-left: ${props => (props.isOpen ? '0.3rem' : '0')};
        path {
            stroke: ${props => props.theme.colors.mainText};
        }
    }
`;
