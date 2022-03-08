import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import '../css/producto.css'
import Contacto from "../pages/Contacto";
import Productos from '../pages/Productos';
import Menu from "../components/Menu";

function App() {

  return (
    

<BrowserRouter>
<div className="margen">
  <Menu />
<Routes>
   <Route path="/" element={<Productos/>} />
   <Route path="/contacto" element={<Contacto/>} />
     
</Routes>
</div>
</BrowserRouter>
    
  );
}

export default App;
