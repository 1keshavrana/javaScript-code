let arr = [];
let n = parseInt(prompt("Size of array : "));
for (let i=0; i<n ; i++){
    arr.push(prompt("enter element : "));
}
let ele = parseInt(prompt("Element to remove : "));
for(let i=0; i<n; i++){
    if (arr[i]==ele){
        arr.splice(i,1);
    }
}
console.log("Final array :",arr);