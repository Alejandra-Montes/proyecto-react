import '../css/carrito.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { vaciarcarrito, deleteImg, restarprecio } from '../store/actions'
import { useDispatch } from 'react-redux'
import EliminarProducto from '../components/EliminarProducto'

function Carrito(){
    const totalPrecio = useSelector(store => store.totalPrecio)
    const img = useSelector(store => store.img)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cancelarpedido = (event) =>{
      dispatch(vaciarcarrito(0))
      navigate("/")

  }
    const pagar = (event) =>{
        navigate("/pagar")
    } 

    const quitarProducto = (producto, key) => {
      const lstImg = [...img]

      lstImg.splice(key, 1)
      dispatch(deleteImg(lstImg))
      dispatch(restarprecio(producto))
    }
    return (
      <div>
      {img.map((producto, key) => (
        <div className='cuadroproductos' key={key}>
          <img className='imagencarrito' src={producto.ruta}/>
          <p className='nameproductos'>Producto: {producto.nombre}</p>
          <p className='nameproductos'>Cantidad: {producto.cantidadCompra}</p>
          <p className='nameproductos'>Precio: $ {producto.precioUnitario}</p>
          <p className='nameproductos'>Total: $ {producto.totalPagarCompra}</p>
          <EliminarProducto eliminarProducto={() => quitarProducto(producto, key)}/>
        </div>
      ))}
      <div className='montototalcarrito'>
        Total a pagar:  $  {totalPrecio} 
        <br></br>
        <br></br>
        <button className="botones" onClick={cancelarpedido}>Cancelar Pedido</button>  
        <br></br>
        <button className="botones" onClick={pagar} disabled={totalPrecio == 0}>Pagar</button>
      </div>
    </div>
    )
}

export default Carrito