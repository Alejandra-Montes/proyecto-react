
export function total(number){
    return {type: 'TOTAL', payload: number }
}

export function setImg(img){
    return {type: 'SET_IMG', payload: img }
}

export function deleteImg(img){
    return {type: 'DELETE_IMG', payload: img }
} 

export function restarprecio(precio){
    return {type: 'RESTAR_PRECIO', payload: precio }
} 

export function actualizacarrito(number) {
    return { type: 'ACTUALIZAPRODUCTOS', payload: number }
}

export function vaciarcarrito(number) {
    return { type: 'LIMPIARCARRITO', payload: number }
}
