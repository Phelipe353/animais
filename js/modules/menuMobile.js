import outsideClick from './outsideClick.js';


export default function initenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.toggle('active');
      menuButton.classList.toggle('active');
      outsideClick(menuList, eventos, ()=>{
        menuList.classList.remove('active');
      menuButton.classList.remove('active');
      })
    }

    eventos.forEach(evento=>{
      menuButton.addEventListener(evento, openMenu);
    })
  }
  
  
}


