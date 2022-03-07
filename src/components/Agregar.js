import { useState } from "react"

function Agregar(){

    const [ counter, setCounter ] = useState(0)

    const decrementar = () =>{
        console.log(counter)
        if(counter === 0){
            setCounter(0) 
        } else {
            setCounter(counter - 1) 
        }
    }
    return (
        <div>
            <button onClick={decrementar}>-</button> 
            {counter} 
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <br></br>
            <button>Agregar</button>
        </div>
    )
}

export default Agregar