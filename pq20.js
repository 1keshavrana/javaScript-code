let n = prompt("enter the no. : ");
let sum = 0;

function sumAll(n){
    for (let i = 0 ; i <= n ; i++){
        sum = sum + i ;
    }
    console.log(sum);
}


sumAll(n);