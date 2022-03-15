
export function total(number){
    return {type: 'TOTAL', payload: number }
}

export function updateList(img){
    return {type: 'UPDATE_LIST', payload: img }
}

/* export function deleteImg(img){
    return {type: 'DELETE_IMG', payload: img }
}  */

export function restarprecio(precio){
    return {type: 'RESTAR_PRECIO', payload: precio }
} 

export function actualizacarrito(number) {
    return { type: 'ACTUALIZA_PRODUCTOS', payload: number }
}

export function vaciarcarrito(number) {
    return { type: 'LIMPIAR_CARRITO', payload: number }
}
