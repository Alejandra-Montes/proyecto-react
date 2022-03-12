import '../css/producto.css'
import Agregar from './Agregar'

function Producto(props){

  const style = {
    width: '100px',
    height: '100px'
  }
    return(
        <div className='filaCuadros'>
        {props.listaNombres.map((producto, key) => (
          <div  className='cuadro' key={key}>
            <img src={producto.ruta} style={style}/>
            <Agregar producto={producto}/>
            <label className='name'>{producto.nombre}</label>
            <label className='name'>$ {producto.precio}</label>
          </div>
        ))}
      </div>
    )
}

export default Producto