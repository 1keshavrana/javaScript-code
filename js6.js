let n = prompt("enter 1st number :");
let l = prompt("enter 2st number :");
let o = prompt("enter 3st number :");


if ( n > l ){
    if ( n > o){
        alert(`${n} is largest.`);
    }
    else{
        alert(`${o} is largest.`);
    }
}
else if ( l > o ){
    alert(`${l} is largest.`);
}
else {
    alert(`${o} is largest.`);
}
