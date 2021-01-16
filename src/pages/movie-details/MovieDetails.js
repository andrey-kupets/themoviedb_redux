import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {moviesService} from "../../services";
// import {imgBuilder} from "../../components";


export const MovieDetails = () => {
    const [filmDetails, setFilmDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    console.log(filmDetails, 'filmDetails')

    // const {params: {id}} = useRouteMatch();
    const {id, ...rest} = useParams();
    // console.log({id, ...rest})

    const getMovieDetails = async () => {
        try {
            setIsLoading(true)
            const data = await moviesService.getMovieDetailsById(id);
            setFilmDetails(data);
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    if (isLoading && !filmDetails || isLoading === null) {
        return <div>loading...</div>
    }

    const {poster_path, original_title} = filmDetails;

    return (
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title} poster`}/>

            </div>
            <div>
                <h1>{filmDetails.original_title}</h1>
                <h2>{filmDetails.tagline}</h2>
                <h3>{filmDetails.genres.map(el => <span key={el.id}> - {el.name} - </span>)}</h3>
                <p>{filmDetails.overview}</p>
            </div>
        </div>
    )
}