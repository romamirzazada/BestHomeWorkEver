Date();{
    if(Date.getHours >= 6 && Date.getHours< 12){
        document.body.style.backgroundColor = 'gray'
        alert("Sabahiniz Xeyir!")
    }
    else if(Date.getHours >= 12 && Date.getHours< 17){
        document.body.style.backgroundColor = 'orange'
        alert("Gunortaniz Xeyir!")
    }
    else{
        document.body.style.backgroundColor = 'black'
        alert("Axsaminiz Xeyir!")
    }
}