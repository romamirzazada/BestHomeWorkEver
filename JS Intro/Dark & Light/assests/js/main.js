var button = document.getElementById('btn')
function Dark(){
    if(document.body.style.backgroundColor==="white"){
        document.body.style.backgroundColor="black"
        button.innerHTML = 'Light Mode'
        button.style.backgroundColor = 'black'
        button.style.color = 'white'
        button.style.borderColor = 'white'
    }
    else{
        document.body.style.backgroundColor="white"
        button.innerHTML = 'Dark Mode'
        button.style.backgroundColor = 'white'
        button.style.color = 'black'
        button.style.borderColor = 'black'
    }
}