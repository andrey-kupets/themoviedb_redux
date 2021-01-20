const initialState = {
    moviesData: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIES_DATA': return {...state, moviesData: action.payload};
        default: return state;
    }
}


