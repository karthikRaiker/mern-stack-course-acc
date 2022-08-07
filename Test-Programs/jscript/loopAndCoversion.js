//Type Conversion
console.log(`---------------------------
    Type Conversion
---------------------------`)
console.log(Number.parseInt('55abc'))
console.log(Number.parseFloat('55.88xyz'))
console.log(Number.parseFloat('55abc.88'))
console.log(Number.parseFloat('55abc.88xyz'))

//Controlling loops 
console.log(`
---------------------------
    Controlling loops 
---------------------------`)
let str = 'helloworld'
let strArr = str.split('')
console.log(`

    Continue statement
---------------------------`)
for(let i=0; i<strArr.length; i++){
    if(i % 3 == 0){
        continue;
    }
    console.log(i)
}
console.log(`

   Break statement
---------------------------`)
for(let i=0; i<strArr.length; i++){
    console.log(i)
    if(i % 3 == 1){
        break;
    }
}