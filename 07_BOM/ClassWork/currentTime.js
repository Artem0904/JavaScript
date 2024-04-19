const timeSpan = document.querySelector('#time');

let timeNow = new Date();

setInterval(() => {timeSpan.innerHTML = `${timeNow.getHours()} : ${timeNow.getMinutes()} : ${timeNow.getSeconds()}`}, 1000);
// function aa(){
//     var time = new Date();
//     var str = "";
//     str += time.getHours();
// }