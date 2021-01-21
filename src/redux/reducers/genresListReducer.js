const initialstate = {
    genresList: []
}

export default (state = initialstate, action) => {
    switch (action.type) {
        case 'SET_GENRES_LIST': return {...state, genresList: action.payload};
        default: return state;
    }
}
