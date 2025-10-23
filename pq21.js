let arr = ['my ','name ', 'is ','keshav ', 'rana.'];
let j ='';

function arrToStr(arr){
    for (let i of arr){
        j=j+i;
    }
    console.log(j);
}

function strToArr(str){
    let arr1= str.split(' ');
    console.log(arr1);
}

arrToStr(arr);

strToArr(j);