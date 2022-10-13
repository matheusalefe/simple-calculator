import styled from 'styled-components'

export const Container = styled.main`
    width: 40rem;
    height: 42rem;
    margin: auto;
    margin-top: 4rem;
    border-radius: 16px;
    background-color: var(--color-grey-secundary);
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
        width: 20rem;
        height: 21rem;
    }
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
        @media (max-width: 600px) {
            width: 17.5rem;
            height: 3rem;
            font-size: 1.5rem;
        }
    }
    #numbers{
        width: 20.75rem;
        height: 27.625rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 2.5rem;
        @media (max-width: 600px) {
            width: 10.325rem;
            height: 13.8rem;
            font-size: 1.5rem;
            margin-left: 1.25rem;
        }
        tr{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-bottom: 2rem;
            @media (max-width: 600px) {
                padding-bottom: 1rem;
            }
        }
    }
`