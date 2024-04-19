// Завдання 1:
// Написати скрипт, який в залежності від часу доби виводитиме відповідне
// привітання (Good morning, day, evening, night).
// Потрібно отримати реальний час доби із системи.

// let time = new Date();
// let hours = time.getHours();
// if(hours > 6 && hours < 12){
//     alert("Good morning");
// }
// else if(hours >= 12 && hours < 18){
//     alert("Good day");
// }
// else if(hours >= 18 && hours < 22){
//     alert("Good evening");
// }
// else{
//     alert("Good night");
// }

// В наступних завданнях намагайтеся використовувати методи масиву.
// Завдання 2:
// Створити масив із 20-ти елементів та заповнити його випадковими числами від 1 до
// 100.
console.log("#2 =======================================");
let arr = [];
arr.length = 10;
let min = 1, max = 100;
for (let i = 0; i < arr.length; i++) {arr[i] = Math.round(Math.random() * (max - min) + min);}
// arr.forEach((num) => {num = (Math.round(Math.random() * (max - min) + min))});

// Завдання 3:
// Відобразити кожний елемент масиву у вигляді: [1] – 5
// [2] – 78 ... і тд.
console.log("#3 =======================================");
function printArr(array){
    let arrStr = "";
    array.forEach((num, i) => {arrStr += `[${i}] - ${num}\n`;})
    console.log(arrStr);
}
printArr(arr);

// Завдання 4:
// Перевірити чи є в масиві число яке кратне 7-ми.
console.log("#4 =======================================");
arr.forEach((num, i) => {num % 7 == 0 ? console.log(`${num} % 7 == 0`) : null;});

// Завдання 5:
// Відсортувати масив по спаданню.
console.log("#5 =======================================");
arr.sort((a, b) => b - a);
printArr(arr);

// Завдання 6:
// В головному масиві заповнити 2-гу половину елементів нулями.
console.log("#6 =======================================");
arr.fill(0, (Math.round(arr.length / 2)));
printArr(arr);

// Завдання 6:
// Видалити з масиву перші 3 елемента використавши один метод.
console.log("#6 =======================================");
arr.splice(0, 3);
printArr(arr);

// Завдання 7:
// Перевірити чи має масиві однакові елементи.


// Завдання 8:
// Створити новий масив, в який записати всі елементи масиву крім крайніх.
// Мова сценаріїв JavaScript та бібліотека jQuery
console.log("#8 =======================================");
let newArr = arr.filter((num, i) => i != 0 && i != arr.length - 1);
printArr(newArr);


// Завдання 9:
// Обрахувати кількість парних чисел в масиві.
console.log("#9 =======================================");
let evens = arr.filter((x) => x % 2 == 0);
printArr(evens);
console.log(`Evens count : ${evens.length}`);

// *Завдання 10:
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
// • початкове значення
// • кінцеве значення
// а на виході повертає масив із діапазоном цих значень (реалізувати достатньо лише
// із числовими значеннями)

console.log("#10 =======================================");
function createArray(start, end){
    let tmpArr = [];
    for (let i = start; i < end; i++) {
        tmpArr.push(i);
    }
    return tmpArr;
}
let diapazoneArr = createArray(15, 36);
printArr(diapazoneArr);