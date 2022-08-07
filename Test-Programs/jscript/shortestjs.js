var a=10;
function b(){
    var x=25;
    return x;
}
console.log(a)
// console.log(window.a)
console.log(this.a)
// console.log(this === window)
console.log(b())