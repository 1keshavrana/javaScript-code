let s = Number(prompt("Starting no. for random no. : "));
let e = Number(prompt("Ending no. for random no. : "));

function randomNum(s,e){
    let d = e-s;
    console.log(Math.floor(Math.random()*d)+s);
}

randomNum(s,e);