function f1(){
    console.log("1");
};

function f2(){
    console.log("2");
};

const btn = document.querySelector("button");

f2();
btn.addEventListener("click",f1);
f2();