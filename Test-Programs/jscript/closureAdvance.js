function Counter(num){
    var count = num;
    this.incrementCounter = function(){
        count ++;
        console.log(count)
    }
    this.decrementCounter = function(){
        count --;
        console.log(count)
    }
}

var counter1 = new Counter(55);
console.log("here count is initialize to 55")
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();

var counter2 = new Counter(100);
console.log("here count is initialize to 100")
counter2.decrementCounter();
counter2.decrementCounter();
counter2.incrementCounter();
counter2.incrementCounter();