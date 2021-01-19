const initialState = {
    inputData: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INPUTDATA': return {...state, inputData: action.payload}
        default: return state;
    }
}
