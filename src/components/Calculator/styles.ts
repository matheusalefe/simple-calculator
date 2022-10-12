import styled from 'styled-components'

export const Container = styled.main`
    width: 40rem;
    height: 40rem;
    margin: auto;
    margin-top: 4rem;
    border-radius: 16px;
    background-color: var(--color-grey-secundary);
    display: flex;
    flex-direction: column;
    #screen{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 35rem;
        height: 6rem;
        border-radius: 16px;
        background-color: var(--color-green-primary);
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        font-family: 'Share Tech Mono', monospace;
        font-size: 3rem;
        text-align: center;
        justify-content: center;
    }
`