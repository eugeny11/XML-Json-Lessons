function usePromise(){
    const myPromise = new Promise((resolve,reject) =>{
        console.log('1');

        setTimeout(()=> {
        console.log('2');
        resolve("Успешное выполнение promise");
        },1000);
        console.log('3');
    });

    console.log(4);

    myPromise
    .then((result) => {
        console.log('Отрабатываем resolve', result);
    })

    .catch((error) =>{
        console.log('Отрабатываем reject', error);
    })

    .finally(() =>{
        console.log('Отрабатывается всегда');
    });

    console.log('5');

};

console.log('Запускаем функция usePromise');
usePromise();
console.log('Завершаем выполнение функции');