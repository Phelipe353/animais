import outsideClick from './outsideClick.js';

export default function initDropDownMenu() {

  const dropDownMenus = document.querySelectorAll('[data-dropDown]');

  dropDownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(usarEvent => {
      menu.addEventListener(usarEvent, handleClick);
    });
  });

  function handleClick (event) {
    event.preventDefault();
    this.classList.toggle('active');
    outsideClick( this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  };
};


