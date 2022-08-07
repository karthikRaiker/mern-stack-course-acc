function a(){
    var x=10;
    return function b(){
        console.log(x);
    }
}

var c = a();
console.log(c())


//another closure which is same as above one
console.log("another closure which is same as above one")

function p(){
    let x=10;
    function b(){
        console.log(x);
    }
    x=25;
    return b
}

var c = p();
console.log(c)
c()