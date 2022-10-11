import styled from "styled-components";

export const Container = styled.nav`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--color-grey-primary);
    a{
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 2.5rem;
    }
    h1{
        width: 55%;
        display: flex;
        justify-content: flex-end;
    }
`