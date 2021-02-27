function capitalize(string){
    let req = string[0].toUpperCase();
    req += string.substring(1,string.length);
    return req;
}

console.log(capitalize("abc"));