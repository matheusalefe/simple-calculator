import styled from "styled-components";

export const Container = styled.nav`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--color-grey-secundary);
    a{
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 2.5rem;
        text-decoration: none;
        color: black;
        &:hover{
            text-decoration: underline;
        }
    }
    h1{
        width: 55%;
        display: flex;
        justify-content: flex-end;
    }
`