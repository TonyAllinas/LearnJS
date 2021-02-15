'use strict';

const numbersOfFilms = +prompt('Сколько Вильмов вы уже посмотрели?', '5');


const personalMovieDB = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

console.log(personalMovieDB);

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

if (personalMovieDB.count <= 10) {
	alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert('Вы классный зритель');
} else if (personalMovieDB.count >= 30) {
	alert(' Вы киноман');
} else {
	alert('Что то пошло не так =(');
}