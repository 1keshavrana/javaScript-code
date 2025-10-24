let arr =  [10,20,30,40,50,60,70];

const sqrArr = arr.map((num)=>num*num);

console.log(sqrArr);

const sumArr = sqrArr.reduce((acc,cur)=> acc + cur , 0);

let avg = sumArr/sqrArr.length;

console.log(avg);