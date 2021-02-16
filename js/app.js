'use strict';

let numbersOfFilms;

function start() {
	numbersOfFilms = +prompt('Сколько Вильмов вы уже посмотрели?', '');

	while(numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
		numbersOfFilms = +prompt('Сколько Вильмов вы уже посмотрели?', '');
	}

}

start();

const personalMovieDB = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');
	
		if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length <= 10) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}
rememberMyFilms();


function detectPersonallevel () {
	if (personalMovieDB.count <= 10) {
		alert('Просмотренно довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		alert('Вы классный зритель');
	} else if (personalMovieDB.count >= 30) {
		alert(' Вы киноман');
	} else {
		alert('Что то пошло не так =(');
	}
}

detectPersonallevel ();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGeneres() {
	for (let i = 1; i <=3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}` );
	}
}
writeYourGeneres();