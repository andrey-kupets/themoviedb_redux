const initialstate = {
    genresList: []
}

export default (state = initialstate, action) => {
    switch (action.payload) {
        case 'SET_GENRES_LIST': return {...state, genresList: action.payload};
        default: return state;
    }
}
