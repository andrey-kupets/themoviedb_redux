const initialState = {
    moviesData: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIES_DATA': {
            console.log('SET_MOVIES_DATA');
            console.log(action);
            return {...state, moviesData: action.payload}
        }
        case 'SET_NEW_DATA_IN_MOVIES': {
            console.log('SET_NEW_DATA_IN_MOVIES');
            console.log(action);
            return {...state, moviesData: {...state.moviesData, movies: action.payload}}
            // return {state: {moviesData: {movies: action.payload}}}
        }
        default: return state;
    }
}


