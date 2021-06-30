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
    position: ${props => (props.isOpen ? 'absolute' : 'relative')};
    top: ${props => (props.isOpen ? '6.735px' : '0')};
    right: ${props => (props.isOpen ? '1.6rem' : '0')};
    z-index: 1;
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
