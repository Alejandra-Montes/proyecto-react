import '../css/producto.css'
import Agregar from './Agregar'

function Producto(props){
  return(
    <div className='filaCuadros'>
      {props.listaNombres.map((producto, key) => (
      <div  className='cuadro' key={key}>
        <img className='imagenproductos' src={producto.ruta}/>
        <Agregar producto={producto}/>
        <label className='nameproductos'>{producto.nombre}</label>
        <label className='nameproductos'>$ {producto.precioUnitario}</label>
      </div>
      ))}
    </div>
  )
  
}

export default Producto