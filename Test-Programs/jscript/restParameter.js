function resparameter(days , ...cardId){
    cardId.forEach(id => console.log(id))
    days.forEach((day,i) => console.log(day))
}

resparameter(["thursday","friday","xyz"], 1, 2, 3)