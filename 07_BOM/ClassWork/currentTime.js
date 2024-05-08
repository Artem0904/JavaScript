let time = document.querySelector("h1");

setInterval(() => {
  let clock = new Date();
  time.innerText = `${clock.getHours()}:${clock.getMinutes()}:${clock.getSeconds()}`;
}, 1000);