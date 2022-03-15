import { AddCircle, DoDisturbOn } from "@mui/icons-material"
import { Button, IconButton } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { total, updateList, actualizacarrito } from '../store/actions'

function Agregar(props){
    const [ counter, setCounter ] = useState(0)
    const lstProducto = useSelector(store => store.img)
    const dispatch = useDispatch()

    const decrementar = () =>{
        if(counter <= 0){
            setCounter(0);
        } else {
            setCounter(counter - 1) 
        }
    }
    const agregar = () =>{
        dispatch(actualizacarrito(counter));
        dispatch(total(counter * props.producto.precioUnitario));
        props.producto.cantidadCompra = counter
        props.producto.totalPagarCompra = counter * props.producto.precioUnitario
        const copiaLista = [...lstProducto, props.producto]
        dispatch(updateList(copiaLista));
    }
    
    return (
        <div>
            <IconButton aria-label="cart" onClick={decrementar}>
                <DoDisturbOn fontSize="small" sx={{ color: 'black' }}/>
            </IconButton>
            <label className="contadorproductos">{counter}</label>
            <IconButton aria-label="cart" onClick={() => setCounter(counter + 1)}>
                <AddCircle fontSize="small" sx={{ color: 'black' }}/>
            </IconButton>
            <br></br>
            <Button variant="outlined" className="botonagregar" onClick={agregar} disabled={counter == 0}>Agregar</Button>
       </div>
    )
}

export default Agregar