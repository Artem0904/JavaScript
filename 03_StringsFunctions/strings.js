let str = "lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem tempore molestiae nam voluptatem illum recusandae laborum itaque sit, doloremque vel";
// Завдання 1:
// Написати функцію, яка приймає рядок та рахує кількість пробілів в ньому.

function countSpaces(str) {
    console.log(str.split(" ").length - 1);
}

// Завдання 2:
// Написати функцію, яка переводить перший сиивол рядка у верхній регістр.

function toUpperCaseFirsSymb(str) {
    console.log(str[0].toUpperCase());

} 

// Завдання 3:
// Написати функцію, яка рахує кількість слів в рядку.

function countWords(str) {
    console.log(str.split(" ").length);
} 

// Завдання 4:
// Написати функцію, яка приймає словосполучення і перетворює його в абревіатуру.
// Наприклад: cascading style sheets в CSS, об'єктно орієнтоване програмування в ООП.

// let abreviatyra = function (str) {
//     let newStr;
//     for (let index = 0; index < array.length; index++) {
//         if (str[index] == " ") {
//         newStr + str[index + 1].toUpperCase();
//         }   
//     }
//     console.log(newStr);
// }

// let abr = str.map((x) => x == " " ? str[str.indexOf(x) + 1].toUpperCase() : "" );
let words = str.split();
let abr = "";
for (let index = 0; index < words.length; index++) {
    abr += words[index][0].toUpperCase();
}
console.log(abr);



// Завдання 5:
// Написати функцію, яка перевіряє чи переданий рядок являється паліндромом.


// *Завдання 6:
// Написати функцію, яка отримує url та відображає детальну інформацію про неї.
// Наприклад: url “https://itstep.org/ua/about”, інформація “протокол: https, домен:
// itstep.org, шлях: /ua/about”.