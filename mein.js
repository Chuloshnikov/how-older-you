'use strict'
let age = prompt('how older you?');

if (age <= 12) {
    document.write('ты ребенок');
} else if (age >= 13 && age <= 17) {
    document.write("ты тинейджер");
} else if (age >= 18 && age <= 30) {
    document.write('ты молод и селен');
} else if (age >= 31 && age <= 45) {
    document.write('пора заводить детей');
} else if (age >= 46 && age =< 59) {
    document.write('пора посадить дерево');
} else if (age >= 60) {
    document.write('скоро пенсия');
}