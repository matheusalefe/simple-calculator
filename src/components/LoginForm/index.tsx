import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { AppContext } from "../../services/context";
import { Container } from "./styles";

export function LoginForm(){

    const { token, setToken } = useContext(AppContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()

    function Login(){
        if(email && password){
            api({
                method: "POST",
                url: "/login",
                data:{
                    email: email,
                    password: password,
                    portal: 'info'
                }
            })
            .then(res => 
                (res.status == 200 && res.data? (
                    console.log(res.data),
                    setToken(res.data[0].token)
                    ) 
                : 
                    alert("Falha no login")))
            .catch(() => alert("Email e/ou senha incorreto(s)"))
        } else {
            alert("Preencha os campos obrigatórios ates de entrar")
        }
    }

    useEffect(() => {
        if(token){
            navigate('/', {replace: true})
        }
    }, [token])

    return(
        <Container>
            <div id="form">
                <h1>Simple Calculator</h1>
                <label htmlFor="emailInput">E-mail: *</label>
                <input type="email" id="emailInput" placeholder="Insira o seu email..." onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="passwordInput" >Senha: *</label>
                <input type="password" id="passwordInput" placeholder="********" onChange={e => setPassword(e.target.value)}/>
                <button onClick={() => Login()} onTouchStart={() => Login()}>Entrar</button>
            </div>
        </Container>
    )
}