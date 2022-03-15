const initialState = {
    counter: 0,
    totalPrecio: 0,
    cantidadProducto: 0,
    precioProducto: 0,
    totalPagarProducto: 0,
    img: []
}

function reducer (state = initialState, action){
    const { type, payload } = action
    switch(type){
        case 'TOTAL': {
            return{
            ...state,
            totalPrecio: state.totalPrecio + payload
            }
        }
        case 'UPDATE_LIST': {
            return{
                ...state,
                img: payload,
                }
        }
        case 'ACTUALIZA_PRODUCTOS': {
            return{
                ...state,
                counter: state.counter + payload,
            }
        }
        case 'LIMPIAR_CARRITO': {
            return{
                counter: payload,
                totalPrecio: payload,
                cantidadProducto: payload,
                precioProducto: payload,
                totalPagarProducto: payload,
                img: []
            }
        }
        case 'RESTAR_PRECIO': {
            return{
                ...state,
                totalPrecio: state.totalPrecio - payload.totalPagarCompra,
                counter: state.counter - payload.cantidadCompra
                } 
        }
       default: {
            return {
                ...state
            }
        }
    }
}

export default reducer