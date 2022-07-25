// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './components/app/app';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// reportWebVitals();


"use strict";

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('Вам есть 18?', '18');
// console.log(answer);

// let incr = 10,
//     decr = 10;


//     incr++;
//     decr--;

//     console.log(incr);
//     console.log(decr);


const numberOfFilms = +prompt ('Сколькo фильмов вы посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('oдин из просмотренних фильмов'),
      b = prompt('На сколько его оцените?'),  
      c = prompt('oдин из просмотренних фильмов'),
      d = prompt('На сколько его оцените?');  

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



