import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../services/context";
import { Container } from "./styles";

export function Navbar(){
    const { userName, portalLogo,setToken } = useContext(AppContext)
    return(
        <Container>
            <h1>{portalLogo? 
                <>
                    <img src={`data:image/png;base64,${portalLogo}`}/>
                    <span>InfoRMI</span>
                </>
                :
                "Simple Calculator"}{userName? <span>{`-> ${userName}`}</span>:null}</h1>
            <Link onClick={() => setToken(undefined)} to='/login'>Login</Link>
        </Container>
    )
}