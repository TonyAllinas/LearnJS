'use strict';

// const personalMovieDB = {
// 	count: 0,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// 	start: function () {
// 		personalMovieDB.count = +prompt('Сколько Вильмов вы уже посмотрели?', '');

// 		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
// 			personalMovieDB.count = +prompt('Сколько Вильмов вы уже посмотрели?', '');
// 		}
// 	},
// 	rememberMyFilms: function () {
// 		for (let i = 0; i < 2; i++) {
// 			const a = prompt('Один из последних просмотренных фильмов?', ''),
// 				b = prompt('На сколько оцените его?', '');

// 			if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length <= 10) {
// 				personalMovieDB.movies[a] = b;
// 				console.log('done');
// 			} else {
// 				console.log('error');
// 				i--;
// 			}
// 		}
// 	},
// 	detectPersonallevel: function () {
// 		if (personalMovieDB.count <= 10) {
// 			alert('Просмотренно довольно мало фильмов');
// 		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 			alert('Вы классный зритель');
// 		} else if (personalMovieDB.count >= 30) {
// 			alert(' Вы киноман');
// 		} else {
// 			alert('Что то пошло не так =(');
// 		}
// 	},
// 	showMyDB: function (hidden) {
// 		if (!hidden) {
// 			console.log(personalMovieDB);
// 		}
// 	},
// 	toggleVisibleMyDB: function () {
// 		if (personalMovieDB.privat) {
// 			personalMovieDB.privat = false;
// 		} else {
// 			personalMovieDB.privat = true;
// 		}
// 	},
// 	writeYourGeneres: function () {
// 		for (let i = 1; i < 2; i++) {
// 			let genres = prompt(`Ваш любимый жанр через запятую`).toLocaleLowerCase();
// 			if (genres === '' || genres == null) {
// 				console.log('Введите данные');
// 				i--;
// 			} else {
// 				personalMovieDB.genres = genres.split(', ');
// 			}
// 		}
// 		personalMovieDB.genres.forEach((item, i) => {
// 			console.log(`Любимый жанр ${i + 1} - это ${item}`);
// 			personalMovieDB.genres.sort();
// 		});
// 	}
// };

// Вверху домашка


// console.log(document.head);

// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('#current').parentElement);

// for (let node of document.body.childNodes) {
// 	if(node.nodeName == '#text') {
// 		continue;
// 	}
// 	console.log(node);
// }