function truncate(str, num){
    if(num > str.length) return str // if num is greater than string length then return string
    if(num <= 3 ) return str.slice(0,num) + "..." // if num is less then or equal to 3 then return string with ... (3 dot)
        return str.slice(0,num-3) + "..." // if num is less then string length then include 3 dot as a string length  
}

console.log(truncate("hello welcome to javascript three",3))
console.log(truncate("hello welcome to javascript eleven",11))
console.log(truncate("hello welcome to javascript fifteen",54))


