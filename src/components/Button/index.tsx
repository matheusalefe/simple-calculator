import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children : ReactNode
    functionButton? : (e : any) => void
    variant? : 'red' | 'green'
}

export function Button({children, functionButton, variant}:ButtonProps){
    return(
        <Container
            onClick={functionButton}
            variant={variant}>
            {children}
        </Container>
    )
}