const btnStart = document.querySelector('.j-start');
const btnEnd = document.querySelector('.j-end');

let ID = 0;


function f1(){
    console.log('1');
};

function f2(){
    console.log('2');
};

btnStart.addEventListener('click', () => { 
    f2();

    if (!ID){
        ID = setInterval(f1, 1000);
    }

    f2();
});

btnEnd.addEventListener('click',() => {
    clearInterval(ID);
    ID = null;
});
