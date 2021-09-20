export default function initTooltip() {
  
}

const tooltip = document.querySelectorAll('[data-tooltip]');


function onMouseOver(event) {
 const tooltipBox = crirTooltipBox(this);
 
  onMouseMove.tooltipBox = tooltipBox;
 this.addEventListener('mousemove', onMouseMove);

  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.element = this;
 this.addEventListener('mouseleave', onMouseLeave);

}

const onMouseLeave = {
  // Não é necessário adicionar as propriedades no objeto
  tooltipBox: '',
  element: '',
  handleEvent(){
    this.tooltipBox.remove();
    this.element.removeEventListener('mouseleave', onMouseLeave);
    this.element.removeEventListener('mousemove', onMouseMove);
  },
}

const onMouseMove = {
  handleEvent(event){
    this.tooltipBox.style.top = event.pageY + 20 + 'px';
    this.tooltipBox.style.left = event.pageX + 20 + 'px';
  }
}

function crirTooltipBox(element) {
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}


tooltip.forEach((item)=>{
  item.addEventListener('mouseover', onMouseOver);

})

