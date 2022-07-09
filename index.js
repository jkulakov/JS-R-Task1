'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let movies = {};

let lastWatchedMovie1 = prompt('Один из последних просмотренных фильмов?');
let lastMovieScore1 = prompt('На сколько оцените его?');
let lastWatchedMovie2 = prompt('Один из последних просмотренных фильмов?');
let lastMovieScore2 = prompt('На сколько оцените его?');

personalMovieDB.movies[lastWatchedMovie1] = lastMovieScore1;
personalMovieDB.movies[lastWatchedMovie2] = lastMovieScore2;
