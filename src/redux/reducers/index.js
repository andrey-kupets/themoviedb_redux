import {combineReducers} from "redux";
import inputData_State from './inputDataReducer';
import moviesData_State from "./moviesDataReducer";
import isLoading_State from './loadingReducer';
import genresList_State from './genresListReducer';

export const reducer = combineReducers({
    inputData_State,
    moviesData_State,
    isLoading_State,
    genresList_State
})
