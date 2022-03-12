import '../css/menu.css'
import { Badge, IconButton, AppBar, Box, Toolbar, Container, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
  
const Menu =() => {
    const counter = useSelector(store => store.counter)
    const navigate = useNavigate()
    const productos = (event) => {
        event.preventDefault()
        navigate("/")
      };
      const contacto = (event) => {
        event.preventDefault()
        navigate("/contacto")
      };
    
      const carrito = (event) => {
        event.preventDefault()
        navigate("/carrito")
    }
    return (
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                <Button onClick={productos} sx={{ my: 2, color: 'white', display: 'block' }}>
                Productos
                </Button>
                <Button onClick={contacto} sx={{ my: 2, color: 'white', display: 'block' }}>
                Contacto
                </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <IconButton aria-label="cart" onClick={carrito}>
                <Badge badgeContent={counter} color="secondary">
                    <ShoppingCartIcon fontSize="large" sx={{ color: 'white' }}/>
                </Badge>
                </IconButton>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    )
}

export default Menu