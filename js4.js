let Quarter =  prompt("Enter Quarter number (1-4):");

switch (Quarter){
    case '1' : console.log("Months in Quarter 1 : January, February, March");
        break;
    case '2' : console.log("Months in Quarter 2 : April, May, June");
        break;
    case '3' : console.log("Months in Quarter 3 : July, August, September");
        break;
    case '4' : console.log("Months in Quarter 4 : October, November, December");
        break;
    default:
        console.log("WRONG NUMBER !!!");
}