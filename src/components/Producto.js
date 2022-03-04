import '../css/producto.css'
import Agregar from './Agregar'

function Producto(props){

    return(
        <div className='filaCuadros'>
        {props.listaNombres.map((nmbr, key) => (
          <div  className='cuadro'>
            <img src={nmbr.ruta} />
            <Agregar />
            <label className='name'>{nmbr.nombre}</label>
          </div>
        ))}
      </div>
    )
}

export default Producto