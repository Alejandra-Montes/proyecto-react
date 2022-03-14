import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import '../css/index.css'
import '../css/carrito.css'
import Contacto from "../pages/Contacto";
import Productos from '../pages/Productos';
import Menu from "../components/Menu";
import Carrito from '../pages/Carrito';
import PagandoCuenta from '../pages/Pagando';
import { Provider } from "react-redux";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="margen">
          <Menu/>
        <Routes>
          <Route path="/" element={<Productos/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/pagar" element={<PagandoCuenta/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
