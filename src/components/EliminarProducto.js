import { useEffect } from "react";

function EliminarProducto(props){
    return (
        <div>
         <button onClick={props.eliminarProducto}>
            X
         </button>
      </div>
    )
}

export default EliminarProducto
