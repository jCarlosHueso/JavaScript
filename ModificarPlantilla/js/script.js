window.addEventListener("load",inicio);
const imagenes=["./img/gallery/gallery-1.jpg","./img/gallery/gallery-2.jpg","./img/gallery/gallery-3.jpg","./img/gallery/gallery-4.jpg","./img/gallery/gallery-5.jpg","./img/gallery/gallery-6.jpg","./img/gallery/gallery-7.jpg","./img/gallery/gallery-8.jpg"]
const ciudades=["Londres","Tokyo","Roma","Berlín","New York","Toril","Talayuela","Navalmoral"]
const traduccionMenu=["Team A","Team B","Team C","Team D","Team E"]
const Servicios= ["RRHH","Contabilidad","Marketing","Diseño","Producción","Desarrollo"]
const nombreWeb="DWEC"
const subTitulo="Desarrollo web entorno cliente"
let logotipo="./img/apple-touch-icon.png";
let nuevoPlaceHolder="teclea un correo de educarex"
let nuevoServicio="Nuevos Servicios"
let contenidoServicios=["./img/chefs/chefs-1.jpg","./img/chefs/chefs-2.jpg","./img/chefs/chefs-3.jpg","./img/chefs/chefs-4.jpg","./img/chefs/chefs-5.jpg","./img/chefs/chefs-6.jpg"]

const itemContenido=["cuarto slash","quinto slash","sexto slash","septimo slash"];
const autor=["Lola","Paca","Berta","Ramira"]
NuevoPrecio=["Precio X","Precio Y","Precio Z"];
A=[20,30,50,20];
B=[340,345,344,320]
C=[30,20,30,10]
D=[100,200,300,400]

function inicio() {
  const listaMenu = document.querySelectorAll("ul li a");
console.log(listaMenu)
  listaMenu.forEach(recorrerMenu);

  function recorrerMenu() {
    item.textContent = traduccionMenu[indice];

  }

  let logo= document.createElement("img")
  logo.setAttribute("src",logotipo)
  logo.setAttribute("width","20px")
  logo.setAttribute("height","20px")

  let espacioLogo = document.querySelectorAll(".navbar-brand")
  console.log(espacioLogo)
  
  espacioLogo.appendChild(logo)


  let titulo=document.querySelector()
  
}
