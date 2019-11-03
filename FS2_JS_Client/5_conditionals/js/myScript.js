try{
    const day = new Date().getDay();
var weeks = document.getElementById("weeks");
//displays the current day in console
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("TGIF!");
        break;
    case 6:
        console.log("Saturday Party!");
        break;
    case 7:
        console.log("It's Sunday, time to work.");
        break;
    default:
        console.log("Something went horribly wrong...");
}

} 
 catch(error){
    console.log("error occurred");
}