let arr = [1,2,3,4,5,6,7,8,9,10];

const arrAvg = (arr)=>{ 
    let sum = 0;
    for(let i of arr){
        sum+=i;
    }
    console.log(sum);
    return sum/arr.length;
}

console.log(arrAvg(arr));