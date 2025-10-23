let arr = [1,2,3,4,5,6,7,8,9,10];

let n = Number(prompt("enter the number (1-10) : "));

function largetThan(n){
    for (let i of arr){
        if (i > n){
            console.log(i);
        }
    }
}

largetThan(n);