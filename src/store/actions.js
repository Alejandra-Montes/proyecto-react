export function increment() {
    return { type: 'AGREGAR' }
}

export function decrement(){
    return { type:'QUITAR' }
}

export function total(number){
    return {type: 'TOTAL', payload: number }
}

export function setImg(img){
    return {type: 'SET_IMG', payload: img }
}

export function deletImg(img){
    return {type: 'DELETE_IMG', payload: img }
}