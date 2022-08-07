function x(){
    for(var i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000)
    }
}
x(); //6 6 6 6 6

console.log(`
-------------- expected result -----------
`)

function y(){
    for(let i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000) 
    }
}
y(); //1 2 3 4 5

// improved version using same var keyword with closure

function z(){
    for(var i=1; i<=5; i++){
       function closure(a){
            setTimeout(function(){
                console.log(a);
            }, a*1000)
       }
       closure(i)
    }
}
z(); //1 2 3 4 5