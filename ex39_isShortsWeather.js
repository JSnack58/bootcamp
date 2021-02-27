function isShortsWeather(temperature){
    if(temperature >= 75){
        return true;
    }else{
        return false;
    }
}

console.log(isShortsWeather(75));
console.log(isShortsWeather(65));