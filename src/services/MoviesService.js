import {AXIOS} from "./axiosConfig";

class MoviesService {
    async getMovies() {
        const { data } = await AXIOS.get('/discover/movie');
        // throw new Error('bidovo vse');
        return data;
    }
    async getMovieDetailsById(movieId) {
        const {data} = await AXIOS.get(`/movie/${movieId}`);
        return data;
    }
}

export const moviesService = new MoviesService();


// class MoviesService {
//     getMovies = async () => {
//         const {data} = await AXIOS.get('/discover/movies')
//         return data;
//     };
//     getMovieDetailsBiId = async (movieId) => {
//         const {data} =  await AXIOS.get(`/movie/${movieId}`)
//         return data;
//     };
// }

