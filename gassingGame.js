let max = prompt("Enter max number range : ");
let num = Math.floor(Math.random()*max)+1;
let enter = prompt("Gusse number : or Right QUIT : ");
while(true){
    if(enter == "QUIT"){
        console.log("You LOSS the game and Quiting ...");
        break;
    }
    else if (parseInt(enter) == num){
        console.log("You WON !!!");
        break;
    }
    else if(parseInt(enter) > num){
        console.log("Hint: Number is too large");
    }
    else if (parseInt(enter) < num){
        console.log("Hint: Number is too small");
    }
    else{
        console.log("Wrong Choice !!!");
        break;
    }
    enter = prompt("Gusse number : or Right QUIT : ");
}