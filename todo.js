let todo = [];

console.log("1.List  2.Add  3.Remove  4.Quit ");

let choice = parseInt(prompt("Enter the choice : "));

while(true){
    if (choice == 4){
        console.log("Quiting App");
        break;
    }
    else if (choice == 1){
        console.log("-----------------------");
        for(let i=0; i<=todo.length ; i++){
            console.log(i+1, todo[i]);
        }
        console.log("-----------------------");
    }
    else if (choice == 2){
        let addEle = prompt("Add Activity : ");
        todo.push(addEle);
        console.log("Activity Added ");
    }
    else if (choice == 3){
        let ind = parseInt(prompt("Activity Number : "));
        todo.splice(ind-1,1);
        console.log("Activity Removed");
    }
    else{
        console.log("Wrong Choice ")
    }

    choice = parseInt(prompt("Enter the choice : "));
}