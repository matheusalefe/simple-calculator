import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Navbar(){
    return(
        <Container>
            <h1>{`[LOGO] Portal`}</h1>
            <Link to='/login'>Login</Link>
        </Container>
    )
}