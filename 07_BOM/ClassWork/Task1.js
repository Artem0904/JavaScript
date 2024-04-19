
const myBtn = document.querySelector('#MyBtn');
myBtn.onclick = (event) => {
    const myWindow = window.open("", "", "width=410,height=410");
    setTimeout(() => {myWindow.resizeTo(500, 500);}, 2000);
    setTimeout(() => {myWindow.moveTo(200,200)}, 2000);
    setTimeout(() => {myWindow.close()}, 2000);
}


