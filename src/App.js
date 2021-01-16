// import logo from './logo.svg';
import React from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import './App.css';
import { BaseLayout } from "./layouts";
import { Home, MovieDetails } from "./pages";

// show error handler for react components
// notifications

function App() {
    const history = useHistory();
    // console.log(history)
    return (
    <BaseLayout>
        <Switch>
          <Route path='/' exact>
             <Home/>
          </Route>

          <Route path='/movie/:id'>
             <MovieDetails/>
          </Route>

          {/*  <Redirect to={'/'}/>*/}

           <Route>
             <h1>PAGE NOT FOUND
                 <button onClick={() => history.push('/')}>go home</button>
             </h1>
           </Route>
        </Switch>
    </BaseLayout>
  );
}

export default App;

// fetch('https://api.themoviedb.org/3/discover/movie', {
//     headers: {
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzdmNjcwOTcwMjNlNThiYzcwNDg5MTQ5YWZhNDkzYiIsInN1YiI6IjVmZmUwODQ0OGQ1MmM5MDAzZGFhOGJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.McIJyJDYuWqfp1ns1zjpAvIwO5KkRmuods5-pJsHQug'
//     }
// }).then(res => res.json()).then(console.log)

