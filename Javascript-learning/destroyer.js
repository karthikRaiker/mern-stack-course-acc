//my code
function destroyer(arr, ...optionals){
    let uniqueArr = [...new Set(arr)]  //convert unique array element
    if(optionals.length === 0) return arr
    else for(let i=0;i<optionals.length;i++){
        if(uniqueArr.indexOf(optionals[i]) !== -1 ) uniqueArr.splice(uniqueArr.indexOf(optionals[i]),1)
    }
    return uniqueArr
}
console.log(destroyer([1,1,3,3,5],1,3))

// using filter() passing 1 argument
function destroyer1(arr){
 let args = Array.from(arguments) //converts object to array
 args.splice(0,1)
 
 return arr.filter(num=>{
     return args.indexOf(num) === -1
 })

}
console.log(destroyer1([1,1,3,3,5],1,3))

// using forof, passing 1 argument
function destroyer2(arr){
    let args = Array.from(arguments) //converts object to array
    args.splice(0,1)
    let resultArr = []
    for (const nums of arr) {
        if(args.indexOf(nums) === -1) resultArr.push(nums)
    }
    return resultArr
}

console.log(destroyer2([1,1,3,3,5],1,3))
   