let n = prompt("enter the 1st number : ");
let l = prompt("enter the 2nd number : ");

n = n % 10;
l = l % 10;

if ( n == l ){
    alert(`Both number have same last digit`);
}
else{
    alert(`Both number not same last digit`);
}