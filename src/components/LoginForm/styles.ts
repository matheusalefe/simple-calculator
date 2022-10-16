import styled from 'styled-components'

export const Container = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    #form{
        position: relative;
        bottom: 7.5rem;
        display: flex;
        flex-direction: column;
        width: 25rem;
        align-self: center;
        align-content: center;
        @media (max-width:600px){
            width:20rem
        }
        h1{
            text-align: center;
        }
        input, button{
            margin-bottom: 0.5rem;
            border-radius: 4px;
            border-style: solid;
        }
    }
`