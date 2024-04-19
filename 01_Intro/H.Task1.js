// Завдання 1:
// 1. Запитайте у користувача рік його народження, порахуйте, скільки йому років і
// виведіть результат. Поточний рік вкажіть в коді як константу.

// const currentYear = 2023;
// let birthYear = prompt("Enter your birth year : ");
// let age = birthYear < 1920 || birthYear > 2023 ? alert("Incorrect birth year!") : alert(`Your age : ${currentYear - birthYear} y`);

// 2. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки
// файлів розміром в 820 Мб поміщається на флешку.

// const mbInOneGb = 1024;
// const sizeOfFile = 820;
// let gb = +prompt("Enter gb:");
// alert(`820mb files: ${gb * mbInOneGb / sizeOfFile}`);

// Завдання 2:
// Вам необхідно самостійно вирішити, для якого завдання який оператор
// розгалуження краще використовувати: if, switch або тернарний оператор.
// 1. Запросити у користувача число від 0 до 9 і вивести йому спецсимвол, який
// розташований на цій клавіші (1 !, 2 @, 3 # і тд).

// let number = prompt("ENter number : ");
// if(number < 0 || number > 9)
// {
//     alert("Enter another num (0-9)");
// }
// else{
//     let symbol;
//     switch(number){
//         case 1:
//             symbol = "!";
//             break;
//         case 2:
//             symbol = "@";
//             break;
//         case 3:
//             symbol = "#";
//             break;
//         case 4:
//             symbol = "$";
//             break;
//         case 5:
//             symbol = "%";
//             break;
//         case 6:
//             symbol = "^";
//             break;
//         case 7:
//             symbol = "&";    
//             break;
//         case 8:
//             symbol = "*";
//             break;
//         case 9:
//             symbol = "(";
//             break;
//         case 10:
//             symbol = ")";
//             break;
//     }
// }

// 2. Запросити у користувача рік і перевірити, високосний він чи ні. Високосний
// рік або кратний 400, або кратний 4 і при цьому не кратний 100.

// let year = prompt("Enter year : ");
// let stats = "";
// let chekIntercalary;
// if(year % 4 == 0)
//     chekIntercalary = true;
// else
//     chekIntercalary = false;
// stats += `Year intercalary : ${chekIntercalary}\n`;
// if(chekIntercalary == true || year % 400 == 0)
//     stats += "Year is intercalary"
// else
//     stats += "Year a multiple of 400";
// if(chekIntercalary == true && year % 100 != 0)
//     stats += "Year a multiple of 4 and not multiple of 100";
// else
//     stats += "Year not multiple of 4 or a multiple of 100";
 
// 3. Запросити дату (день, місяць, рік) і вивести наступну за нею дату. Врахуйте
// можливість переходу на наступний місяць, рік, а також високосний рік.

// let date = prompt("Enter date : ");
// let d = new Date();
// d.setFullYear(date);
// alert(d);

// Завдання 3:
// Вам необхідно самостійно вирішити, для якого завдання, який цикл краще
// використовувати: while, do while або for.
// 1. Підрахувати суму всіх чисел у заданому користувачем діапазоні.

// let left = prompt("ENter left num : ");
// let right = prompt("ENter right num : ");
// let sum;
// for (let i = left; i < right; i++) {
//     sum+= i;
// }
// alert("Sum : " + sum);

// // 2. Визначити кількість цифр у введеному числі.

// let number = prompt("Enter number");
// alert("Count digits : " + number.length);

// 3. Запитати у користувача 10 чисел і підрахувати, скільки було введено
// позитивних, негативних та нулів. При цьому також порахувати, скільки парних
// та непарних. Вивести статистику на екран. Врахуйте, що достатньо однієї
// змінної (не 10) для введення чисел користувачем.

// let numbers = [];
// let nums = "";
// while(numbers.length != 10){
//     numbers.push(parseInt(prompt("Enter number")));
// }
// let countPoss = 0;
// let countNeg = 0;
// let countZero = 0;
// let countEven = 0;
// let countOdd = 0;
// for(let num of numbers){
//     nums += num + " ";
//     if(num > 0) {countPoss++;}
//     else if(num < 0) {countNeg++;}
//     if(num == 0) {countZero++;}
//     if(num % 2 === 0) {countEven++;}
//     else if(num % 2 !== 0) {countOdd++;}
// }
// alert("Nums : " + nums + "\nCount posotive : " + countPoss + "\nCount negative : " + countNeg + "\nCount zero : " + countZero + "\nCount even : " + countEven + "\nCount odd : " + countOdd);

// 4. Зациклити виведення днів тижня таким чином: День тижня. Хочете побачити
// наступний день?» і так доти, доки користувач натискає OK

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let i = -1;
do {
  if(i == days.length - 1)
  {
    i = -1;
  }
  i++;
} while (confirm(`Day of week: ${days[i]}. Want to see next day?`));