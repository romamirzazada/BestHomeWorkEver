let button = document.getElementById('btn')
button.onclick = function() {
    let groupname = document.getElementById('inp').value;
    let group = groupname.slice(-3, -2)
    if(group === '1'){
        document.body.style.backgroundColor = 'yellow'
        alert('Sabah Qrupuna Daxil Oldunuz!')
    }
    else if(group === '2'){
        document.body.style.backgroundColor = 'red'
        alert('Gunorta Qrupuna Daxil Oldunuz!')
    }
    else if(group === '3'){
        document.body.style.backgroundColor = 'black'
        alert('Axsam Qrupuna Daxil Oldunuz!')
    }
    else{
        document.body.style.backgroundColor = 'pink'
        alert('Beli Siz Ferqlisiniz!')
    }

}