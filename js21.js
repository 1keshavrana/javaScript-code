let inp = document.createElement('input');
let btn = document.createElement('button');


btn.setAttribute("id","btn");
btn.innerText = "button";
inp.setAttribute("placeholder","username");

btn.style.backgroundColor = 'blue';


let h1=document.createElement("h1");
h1.innerHTML="<u>DOMPractice</u>";
document.querySelector("body").append(h1);

let p=document.createElement("p");
p.innerHTML="ApnaCollege<b>Delta</b>Practice";
document.querySelector("body").append(p);

document.querySelector('body').append(inp);
document.querySelector('body').append(btn);