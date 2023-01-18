window.addEventListener("load", inicio);
const body = document.querySelector("#body")
function inicio() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("entro en contenidos");

      let texto = document.getElementById("texto");

      var listaVideos = JSON.parse(xhr.responseText);
      listaVideos.forEach(crearFila);
      function crearFila(item,indice){
      
          console.log(item.url)
let video = document.createElement("div")
video.innerHTML="<video width=320 height=240 autoplay muted loop><source src="+item.url+"></video>"
body.appendChild(video)

      }

    } else {
      console.log("no ha entrado a los datos");
    }
  };
 // xhr.open("GET", "./json/datos.json", true);
  xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
  
  xhr.send();
}