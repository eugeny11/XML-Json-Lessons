const startValue = 2;

const myPromise = new Promise((resolve,reject) =>{
    if (startValue){
        resolve({
            message:"Успешное выполнение promise",
            data: startValue,
        });
    } else {
        reject({
            message:"Неуспешное выполнение promise в самом начале"
        });
    }
});

myPromise
.then((result) =>{
    console.log("Обрабатываем resolve", result.message);
    return result.data;
})

.then((data) =>{
    console.log("Получаем данные из then№2",data);
    return data*2;
})

.then((data) =>{
    console.log("Мы можем создать новый promise", data);
    return new Promise((resolve,reject) =>{
        if (data>3){
            resolve(data + 10)
        } else{
            reject({
                message:"Неуспешное выполнение promise на then№3"
            });
        }
    });
})

.catch((error) =>{
    console.log("Обрабатываем reject - ", error.message);
    return startValue;
})

.then((data) =>{
    console.log("Итоговый результат - ", data);
});