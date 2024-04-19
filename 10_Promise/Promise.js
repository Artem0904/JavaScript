function getSumm(arr, start, end){
    return new Promise((res, rej) => {
        let summ = 0;
        if(start > end || start < 0 || end < 0 || arr === null){
            rej(new Error("Invalid data!"));
        }
        for(let i = start; i < end; i++){
            summ+= arr[i];
        }   
        res(summ);
    });
}
let array = [];
let str = "";
for(let i = 0; i < 10; ++i){
    array[i] = Math.round(Math.random() * 100);
    str+= array[i] + " ";   
}
console.log(str);
getSumm(array, 16, 3)
    .then(res => console.log("Summ of diapazone = " + res))
    .catch(err => console.warn(err.message));

