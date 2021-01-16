import React, { useEffect, useState } from 'react';
import { FilmList } from "../../components";
import { moviesService, genresService } from "../../services";
import styles from './Home.module.css';
import {useHistory} from "react-router-dom";

export const Home = () => {
    const history = useHistory();
    const [moviesList, setMoviesList] = useState([]);
    // const [genresList, setGenresList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const fetchMovies = async () => {
        try {
            const {results, page, total_pages, total_results}  = await moviesService.getMovies();
            // setMoviesList(results);
            return results;
        } catch(e) {
            console.error(e);
        }
    }

    const fetchGenres = async () => {
        try {
            const {genres} = await genresService.getGenres();
            return genres;
            // setGenresList(genres);
        } catch(e) {
            console.error(e);
        }
    }

    const fetchMoviesData = async () => {
        const requests = [fetchMovies(), fetchGenres()];
        try {
            setIsLoading(true);
            const [movies, genres] = await Promise.all(requests)
            console.log({movies, genres}, "Promise.all([fetchMovies(), fetchGenres()])")
            const mergedWithGenresMovies = movies.map((movie) => {
                const {genre_ids} = movie;
                const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId));

                return {
                    ...movie,
                    movieGenresList,
                }
            })
            setMoviesList(mergedWithGenresMovies)
        } catch(e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMoviesData();
    }, [])

    const renderLoadingIndicator = () => (
        <div className={styles.loading}>Loading...</div>
    )

    const onFilmClick = (film) => {
        history.push(`/movie/${film.id}`)
    }

    return (
    <div>
        {/*{!isLoading && !moviesList.length && 'no data found'}*/}
        {/*{true ? renderLoadingIndicator() : <FilmList/>}*/}
        {isLoading || isLoading === null ? renderLoadingIndicator() : (
            <FilmList
                onFilmClick={onFilmClick}
                items={moviesList}/>)}
    </div>
)
}