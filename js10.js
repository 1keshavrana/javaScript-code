let cntry = ['australia','germony','united state of america'];
let longcon ='';
console.log(cntry.length);

function longCnNam(cntry){
    let con= 0;
    for (let i=0; i < cntry.length; i++){
        if (cntry[i].length > con){
            longcon = cntry[i];
            con = cntry.length;
        }
    }
    console.log(longcon);
}

longCnNam(cntry);