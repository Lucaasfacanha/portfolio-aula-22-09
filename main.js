import './style.css'

let botaoAbrirMenu = document.getElementById('botaoAbrirMenu')
let menu = document.getElementById('menuMobile2')
let overlay = document.getElementById('overlayMenu')

botaoAbrirMenu.addEventListener('click', ()=>{
    menu.classList.add('abrirMenu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrirMenu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrirMenu')
})