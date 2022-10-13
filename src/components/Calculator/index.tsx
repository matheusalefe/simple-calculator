import { Button } from "../Button";
import { Container } from "./styles";

export function Calculator(){
    return(
        <Container>
            <div id="screen">{"Hello, world!"}</div>
            <section id="buttons">
                <table id="numbers">
                    <tbody>
                        <tr>
                            <td><Button>7</Button></td>
                            <td><Button>8</Button></td>
                            <td><Button>9</Button></td>
                        </tr>
                        <tr>
                            <td><Button>4</Button></td>
                            <td><Button>5</Button></td>
                            <td><Button>6</Button></td>
                        </tr>
                        <tr>
                            <td><Button>1</Button></td>
                            <td><Button>2</Button></td>
                            <td><Button>3</Button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Button>0</Button></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table id="functions">
                    <tbody>
                        <tr>
                            <td><Button>+</Button></td>
                            <td><Button>-</Button></td>
                        </tr>
                        <tr>
                            <td><Button>x</Button></td>
                            <td><Button>^</Button></td>
                        </tr>
                        <tr>
                            <td><Button>/</Button></td>
                            <td><Button>√</Button></td>
                        </tr>
                        <tr>
                            <td><Button variant="red">C</Button></td>
                            <td><Button variant="green">=</Button></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
        </Container>
    )
}