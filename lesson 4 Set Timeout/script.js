function f1(){
    console.log('1');
}

function f2(){
    console.log('2');
}

const btn = document.querySelector("button");
btn.addEventListener('click',() =>{
    f2();
    setTimeout(f1,1000);
    f2();
});