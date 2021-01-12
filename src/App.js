import logo from './logo.svg';
import React from 'react';
import './App.css';
import {moviesService} from "./services";

function App() {
    React.useEffect(() => {
        moviesService.getMovies().then(console.log)
    })

    return (
    <div className="App">
      yyyy
    </div>
  );
}

export default App;

// fetch('https://api.themoviedb.org/3/discover/movie', {
//     headers: {
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzdmNjcwOTcwMjNlNThiYzcwNDg5MTQ5YWZhNDkzYiIsInN1YiI6IjVmZmUwODQ0OGQ1MmM5MDAzZGFhOGJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.McIJyJDYuWqfp1ns1zjpAvIwO5KkRmuods5-pJsHQug'
//     }
// }).then(res => res.json()).then(console.log)

