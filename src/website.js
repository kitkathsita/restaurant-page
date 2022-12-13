import contactContent from "./contact"
import homeContent from "./home"
import menuContent from "./menu"

function initialWeb() {
  const cont = document.getElementById('content')

  cont.appendChild(createHeader())
  cont.appendChild(createBar())
  cont.appendChild(contentOfBar())
  cont.appendChild(createFooter())

}

function createHeader() {
  const header = document.createElement('header')
  const logo = document.createElement('img')
  const name = document.createElement('div')
  logo.src = '../dist/images/apprendistalogo.jpg'
  header.appendChild(logo)
  header.appendChild(name)
  name.innerText = 'Apprendista'
  return header
}

function createFooter() {
  const footer = document.createElement('footer')

  footer.innerText = 'copyright by kitkath'

  return footer
}

function createBar() {
  const bar = document.createElement('div')
  const menu = document.createElement('div')
  const home = document.createElement('div')
  const contact = document.createElement('div')

  bar.classList.add('bar')
  menu.classList.add('option')
  home.classList.add('option')
  contact.classList.add('option')

  bar.appendChild(home)
  bar.appendChild(menu)
  bar.appendChild(contact)

  menu.innerText = 'menu'
  home.innerText = 'home'
  contact.innerText = 'contact'

  menu.addEventListener('click', menuContent)
  home.addEventListener('click', homeContent)
  contact.addEventListener('click', contactContent)

  return bar
}

function contentOfBar() {
  const content = document.createElement('main')

  content.innerHTML = 'home'

  return content
}

function activeClass() {
  
}

export default initialWeb