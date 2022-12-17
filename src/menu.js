function menuContent() {
  const mainDiv = document.querySelector('main')
  mainDiv.innerHTML = 
  `<div class="menuOptionBar">
    <div class="menuOption">ANTIPASTO</div>
    <div class="menuOption">LASAGNA</div>
    <div class="menuOption">PASTA</div>
    <div class="menuOption">PANINI</div>
    <div class="menuOption">PIATTI SPECIALI</div>
    <div class="menuOption">PIZZA</div>
    <div class="menuOption">DOLCE</div>
    <div class="menuOption">BEBIDAS</div>
  </div>`

  const optionsMenu = document.querySelectorAll('.menuOption')
  optionsMenu.forEach(menuOption => menuOption.addEventListener('click', showMenu))
  optionsMenu.forEach(menuOption => menuOption.addEventListener('mouseover', showMenu))

  defaultMenu()
}

function defaultMenu() {
  const mainDiv = document.querySelector('main')

  const contImg = document.createElement('div')
  contImg.classList.add('contentImg')
  mainDiv.appendChild(contImg)
  const menuImg = document.createElement('img')
  menuImg.classList.add('images')
  menuImg.src = '../dist/images/menu/antipasto.jpg'

  contImg.appendChild(menuImg)
}

function showMenu() {
  const menuImg = document.querySelector('.images')
  menuImg.src = ''

  if (this.innerHTML==='ANTIPASTO') {
    menuImg.src = '../dist/images/menu/antipasto.jpg'
  } else if (this.innerHTML==='LASAGNA') {
    menuImg.src = '../dist/images/menu/lasagna.jpg'
  } else if (this.innerHTML==='PASTA') {
    menuImg.src = '../dist/images/menu/pasta.jpg'
  } else if (this.innerHTML==='PANINI') {
    menuImg.src = '../dist/images/menu/panini.jpg'
  } else if (this.innerHTML==='PIATTI SPECIALI') {
    menuImg.src = '../dist/images/menu/piattispeciali.jpg'
  } else if (this.innerHTML==='PIZZA') {
    menuImg.src = '../dist/images/menu/pizza.jpg'
  } else if (this.innerHTML==='DOLCE') {
    menuImg.src = '../dist/images/menu/dolce.jpg'
  } else if (this.innerHTML==='BEBIDAS') {
    menuImg.src = '../dist/images/menu/bebidas.jpg'
  }

}

export default menuContent