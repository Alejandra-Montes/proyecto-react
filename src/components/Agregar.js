import { useState } from "react"
import { useDispatch } from 'react-redux'
import { total, setImg, actualizacarrito, deleteImg } from '../store/actions'

function Agregar(props){
    const [ counter, setCounter ] = useState(0)
    const dispatch = useDispatch()

    const decrementar = () =>{
        if(counter <= 0){
            setCounter(0);
        } else {
            setCounter(counter - 1) 
        }
        disminuyeproducto();
    }
    const agregar = () =>{
        console.log(props.producto);
        dispatch(actualizacarrito(counter));
        dispatch(total(counter * props.producto.precioUnitario));
        dispatch(setImg(props.producto));
 
        props.producto.cantidadCompra = counter;
        props.producto.totalPagarCompra = counter * props.producto.precioUnitario;
    }
    const disminuyeproducto = () =>{
        console.log('Disminuyendo producto...');
        console.log(props.producto);
        dispatch(actualizacarrito(-1));
        dispatch(total(-props.producto.precioUnitario));
 
        props.producto.cantidadCompra = props.producto.cantidadCompra - 1;
        props.producto.totalPagarCompra = (counter * props.producto.precioUnitario) - props.producto.precioUnitario;
        
        if (props.producto.cantidadCompra == 0) {
            console.log('Eliminando producto del carrito...');
            dispatch(deleteImg(props.producto));
        }
    } 
    return (
        <div>
            <button className="botondecremento" onClick={decrementar}>-</button> 
            <label className="contadorproductos">{counter}</label>
            <button className="botonincremento" onClick={() => setCounter(counter + 1)}>+</button>
            <br></br>
            <button className="botonagregar" onClick={agregar} disabled={counter == 0}>Agregar</button>
       </div>
    )
}

export default Agregar