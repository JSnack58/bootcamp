function returnDay(day){
    if(day<1 || day>7){
        return null;
    }
    let week = ["Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"];
    return week[day-1];
}
console.log(returnDay(0));
console.log(returnDay(1));
console.log(returnDay(2));
console.log(returnDay(3));
console.log(returnDay(4));
console.log(returnDay(5));
console.log(returnDay(6));
console.log(returnDay(7));
console.log(returnDay(8));