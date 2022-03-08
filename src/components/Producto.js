import '../css/producto.css'
import Agregar from './Agregar'

function Producto(props){

    return(
        <div className='filaCuadros'>
        {props.listaNombres.map((nmbr, key) => (
          <div  className='cuadro' key={key}>
            <img src={nmbr.ruta} />
            <Agregar />
            <label className='name'>{nmbr.nombre}</label>
            <label className='name'>$ {nmbr.precio}</label>
          </div>
        ))}
      </div>
    )
}

export default Producto