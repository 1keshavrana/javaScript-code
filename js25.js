let inp = document.createElement('input');
let h2 = document.createElement('h2');
inp.placeholder = "your name";


const grn =()=> h2.innerText = inp.value ;


inp.addEventListener("input", grn);


document.querySelector("body").append(h2);
document.querySelector("body").append(inp);
