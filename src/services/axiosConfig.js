import axios from 'axios';

export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzdmNjcwOTcwMjNlNThiYzcwNDg5MTQ5YWZhNDkzYiIsInN1YiI6IjVmZmUwODQ0OGQ1MmM5MDAzZGFhOGJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.McIJyJDYuWqfp1ns1zjpAvIwO5KkRmuods5-pJsHQug'
    }
})