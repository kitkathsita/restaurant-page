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
}

function showMenu() {
  const mainDiv = document.querySelector('main')

  const menuImg = document.createElement('img')
  menuImg.classList.add('images')
  menuImg.src = '../dist/images/antipasto.jpg'

  if (this.innerHTML==='ANTIPASTO') {
    menuImg.src = '../dist/images/antipasto.jpg'
  } else if (this.innerHTML==='LASAGNA') {
    menuImg.src = '../dist/images/lasagna.jpg'
  } else if (this.innerHTML==='PASTA') {
    menuImg.src = '../dist/images/pasta.jpg'
  } else if (this.innerHTML==='PANINI') {
    menuImg.src = '../dist/images/panini.jpg'
  } else if (this.innerHTML==='PIATTI SPECIALI') {
    menuImg.src = '../dist/images/piattispeciali.jpg'
  } else if (this.innerHTML==='BEBIDAS') {
    menuImg.src = '../dist/images/bebidas.jpg'
  }

  mainDiv.appendChild(menuImg)
}

export default menuContent