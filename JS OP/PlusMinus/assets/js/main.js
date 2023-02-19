let button = document.getElementById('btn')
let buttonplus = document.getElementById('btnplus')
let h = document.getElementById('h1')
let count = 0
buttonplus.onclick = function() {
    count++
    h.innerHTML = count
}
button.onclick = function() {
    if(count>0){
        count--
        h.innerHTML = count
    }
    else{
        
    }
}