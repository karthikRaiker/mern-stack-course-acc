function diffArray(arr1, arr2){
    resultArr = []
    for(let i=0; i<arr1.length; i++){
        if(arr2.indexOf(arr1[i]) === -1) resultArr.push(arr1[i])
    }
    for(let j=0; j<arr2.length; j++){
        if(arr1.indexOf(arr2[j]) === -1) resultArr.push(arr2[j])
    }
    return resultArr
}
console.log(diffArray([1,2,3,4,5,7,8],[1,2,3,5]))

//using filter()

function diffArrayUsingFilter(arr1, arr2){
   let combineArr = arr1.concat(arr2)
   let resultArr = combineArr.filter((num)=>{
       if(arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) return num
   })
   return resultArr
}
console.log(diffArrayUsingFilter([1,2,3,4,5,7,8],[1,2,3,5]))
