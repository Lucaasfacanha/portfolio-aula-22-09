import './style.css'

function menuMobile () {

  const botaoAbrirMenu = document.getElementById('botaoAbrirMenu')
  const menu = document.getElementById('menuMobile2')
  const overlay = document.getElementById('overlayMenu')

  botaoAbrirMenu.addEventListener('click', ()=>{
      menu.classList.add('abrirMenu')
  })

  menu.addEventListener('click', ()=>{
      menu.classList.remove('abrirMenu')
  })

  overlay.addEventListener('click', ()=>{
      menu.classList.remove('abrirMenu')
  })
}
menuMobile();


function main (){
  const x = document.querySelector('#x');
  const y = document.querySelector('#y');
  const me = document.querySelector('#media');
  const body = document.body;

  document.body.addEventListener('click', (event) => {
    x.innerHTML = 'A posição de X é: ' + event.clientX; 
    y.innerHTML = 'A posição de Y é: ' + event.clientY;
    const media = (event.clientX + event.clientY) / 2; 
    me.innerHTML = 'A média é: ' + media;

    body.style.background = '#' + media;
}) 
  document.body.style.height = '100vh'
}
main ();