import '../css/producto.css'
import logo from '../assets/img/cheetos-jalapenio.jpeg'; // with import

function Producto(props){

    return(
        <div className='filaCuadros'>
        {props.listaNombres.map((nmbr, key) => (
          <div className="cuadro">
            <img src={logo} />
            {nmbr}
          </div>
        ))}
      </div>
    )
}

export default Producto