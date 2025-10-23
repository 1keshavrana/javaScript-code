let n = Number(prompt("enter 1st number : "));
let m = Number(prompt("enter 2nd number : "));
let l = Number(prompt("enter 3rd number : "));


function avgNum(n,l,m){
    const avg = (n + m + l)/3;
    console.log(avg);
}

avgNum(n,m,l);