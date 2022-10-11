import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-grey-primary: #AFAFAF;
        --color-grey-secundary: #C1C1C1;
        --color-grey-tertiary: #E5E5E5;
        --color-white-primary: #FFFFFF;
        --color-green-primary: #76A659;
        --color-red-primary: #F35555;
    }
    body{
        font-family: 'Ubuntu', sans-serif;
        margin: 0;
        padding: 0;
    }
`