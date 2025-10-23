let ch = prompt("choose day number (1-7) : ");

console.log(ch);

switch (ch) {
    case "1":
        alert(`MONDAY`);
        break;

    case "2":
        alert(`Tuesday`);
        break;

    case  "3":
        alert(`wednesday`);
        break;
    
    case  "4":
        alert(`thursday`);
        break;
    
    case  "5":
        alert(`friday`);
        break;

    case  "6":
        alert(`saturday`);
        break;

    case  "7":
        alert(`sunday`);
        break;

    default:
        alert(`wrong choice`);
}