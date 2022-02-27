import { useEffect, useState } from 'react'
import Producto from "./Producto";
import '../css/producto.css'
import Menu from './Menu';

function App() {
  const [listaNombres, setListaNombres]=useState(['Bedu', 'prueba', 'prueba2', 'prueba3', 'prueba4'])
  return (
    <div>
     <Menu />
     <Producto listaNombres={listaNombres} />
     <br></br>
     <Producto listaNombres={listaNombres} />
     <br></br>
     <Producto listaNombres={listaNombres} />
     <br></br>
     <Producto listaNombres={listaNombres} />
    </div>
    
  );
}

export default App;
