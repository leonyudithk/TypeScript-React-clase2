import { useState } from "react";

const Counter =()=>{
    const [counter, setCounter] = useState(0)
    const [num, setNum] = useState(0)

        const incrementar =(numero: number = num): void=>{
            setCounter(counter + numero)
        }

        const decrementar =(numero: number): void=>{
            setCounter(counter - numero)
        }

        const handleNumero =(e : any): void=>{
            let num: number = e.target.value
            console.log(typeof num)
            setNum(num)
        }
    return(
        <div>
            <div className="mt-2">
                <h1>Counter: {counter} </h1>
                <input type="number" name="numero" value={num} placeholder="Ingrese un numero" onChange={handleNumero}/>
            </div>
            <button className="btn btn-primary mt-2" onClick={()=>incrementar(1)}>+1</button>
            <button className="btn btn-warning mt-2"onClick={()=>decrementar(1)}>-1</button>
            <button className="btn btn-danger mt-2" onClick={()=> setCounter(0)}>Reset</button>
            
        </div>
    )
}
export default Counter;
