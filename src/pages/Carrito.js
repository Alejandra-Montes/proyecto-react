
import { useDispatch, useSelector } from 'react-redux'

function Carrito(){
    const totalPrecio = useSelector(store => store.totalPrecio)
    const img = useSelector(store => store.img)
    return (
        <div>
            {totalPrecio}
            {img.map((producto, key) => (
          <div  className='cuadro' key={key}>
            <img src={producto.ruta}/>
            <label className='name'>{producto.nombre}</label>
          </div>
        ))}
          </div>
    )
}

export default Carrito