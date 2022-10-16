import { Container } from "./styles";

export function LoginForm(){
    return(
        <Container>
            <form acceptCharset="uft-8">
                <h1>Simple Calculator</h1>
                <label htmlFor="emailInput">E-mail:</label>
                <input type="email" id="emailInput" placeholder="Insira o seu email..."/>
                <label htmlFor="passwordInput" >Senha:</label>
                <input type="password" id="passwordInput" placeholder="********"/>
                <button>Entrar</button>
            </form>
        </Container>
    )
}