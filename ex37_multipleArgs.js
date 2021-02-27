function isSnakeEyes(num1,num2){
    if(num1 == 1 && num2 == 1){
        console.log("Snake Eyes!");
        return "Snake Eyes!";
    }else{
        console.log("Not Snake Eyes!");
        return "Not Snake Eyes!";
    }
}

console.log(isSnakeEyes(1,1));
console.log(isSnakeEyes(1,5));
