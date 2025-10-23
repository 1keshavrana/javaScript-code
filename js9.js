let str = prompt("enter the string : ");

console.log(str);

function getUnique(str){
    let ans= "";
    for (let i = 0 ; i < str.length ; i++){
        let curChar = str[i];
        if (ans.indexOf(curChar)== -1){
            ans += curChar;
        }
    }
    console.log(ans);
}

getUnique(str);