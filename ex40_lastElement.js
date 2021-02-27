function lastElement(arr){
    let len = arr.length;
    if (len>0){
        return arr[len-1];
    }else{
        return null;
    }
    
}
let arr = [1,2,3,4,5,6,7,8,9];
console.log(lastElement(arr));