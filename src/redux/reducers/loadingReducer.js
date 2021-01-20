const initialstate = {
    isLoading: null
}

export default (state = initialstate, action) => {
    switch (action.type) {
        case 'SET_IS_LOADING': return {...state, isLoading: action.payload}
        default: return state;
    }
}
