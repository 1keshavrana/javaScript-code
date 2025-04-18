let num1 = prompt("Enter 1st number : ");
let num2 = prompt("Enter 2nd number : ");
let num3 = prompt("Enter 3rd NUmber : ");

if (num1 > num2){
    if (num2 > num3){
        alert(`Number ${num1} is Largest...`)
    }
    else if (num3 > num1){
        alert(`Number ${num3} is Largest...`)
    }
}
else if (num2 > num3){
    alert(`Number ${num2} is Largest...`)
}
else{
    alert(`Number ${num3} is Largest...`)
}