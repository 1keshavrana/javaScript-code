let num = parseInt(prompt("Enter number "));
let fact = 1;
for (let i=2; i<=num; i++){
    fact = fact * i;
}
console.log("Factorial is : ",fact)