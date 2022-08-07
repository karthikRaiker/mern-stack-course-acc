let i=5
let timeOut = setInterval(()=>{
    if(i == 1){
        clearInterval(timeOut)
    }
    console.log(i)
    i--
},1000)

// console.log(document.location.href)
