import { Cancel } from "@mui/icons-material"
import { IconButton } from "@mui/material"

function EliminarProducto(props){
    // Cancel
    return (
        <div>
            <IconButton aria-label="cart" onClick={props.eliminarProducto}>
                <Cancel fontSize="large" sx={{ color: 'red' }}/>
            </IconButton>
      </div>
    )
}

export default EliminarProducto
