// Написати функцію, яка приймає число та виводить відповідну кількість вкладених пар круглих дужок.
// Наприклад: число 4 - (((()))).

// let countBrackets = +prompt("Enter count of brackets : ");
// try{
//     printBrackets(countBrackets);
// }catch(er){
//     console.error(er.message);
// }
// function printBrackets(count){
//     if(count < 0)
//         throw new Error("Count < 0");
//     let str = "";
//     for(let i = 0; i < count; i++){
//         str += "(";
//     }
//     for(let i = 0; i < count; i++){
//         str += ")";
//     }
//     console.log(str);
// }

// Завдання 2:
// Реалізуйте функцію getRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника 
// width і висота прямокутника height і обраховує його площу.
// Передбачити припинення виконання програми і генерацію винятку у випадку, 
// якщо функції передано не числові параметри. Напишіть код, який використовує 
// цю функцію та обробляє можливі виняткові ситуації.

// let width = +prompt("Enter width : ");
// let height = +prompt("Enter height : ");
// try {
//     console.log("S = " + getRectangleArea(width, height));
// } catch (error) {   
//     console.error(error.message);
// }
// function getRectangleArea(width, height) {
//     if (typeof width !== 'number' || typeof height !== 'number' || isNaN(width) || isNaN(height)) {
//         throw new TypeError("Width and height must be a Number!");
//     }
//     if (width <= 0 || height <= 0) {
//         throw new RangeError("Width or height < 0!");
//     }
//     return width * height;
// }


// Завдання 3:


// let numOfDay = prompt("Enter num of day week : ");
// try {
//     console.log(showWeekdayName(numOfDay));
// } catch (error) {
//     console.error(error.message);
// }

// class WeekdayError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = 'WeekdayError';
//     }
// }
   
// function showWeekdayName(day) {
//     const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//     if (day < 1 || day > 7 || isNaN(day)) {
//         throw new WeekdayError("Inccorect day num!");
//     }
//     return weekdays[day - 1];
// }


// Task 4

function fibonaci(){
    let num1 = 0;
    let num2 = 1;

    return function () {
        console.log(num1);
        let tmp = num1 + num2;
        num1 = num2;
        num2 = tmp;
    }
}

let fib = fibonaci();
fib();
fib();
fib();
fib();
fib();
fib();
fib();
fib();
fib();
fib();
fib();
fib();
fib();