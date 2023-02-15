let button = document.getElementById('btn')
let mp = document.getElementById('mp')
let pl = document.getElementById('pl')
button.onclick = function() {
    let krdm = Number(document.getElementById('krdm').value)
    let krd = Number(document.getElementById('krd').value)
    let krdp = Number(document.getElementById('krdp').value)
    let ammo = krdm*krdp/100
    let allammo = krdm+ammo
    let pay = Math.round(allammo/krd) 
    mp.innerHTML = `${pay}₼`
    pl.innerHTML = `${allammo}₼`
}