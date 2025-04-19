let arr = [];
let n = parseInt(prompt("Size of array : "));
for (let i=0; i<n ; i++){
    arr.push(prompt("enter element : "));
}
let max = arr[0];
for(let i=0 ; i < n ; i++){
    if (arr[i]<arr[i+1]){
        max = arr[i+1];
    }
}
console.log(arr,"have maximum value ",max);