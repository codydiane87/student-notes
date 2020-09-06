
let algolearning = (arr) => {
let minMax=[arr[0],arr[0]];
 for (let i = 1; i <arr.length; i++){
     if(arr[i]<minMax[0]){
        minMax[0] = arr[i];
     }else if (arr[i] > minMax[1]){
            minMax[1] = arr[i];
     }
 }
    return minMax
}