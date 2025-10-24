let para1 = document.createElement('p');
para1.innerText = "Hello keshav red!!!";
document.querySelector('body').append(para1);
para1.style.color =  'red';


let h3 = document.createElement('h3');
h3.innerText = "Hello keshav blue h3!!!";
document.querySelector('body').append(h3);
h3.style.color =  'blue';

let div = document.createElement('div');
let h1 = document.createElement('h1');
let p2 = document.createElement('p');

h1.innerText = 'i am inner h1';
p2.innerText = 'me too !';

div.append(h1);
div.append(p2);
document.querySelector('body').append(div);
div.style.backgroundColor =  'pink';
div.style.border =  '2px solid black';