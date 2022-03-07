import '../css/menu.css'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  
function Menu(){
    return (
        <div className="topnav">
            <a className="active" href="#news">Productos</a>
            <a href="#contact">Contacto</a>
            <div className='icono'>
            <IconButton aria-label="cart">
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon fontSize="large" sx={{ color: 'white' }}/>
            </Badge>
            </IconButton>
            </div>
        </div>
    )
}

export default Menu