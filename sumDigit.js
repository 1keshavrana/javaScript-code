let num = parseInt(prompt("Enter number : "));
let sum = 0;
while(num>0){
    let rem = num % 10;
    num = parseInt(num /10);
    sum = sum + rem;
}

console.log("Sum of digits is : ",sum);