// ---------------- get elements
let tBody = document.querySelector('#product-table tbody');
const addBtn = document.querySelector('#addBtn');
const clearBtn = document.querySelector('#clearAll');

const form = document.forms.creationForm;

const modelIn = form.elements.model;
const pricelIn = form.elements.price;
const statuslCb = form.elements.status;

class Product {

    static count = 10;

    constructor(model, price, status) {
        this.model = model;
        this.price = price;
        this.status = status;
        this.id = Product.count++;
    }

    get statusName() {
        return this.status ? "In Stock" : "Out of Stock";
    }
}

addBtn.onclick = (event) => {

    event.preventDefault();

    // const product = {
    //     id: 100,
    //     model: modelIn.value,
    //     price: pricelIn.value,
    //     status: statuslCb.checked
    // };
    let product = new Product(modelIn.value, pricelIn.value, statuslCb.checked);

    addProductToTable(product);
};

clearBtn.onclick = () => {
    tBody.innerHTML = "";
    // tBody.clear();
};

function addProductToTable(item) {
    // ---------------- add element to table
    tBody.innerHTML += `<tr class="table-primary">
                            <th scope="row">${item.id}</th>
                            <td>${item.model}</td>
                            <td>${item.price}$</td>
                            <td>${item.statusName}</td>
                        </tr>`;
}


tBody = document.querySelector('#product-table tbody');
const searchInp = document.querySelector('#searchInp');
const searchBtn = document.querySelector('#searchBtn');
const modelNames = document.querySelectorAll('#product-table tbody tr.table-primary td:first-child');
let tBodyCopy = tBody;
searchBtn.onclick = (event) => {
    event.preventDefault();
    let product;
    let id;
    for(let i = 0; i < modelNames.length; i++ ){
        if(modelNames[i] == searchInp.value)
        {
            id = document.querySelector(`#product-table tbody tr.table-primary:nth-child(${i}) th:first-child`);
            let model = document.querySelector(`#product-table tbody tr:nth-child(${i}) td:first-child`);
            let pricel = document.querySelector(`#product-table tbody tr:nth-child(${i}) td:nth-child(2)`);
            let statusl = document.querySelector(`#product-table tbody tr:nth-child(${i}) td:last-child`);
            product = new Product(model.value, pricel.value, statusl.checked);
        }
    }
    tBody.innerHTML =  `<tr class="table-primary">
                            <th scope="row">${id}</th>
                            <td>${product.model}</td>
                            <td>${product.price}$</td>
                            <td>${product.statusName}</td>
                        </tr>`;

}