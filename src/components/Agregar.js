import { useState } from "react"
import { useDispatch } from 'react-redux'
import { increment, total, setImg } from '../store/actions'

function Agregar(props){

    const [ counter, setCounter ] = useState(0)
    const dispatch = useDispatch()

    const decrementar = () =>{
        if(counter === 0){
            setCounter(0) 
        } else {
            setCounter(counter - 1) 
        }
    }
    const agregar = () =>{
        console.log(props.producto)
        dispatch(increment())
        dispatch(total(counter * props.producto.precio))
        dispatch(setImg(props.producto))
    }
    return (
        <div>
            <button onClick={decrementar}>-</button> 
            {counter} 
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <br></br>
            <button onClick={agregar} disabled={counter == 0}>Agregar</button>
        </div>
    )
}

export default Agregar