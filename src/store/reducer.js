const initialState = {
    counter: 0,
    totalPrecio: 0,
    img: []
}

function reducer (state = initialState, action){
    const { type, payload } = action
    switch(type){
        case 'AGREGAR': {
            return {
                ...state,
                counter: state.counter + 1,
            }
        }
        case 'QUITAR': {
            return {
                ...state,
                counter: state.counter - 1,
            }
        }
        case 'TOTAL': {
            return{
            ...state,
            totalPrecio: state.totalPrecio + payload
            }
        }
        case 'SET_IMG': {
            return{
                ...state,
                img: [...state.img, payload]
                }
        }
        case 'DELETE_IMG': {
            return{
                ...state,
                img: state.img.splice(payload, 1)
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