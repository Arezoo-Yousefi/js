let weeklyNumber = 5;
let message = null;
switch (weeklyNumber){
    case 1 :
        message = "today is Monday";
        break;
    case 2 :
        message = "today it's Tuesday";
        break;
    case 3 :
        message = "Today it's Wednesday";
        break;
    case 4 :
        message = "Today it's Thursday";
        break;
    case 5 :
        message = "Today it's Friday";
        break;
    case 6 :
        message = "Today it's Saturday";
        break;
    case 7 :
        message = "Today it's Sunday";
        break;
    default :
        message = "error";
}
console.log(message);