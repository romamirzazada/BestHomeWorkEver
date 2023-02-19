let input = document.getElementById('inp')
let input2 = document.getElementById('inp2')
let button = document.getElementById('btn')
let h = document.getElementById('h1')
button.onclick = function(){
    let x = parseInt(input.value)
    let y = parseInt(input2.value)
    let sum = 1
    for(let i = x+1; i < y; i++){
        sum = sum*i
    }
    h.innerHTML = `${sum}`
}
