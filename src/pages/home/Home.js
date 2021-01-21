import React, { useEffect, useState } from 'react';
import { FilmList, PaginationWrapper } from "../../components";
import { moviesService, genresService } from "../../services";
import styles from './Home.module.css';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import moviesData_State from "../../redux/reducers/moviesDataReducer";

const mergeMoviesWithGenres = (movies, genres) => {
    return movies.map((movie) => {
        const {genre_ids} = movie;
        const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId));

        return {
            ...movie,
            movieGenresList,
        }
    })
}

export const Home = () => {
    const history = useHistory();
    // const [genresList, setGenresList] = useState([]);
    // const [isLoading, setIsLoading] = useState(null);
    // const [moviesData, setMoviesData] = useState(null);

    const moviesData = useSelector(({moviesData_State: {moviesData}}) => moviesData);
    const isLoading = useSelector(({isLoading_State: {isLoading}}) => isLoading)
    const dispatch = useDispatch();
    console.log('--------------------------------------');
    console.log(moviesData);
    console.log('--------------------------------------');
    const fetchMovies = (params) => {
        try {
            return moviesService.getMovies(params);
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
            dispatch({type: 'SET_IS_LOADING', payload: true});
            const [{results, ...rest}, genres] = await Promise.all(requests)
            console.log({results, genres}, "Promise.all([fetchMovies(), fetchGenres()])")
            // setMoviesData({movies: mergeMoviesWithGenres(results, genres), ...rest});
            dispatch({type: 'SET_MOVIES_DATA', payload: {movies: mergeMoviesWithGenres(results, genres), ...rest}});
            dispatch({type: 'SET_GENRES_LIST', payload: genres});
            console.log(results, 'results from home')
        } catch(e) {
            console.error(e);
        } finally {
            dispatch({type: 'SET_IS_LOADING', payload: false});
        }
    }

    useEffect(() => {
        fetchMoviesData();
    }, [])

    const renderLoadingIndicator = () => <div className={styles.loading}>Loading...</div>

    const onFilmClick = (film) => history.push(`/movie/${film.id}`);

    const handlePageChange = async (page) => {
        const {results, ...rest} = await fetchMovies({page});
        dispatch({type: 'SET_MOVIES_DATA', payload: {movies: mergeMoviesWithGenres(results), ...rest}});
    };

    return (
        <div>
            {/*{!isLoading && !moviesList.length && 'no data found'}*/}
            {/*{true ? renderLoadingIndicator() : <FilmList/>}*/}
            {isLoading || isLoading === null ? renderLoadingIndicator() : (
                <PaginationWrapper
                    currentPage={moviesData.page}
                    totalPages={moviesData.total_pages}
                    onPrevClick={handlePageChange}
                    onNextClick={handlePageChange}
                    handleLastPage={handlePageChange}
                    handleFirstPage={handlePageChange}
                >
                    <FilmList
                        onFilmClick={onFilmClick}
                        items={moviesData.movies}/>
                </PaginationWrapper>
            )
            }
        </div>
    )
}



// import React, { useEffect, useState } from 'react';
// import { FilmList, PaginationWrapper } from "../../components";
// import { moviesService, genresService } from "../../services";
// import styles from './Home.module.css';
// import {useHistory} from "react-router-dom";
//
// export const Home = () => {
//     const history = useHistory();
//     const [moviesList, setMoviesList] = useState([]);
//     const [genresList, setGenresList] = useState([]);
//     const [isLoading, setIsLoading] = useState(null);
//     const [movieData, setMovieData] = useState(null);
//
//     const fetchMovies = async (params) => {
//         try {
//             const {results, page, total_pages, total_results}  = await moviesService.getMovies(params);
//             setMovieData({page, total_pages, total_results})
//             // setMoviesList(results);
//             return results;
//         } catch(e) {
//             console.error(e);
//         }
//     }
//
//     const fetchGenres = async () => {
//         try {
//             const {genres} = await genresService.getGenres();
//             return genres;
//             // setGenresList(genres);
//         } catch(e) {
//             console.error(e);
//         }
//     }
//
//     const fetchMoviesData = async (movieParams) => {
//         const requests = genresList.length ? [fetchMovies(movieParams)] : [fetchMovies(movieParams), fetchGenres()];
//         try {
//             setIsLoading(true);
//             const [movies, genres = genresList] = await Promise.all(requests)
//             console.log({movies, genres}, "Promise.all([fetchMovies(), fetchGenres()])")
//             const mergedWithGenresMovies = movies.map((movie) => {
//                 const {genre_ids} = movie;
//                 const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId));
//
//                 return {
//                     ...movie,
//                     movieGenresList,
//                 }
//             })
//             setMoviesList(mergedWithGenresMovies);
//             setGenresList(genres);
//         } catch(e) {
//             console.error(e);
//         } finally {
//             setIsLoading(false);
//         }
//     }
//
//     useEffect(() => {
//         fetchMoviesData();
//     }, [])
//
//     const renderLoadingIndicator = () => <div className={styles.loading}>Loading...</div>
//
//     const onFilmClick = (film) => history.push(`/movie/${film.id}`);
//
//     const handlePageChange = (page) => fetchMoviesData({page});
//
//     return (
//     <div>
//         {/*{!isLoading && !moviesList.length && 'no data found'}*/}
//         {/*{true ? renderLoadingIndicator() : <FilmList/>}*/}
//         {isLoading || isLoading === null ? renderLoadingIndicator() : (
//             <PaginationWrapper
//             currentPage={movieData.page}
//             totalPages={movieData.total_pages}
//             onPrevClick={handlePageChange}
//             onNextClick={handlePageChange}
//             handleLastPage={handlePageChange}
//             handleFirstPage={handlePageChange}
//             >
//             <FilmList
//                 onFilmClick={onFilmClick}
//                 items={moviesList}/>
//             </PaginationWrapper>
//             )
//         }
//     </div>
// )
// }
