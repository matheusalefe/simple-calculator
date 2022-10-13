import { Button } from "../Button";
import { Container } from "./styles";

export function Calculator(){
    return(
        <Container>
            <div id="screen">{"Hello, world!"}</div>
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
        </Container>
    )
}