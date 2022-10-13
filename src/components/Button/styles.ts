import styled from 'styled-components'

interface ButtonProps{
    variant?: "red"|"green"
}

export const Container = styled.button<ButtonProps>`
    height: 5.625rem;
    width: 5.625rem;
    font-size: 3.25rem;
    border-radius: 4px;
    border-color: ${props => props.variant == 'red'? 'var(--color-red-primary)': props.variant == 'green'? 'var(--color-green-primary)': 'var(--color-grey-primary)'};
    border-style: solid;
    background-color: ${props => props.variant == 'red'? 'var(--color-red-primary)': props.variant == 'green'? 'var(--color-green-primary)': 'var(--color-grey-primary)'};
    cursor: pointer;
    &:hover{
        background-color: whitesmoke;
    }
    @media (max-width: 600px) {
        width: 2.8rem;
        height: 2.8rem;
        font-size: 1.6rem;
    }
`