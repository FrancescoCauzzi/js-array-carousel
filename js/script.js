// - preparare un array di path di immagini
// - preparare gli elementi in js corrispondenti agli elementi html
// - memorizzare una variabile di indice
// -> alla pressione del pulsante "destra"
//   ° aumentare il valore dell'indice di un'unità
//   ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
//   ° aggiungi la classe active al cerchio relativo alla posizione dell'indice
// -> alla pressione del pulsante "sinistra"
//   ° diminuire il valore dell'indice di un'unità
//   ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
//   ° aggiungi la classe active al cerchio relativo alla posizione dell'indice

// preparare un array di path di immagini

const arrImg = ['img/01.webp', 'img/02.webp', 'img/03.webp','img/04.webp','img/05.webp'];

// - preparare gli elementi in js corrispondenti agli elementi html

const topArrowEl = document.querySelector('.top-arrow');
const bottomArrowEl = document.querySelector('.bottom-arrow');
const activeImgEl = document.getElementById("active-img");

activeImgEl.src = images[index];

// - memorizzare una variabile di indice
const index = 0; 

// -> alla pressione del pulsante "top"
//   ° aumentare il valore dell'indice di un'unità

topArrowEl.addEventListener('click', function(){
  index++;
  activeImgEl.src = images[index];

})