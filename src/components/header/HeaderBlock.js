import React from "react";
import {moviesService} from "../../services";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";


export const Header = () => {

    const dispatch = useDispatch();
    const moviesData = useSelector(({moviesData_State: {moviesData}}) => moviesData);

    const onInputType = ({target: {value}}) => {
        dispatch({type: 'SET_INPUT_DATA', payload: value})
        console.log(value)
    }

    const inputData = useSelector(({inputData_State: {inputData}}) => inputData)
    console.log(inputData, 'inputdata')

    const getVideoBySearch = async () => {
        try {
            const {results} = await moviesService.getMoviesBySearch(inputData);
            console.log(results, 'results of search phrase')
            moviesData.movies = results;
            dispatch({type: 'SET_IS_LOADING', payload: true});
            dispatch({type: 'SET_MOVIES_DATA', payload: moviesData});
            setTimeout(() =>{
                dispatch({type: 'SET_IS_LOADING', payload: false});
            },3000)
        } catch (e) {
            console.error(e)
            toast.error('error occurred')
        }
    }

    return (
        <div >
            <label>Search video</label>
            <input onInput={onInputType} type={'text'}/>
            <button onClick={getVideoBySearch}>Submit</button>
        </div>
    )
}
