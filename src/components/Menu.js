import '../css/menu.css'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
  
const Menu =() => {
    const navigate = useNavigate()
    function prueba (event){
        event.preventDefault()
        navigate("/contacto")
    }

    return (
        <div className="topnav">
           <Link to="/">Productos</Link>
           <Link to="/contacto">Contacto</Link>
            <div className='icono'>
                <IconButton aria-label="cart" onClick={prueba}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon fontSize="large" sx={{ color: 'white' }}/>
                </Badge>
                </IconButton>
            </div>
        </div>
    )
}

export default Menu