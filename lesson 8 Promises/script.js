let flag = true;

const myPromise = new Promise((resolve,reject) => {
    if (flag){
        resolve("Успешное выполнение promise");
    } else {
        reject("Неуспешное выполнение promise");
    }
});

myPromise 
.then((result) =>{
    console.log("Обрабатываем result", result);
})

.catch((error) =>{
    console.log("Обрабатываем reject", error);
})

.finally(() =>{
    console.log("Обрабатывается всегда");
});