window.document.addEventListener("DOMContentLoaded", inicio);
const leyendas = ["total", "blue", "red", "orange", "green"];

function inicio() {
  console.log("funcion inicio");
  const componentes = [];
  let btnMover = document.querySelector("#mover");
  btnMover.addEventListener("click",desplazar)
  console.log(btnMover);
  //identificar el body
  const bodyp = document.querySelector("body");
  //crear contenedor principal
  const contPrincipal = document.createElement("div");
  //añadir estilo al div del contenedor principal
  contPrincipal.className = "container";

  for (let i = 0; i < leyendas.length; i++) {
    const contenedorX = crearContenedorColores(leyendas[i]);
    contPrincipal.appendChild(contenedorX);
  }
  bodyp.appendChild(contPrincipal);
}
function crearContenedorColores(leyenda) {
  const cajax = document.createElement("fieldset");
  cajax.className = "gallery";

  //añadir el texto a la leyenda

  leyendax = document.createElement("legend");
  leyendax.textContext = leyenda;
  cajax.appendChild(leyendax);
  cajax.id = leyenda;

  if (leyenda == "total") {
    for (let i = 0; i < 20; i++) {
      let numAleatorio = Math.ceil(Math.random() * 4);
      let componente = document.createElement("div");
      componente.className = "gallery div";
      componente.style.backgroundColor = leyendas[numAleatorio];
      componente.textContent = leyendas[numAleatorio];
      cajax.appendChild(componente);
    }
  }

  return cajax;
}

function desplazar() {
  console.log("funcion desplazar");
  const vectorTodos = document.querySelectorAll("#total > *");
  vectorTodos.forEach(recorrer);
  function recorrer(item, indice) {
    console.log(item.style.backgroundColor);
    color=item.style.backgroundColor;
   
  }
}
