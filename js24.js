let btn = document.createElement('button');
btn.innerText = "click me to green/blue";
btn.style.backgroundColor = "blue";

const grn =()=> btn.style.backgroundColor = "green";


btn.addEventListener("click", grn);


document.querySelector("body").append(btn);