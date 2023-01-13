window.addEventListener("DOMContentLoaded", inicio);

const nombres = ["chirimoya","ciruela","fresa","kiwi","mandarina","melocoton","melon","naranja","nectarina","papaya","peras","piña","platanos","pomelos","prunus","sandias"];

const precios = [3, 4, 2, 3, 5, 6, 2, 3, 1, 1, 3, 5, 6, 1, 3, 6];

const imagenes = ["imagenes/chirimoya.PNG","imagenes/ciruela.PNG","imagenes/fresa.PNG","imagenes/kiwi.PNG","imagenes/mandarina.PNG","imagenes/melocoton.PNG","imagenes/melon.PNG","imagenes/naranja.PNG","imagenes/nectarina.PNG","imagenes/papaya.PNG","imagenes/peras.PNG","imagenes/piña.PNG","imagenes/platanos.PNG","imagenes/pomelos.PNG","imagenes/prunus.PNG","imagenes/sandias.PNG"];

function inicio() {
  let galeria = document.querySelector("#galeria");
  let tablaCesta = document.querySelector("#cesta");
  let total = document.querySelector("#total");
  let txtPassword = document.querySelector("pswAdmin");

  const frutas = [];

  for (let i = 0; i < nombres.length; i++) {
    let cardFruta = document.createElement("div");
    cardFruta.style.backgroundColor = "lightgray";
    let imagen = document.createElement("img");
    imagen.setAttribute(imagenes[i]);
    cardFruta.appendChild(imagen);

    //cargar nombre
    let nombre = document.createElement("p");
    nombre.setAttribute(nombres[i]);
    cardFruta.appendChild(nombre);
    // presio
    let precio = document.createElement("p");
    precio.setAttribute(precios[i] + "€");
    cardFruta.appendChild(precio);
    // cargar input del precio
    let nuevoPrecio = document.createElement("input");
    nuevoPrecio.style.width = "30px";
    nuevoPrecio.setAttribute("hidden", true);

    cardFruta.appendChild(nuevoPrecio);
    galeria.appendChild(cardFruta);
  }
}


function logiearse(e) {
  console.log(e.key);
  console.log("contenido pwq" + txtPassword);

}
