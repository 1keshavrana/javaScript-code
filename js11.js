let str = prompt("enter the string : ");
let count = 0;

function vowelCount(str){
    for (let i = 0 ; i < str.length ; i++){
        if (str[i] == 'a' || str[i] == 'A' || str[i] == 'e' || str[i] =='E' || str[i] == 'i' || str[i] == 'I' || str[i] == 'o' || str[i] == 'O' ||str[i] == 'u' ||str[i] =='U'){
            count+=1;
        }
    }
    console.log(count);
}

vowelCount(str);