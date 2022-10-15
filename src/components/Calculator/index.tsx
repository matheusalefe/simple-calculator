import { useState } from "react";
import { Button } from "../Button";
import { Container } from "./styles";

export function Calculator(){
    const [value, setValue] = useState<string>()
    const [secondValue, setSecondValue] = useState<string>()
    const [func, setFunc] = useState<string>()
    const [result, setResult] = useState<number>()

    function SetValues(number:string){
        !result? 
            !func? 
                !value? 
                    setValue(number)
                : 
                    setValue(value.concat(number))
            : 
                !secondValue? 
                    setSecondValue(number)
                :
                    setSecondValue(secondValue.concat(number))
        :
            (
            setSecondValue(undefined),
            !func?
                (setResult(undefined), setValue(number))
            :
                (setValue(result.toString()), setResult(undefined)))
    }

    function Calculate(){
        if (func && value && secondValue){
            if (func == 'sum'){
                setResult(Number(value) + Number(secondValue))
            } else if (func == 'min'){
                setResult(Number(value) - Number(secondValue))
            } else if (func == 'tim'){
                setResult(Number(value) * Number(secondValue))
            } else if (func == 'div'){
                setResult(Number(value) / Number(secondValue))
            } else if (func == 'pwr'){
                setResult(Number(value) ** Number(secondValue))
            } else if (func == 'root'){
                setResult(Number(secondValue) ** ( 1 / Number(value)))
            }
        } else {
            alert('Invalid expression')
        }
    }

    function Clean(){
        setValue(undefined)
        setSecondValue(undefined)
        setFunc(undefined)
        setResult(0)
    }

    function Refresh(){
        if (result){
            setValue(result.toString())
            setSecondValue(undefined)
            setResult(undefined)
        }
    }

    return(
        <Container>
            <div id="screen">{!result? value? `${value} ${func? func : 'func'} ${secondValue? secondValue : 0}`: 'Aguardando...' : result}</div>
            <section id="buttons">
                <table id="numbers">
                    <tbody>
                        <tr>
                            <td><Button functionButton={() => SetValues('7')}>7</Button></td>
                            <td><Button functionButton={() => SetValues('8')}>8</Button></td>
                            <td><Button functionButton={() => SetValues('9')}>9</Button></td>
                        </tr>
                        <tr>
                            <td><Button functionButton={() => SetValues('4')}>4</Button></td>
                            <td><Button functionButton={() => SetValues('5')}>5</Button></td>
                            <td><Button functionButton={() => SetValues('6')}>6</Button></td>
                        </tr>
                        <tr>
                            <td><Button functionButton={() => SetValues('1')}>1</Button></td>
                            <td><Button functionButton={() => SetValues('2')}>2</Button></td>
                            <td><Button functionButton={() => SetValues('3')}>3</Button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Button functionButton={() => SetValues('0')}>0</Button></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table id="functions">
                    <tbody>
                        <tr>
                            <td><Button functionButton={() => (setFunc('sum'), Refresh())}>+</Button></td>
                            <td><Button functionButton={() => (setFunc('min'), Refresh())}>-</Button></td>
                        </tr>
                        <tr>
                            <td><Button functionButton={() => (setFunc('tim'), Refresh())}>x</Button></td>
                            <td><Button functionButton={() => (setFunc('div'), Refresh())}>/</Button></td>
                        </tr>
                        <tr>
                            <td><Button functionButton={() => (setFunc('pwr'), Refresh())}>^</Button></td>
                            <td><Button functionButton={() => (setFunc('root'), Refresh())}>√</Button></td>
                        </tr>
                        <tr>
                            <td><Button variant="red" functionButton={() => Clean()}>C</Button></td>
                            <td><Button variant="green" functionButton={() => Calculate()}>=</Button></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
        </Container>
    )
}