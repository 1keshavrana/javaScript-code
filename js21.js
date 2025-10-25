let inp = document.createElement('input');
let btn = document.createElement('button');


btn.setAttribute("id","btn");
btn.innerText = "button";
inp.setAttribute("placeholder","username");

btn.style.backgroundColor = 'blue';


document.querySelector('body').append(inp);
document.querySelector('body').append(btn);