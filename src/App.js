// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BaseLayout } from "./layouts";
import { Home } from "./pages";

// show error handler for react components
// notifications

function App() {
    return (
    <BaseLayout>
        <Home/>
    </BaseLayout>
  );
}

export default App;

// fetch('https://api.themoviedb.org/3/discover/movie', {
//     headers: {
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzdmNjcwOTcwMjNlNThiYzcwNDg5MTQ5YWZhNDkzYiIsInN1YiI6IjVmZmUwODQ0OGQ1MmM5MDAzZGFhOGJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.McIJyJDYuWqfp1ns1zjpAvIwO5KkRmuods5-pJsHQug'
//     }
// }).then(res => res.json()).then(console.log)

