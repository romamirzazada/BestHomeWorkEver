let age = prompt("Zehmet olmasa, Yasinizi daxil edin!")
switch(age){
    case '18':
        alert('Uzr isteyirik, Sayta daxil olmaq ucun yasiniz azdir!')
        break;
    default:
        document.body.style.backgroundColor = 'black'
        alert('Xos Gelmisiniz!')
}