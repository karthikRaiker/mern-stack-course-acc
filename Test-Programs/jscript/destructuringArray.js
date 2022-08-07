//destructuring Arrays
console.log(`---------------------------
    destructuring Arrays
---------------------------`)
let arr = [10,20,30,40,50, 100]
let ar1, ar2, ar3, ar4, restArr
[, ar2, ar3, ar4, ...restArr] = arr
console.log(ar1, ar2, ar3, ar4, restArr)


//destructuring objects
console.log(`---------------------------
    destructuring objects
---------------------------`)
let obj1 = {name:"bmw", cc:1200}
let name, cc
({name, cc} = obj1)
console.log(name,cc)