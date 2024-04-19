// Завдання 1:
// Створити об'єкт, який містить параметри часу (хвилини, години, секунди) та
// наступні методи для роботи з ним:
// 1. Метод відображення часу в форматі: hh:mm:ss
// 2. Метод, який приймає час та додає одну секунду до нього
// 3. Метод, який приймає час та віднімає одну секунду від нього

//////////////////1
// const timeNowPar = document.querySelector('#timeNow');
// let time = {
//     h: null,
//     m: null,
//     s: null
// }

// function setTimeNow(time){
//     let timeNow = new Date();
//     time.h = timeNow.getHours();
//     time.m = timeNow.getMinutes();
//     time.s = timeNow.getSeconds();
// }
// setTimeNow(time);

// function getTimeNow(htmlObject){
//     htmlObject.innerHTML = `${time.h} : ${time.m} : ${time.s}`;
// }
// getTimeNow(timeNowPar);


// ////////////////////2
// const timePlus = document.querySelector('#timeP1');
// getTimeNow(timePlus);
// function plusOneS(htmlObject){
//     htmlObject.innerHTML = `${time.h} : ${time.m} : ${time.s + 1}`;
// }
// plusOneS(timePlus);

// ////////////////////////3
// getTimeNow(timeMinus);
// function minusOneS(htmlObject){
//     htmlObject.innerHTML = `${time.h} : ${time.m} : ${time.s - 1}`;
// }
// minusOneS(timeMinus);


// Завдання 2:
// Створити об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня
// швидкість), і такі функції для роботи з цим об'єктом.
// 1. Функція для виведення на екран інформації про автомобіль.
// 2. Функція для підрахунку необхідного часу для подолання переданої відстані з
// середньою швидкістю. Врахуйте, що через кожні 4 години дороги водієві
// необхідно робити перерву на 1 годину.

let lanos = {
    manufacturer: "Daewoo Motors",
    model: "Daewoo Lanos II",
    reliseYear: 1999,
    avgSpeed: 90
}

const CarInfoSpan = document.querySelector('#carInfo');
CarInfoSpan.innerHTML = `Manufacturer: ${lanos.manufacturer} | Model: ${lanos.model} | ReliseYear: ${lanos.reliseYear} | AvgSpeed: ${lanos.avgSpeed} km/h`

function CalculateTime(distance){
    return (distance / lanos.avgSpeed) + Math.floor((distance / lanos.avgSpeed / 4));
}

let distance = +prompt("Enter distance : ");
const resultParagraf = document.querySelector('#result');
let res = CalculateTime(distance);
resultParagraf.innerHTML = `Ланос проїде ${distance} km з середньою швидкість ${lanos.avgSpeed} за ${res} год`;
