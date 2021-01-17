import {AXIOS} from "./axiosConfig";

class MoviesService {
    async getMovies(params) {
        const { data } = await AXIOS.get('/discover/movie', {
            params
        });
        // throw new Error('bidovo vse');
        return data;
    }
    async getMovieDetailsById(movieId) {
        const {data} = await AXIOS.get(`/movie/${movieId}`);
        return data;
    }
    async getMoviesBySearch(moviePhrase) {
        const {data} = await AXIOS.get(`/search/movie/${moviePhrase}`);
        return data;
        // fetch('https://api.themoviedb.org/3/search/movie?
        // api_key=a37f67097023e58bc70489149afa493b&query=Yearly%20').then(res => res.json()).then(console.log)
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

