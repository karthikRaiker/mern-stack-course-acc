function sumInefficient(num){  //takes O(n) complexity
    let tot=0;
    for(let i=1;i<=num;i++){
        tot += i;
    }
    return tot
}
console.log(sumInefficient(10000))

function sumEfficient(num){ //takes O(3) complexity
    return num*(num+1)/2
}
console.log(sumEfficient(10000))