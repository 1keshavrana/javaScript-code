let arr =  [10,20,30,40,55,60,70];
let len = arr.length;

const mulTen = (arr)=>{
    for (let i = 0 ; i <= len ; i++){
            if (i == len){
                console.log('yes');
            }
            if (arr[i] % 10 == 0 ){
                    console.log(`${arr[i]} is multiple of 10 .`);
                    continue;
                }
            else{
                console.log("not");
                break;
            }
    }

}
mulTen(arr);