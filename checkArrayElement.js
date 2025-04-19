let arr = [0,1,2,3,4,5,6,7,8,9];
let n = prompt("Enter the value : ");
let ind = arr.indexOf(Number(n));
if (n != arr[ind]){
    console.log("Element not found ...");
}
else{
    console.log("Element is found ...");
}