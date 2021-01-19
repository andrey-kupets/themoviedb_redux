import React, {useEffect, useState} from "react";
import {moviesService} from "../../services";
import {toast} from "react-toastify";

export const Header = () => {

    const [inputData, setInputData] = useState('');
    const [searchData, setSearchData] = useState(null);
    // const [isLoading, setIsLoading] = useState(null);

    const onInputType = ({target: {value}}) => {
        setInputData(value)
        console.log(value)
    }

    const getVideoBySearch = async () => {
        try {
            // setIsLoading(true)
            const {results} = await moviesService.getMoviesBySearch(inputData);
            console.log('getVideoBySearch');
            console.log(results)
            // const searchedFilms = results.map(film => film.title.includes(inputData))
            setSearchData(searchedFilms)
            console.log('searchedFilms');
            console.log(searchedFilms)
        } catch (e) {
            console.error(e)
            toast.error('error occurred')
        }
        // finally {
        //     setIsLoading(false)
        // }
    }

    // useEffect(() => {
    //     getVideoBySearch(inputData);
    // }, [inputData])

    // if (isLoading || !searchData || isLoading === null) {
    //     return <div>loading...</div>
    // }

    return (
        <div >
            <label>Search video</label>
            <input onInput={onInputType} type={'text'}/>
            <button onClick={getVideoBySearch}>Submit</button>
        </div>
    )
}
