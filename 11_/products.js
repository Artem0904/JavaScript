
const listUl = document.querySelector('#products');
let countSkip = 0;
const step = 5;
let productsApi = `https://dummyjson.com/products?skip=0&limit=5`;

function getDataAPI(api){
    fetch(api)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            for (const i of data.products) {
                listUl.innerHTML += `<div>${i.brand} - ${i.title} - ${i.price}$</div>`;
            }
        });
}
getDataAPI(productsApi);

const showNextBtn = document.querySelector('#showNextBtn');
showNextBtn.onclick = (event) => {
    countSkip += step;
    productsApi = `https://dummyjson.com/products?skip=${countSkip}&limit=5`;
    getDataAPI(productsApi);
}
