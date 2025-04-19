let num = parseInt(prompt("Enter number : "));
let arr = [];
while(num>0){
    let rem = num % 10;
    num = parseInt(num /10);
    arr.push(rem);
}

console.log("Lenght of Number is : ",arr.length);