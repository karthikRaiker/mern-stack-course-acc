// with using builtin method that is endsWith()
function confirmEndingString(str,endStr){
    if(str.endsWith(endStr))
        console.log("true") 
    else
        console.log("false")
}

//hardcoded
function confirmEndingString1(str,endStr){
    return str.substr(-endStr.length) === endStr
}

confirmEndingString("hello world", "world")
console.log(confirmEndingString1("hello world", "world"))
console.log(confirmEndingString1("namaskara", "a"))