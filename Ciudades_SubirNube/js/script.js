window.addEventListener("DOMContentLoaded", inicio);

function inicio() {
  let btnInicio = document.querySelector("#mostrarTabla");
  const tabla = document.querySelector("#tbody");

  console.log(btnInicio);

  btnInicio = addEventListener("click", mostrarTabla);

  function mostrarTabla() {
    //  console.log("entro en ajax");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;
    function cargar() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //  console.log("accedo a datos");

        var listaCiudades = JSON.parse(xhr.responseText);
        //  console.log(listaCiudades)

        listaCiudades.forEach(crearFila);
        function crearFila(item, indice) {
          //console.log(item.imagen)

          const nuevaFila = document.createElement("tr");

          nuevaFila.innerHTML =
            "<td>" +
            item.ciudad_nombre +
            "</td><td>" +
            item.ciudad_poblacion +
            "<td>" +
            "<img src=" +
            item.imagen +
            " width=200px height=200px>";
          "</td>" +"<td>"+item.video+"</td>"+ "<td>"+item.mapa+"</td>";

        //  console.log(item.ciudad_nombre);
        //  console.log(item.ciudad_poblacion);
       //   console.log(item.ciudad_id);
          console.log(item.video);
      //    console.log(item.imagen);
          console.log(item.mapa);
          tabla.appendChild(nuevaFila);
        }
      }
    }
    xhr.open("GET", "json/datos.json", true);
    xhr.send();
  }
}
