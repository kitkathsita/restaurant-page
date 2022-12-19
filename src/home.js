function homeContent() {
  const mainDiv = document.querySelector('main')
  mainDiv.innerHTML =
  `<div class="homeContent">
    <div class="slogan">comida italiana hecha por un italiano</div>
    <div class="pictureFood">
      <div class="optFood">
        <img src="./images/comida/lasagna.jpg" alt="">
        <div>Lasagna</div>
      </div>
      <div class="optFood">
        <img src="./images/comida/pizza.jpg" alt="">
        <div>Pizza</div>
      </div>
      <div class="optFood">
        <img src="./images/comida/panini.jpg" alt="">
        <div>Panini</div>
      </div>
      <div class="optFood">
        <img src="./images/comida/bolognesa.jpg" alt="">
        <div>Bolognesa</div>
      </div>
      <div class="optFood">
        <img src="./images/comida/bedidas.jpg" alt="">
        <div>Limonadas</div>
      </div>
    </div>
  </div>`
}


export default homeContent