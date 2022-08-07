//my code
function sumInRange(arr){
    let temp; sum=0;
    if(arr[0] > arr[1]){
        temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }
    for(let i=arr[0]; i<=arr[1]; i++){
        sum += i
    }
    return sum
}

console.log(sumInRange([15,-10]))

//Using min, max
function sumInRange1(arr){
    const start = Math.min(arr[0],arr[1])
    const end = Math.max(arr[0],arr[1])
    let sum = 0;
    for(let i=start; i<=end; i++){
        sum += i
    }
    return sum
}

console.log(sumInRange1([15,-10]))



// function sumInRange2(arr){
//     arr.reduce(function(acc,curr){
//         console.log(acc, curr)
//     },0)
// }

// console.log(sumInRange2([15,20]))