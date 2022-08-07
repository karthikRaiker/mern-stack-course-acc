function falsyBouncer(arr){
    let truthArr = []
    for (const item of arr) {
        if(item) truthArr.push(item)
    }
    return truthArr
}
// console.log(falsyBouncer([1,2,"","hello",null, undefined, "xyz", NaN]))


//using filter

function falsyBouncer1(arr){
    return arr.filter(function(item){
        return item
    })
}
// console.log(falsyBouncer1([1,2,"","hello",null, undefined, "xyz", NaN]))


//another example of filter & we can see diff btw filter() and map()
let arr = [1,2,3,4,5,6,7,8,9]
let filterArr = arr.filter((item)=> item>3)
console.log("filterArr=>",filterArr)
let mapArr = arr.map((item)=> item>3)
console.log("mapArr=>",mapArr)
console.log("actual array=>", arr)