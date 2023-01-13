window.document.addEventListener("DOMContentLoaded",inicio)
var bodyjs=document.querySelector("body")

function inicio(){
    console.log("entro en .js")

let boton1=document.createElement("button")
boton1.textContent("Cargar imagenes")
boton1.addEventListener("click",cargarImagenes)

let boton2=document.createElement("button")
boton2.textContent("Cargar tabla")
boton2.addEventListener("click",cargarTabla)
bodyjs.appendChild(boton1)
bodyjs.appendChild(boton2)
}

function cargarImagenes(){
console.log("cargo imagenes")
// let cajaimagenes=
for(let i=0;i<50;i++){
let numeroR = Math.round(Math.random()*50)

    let imagen=document.createElement("img")
    imagen.setAttribute("src","https://randomuser.me/api/portraits/men/"+numeroR+".jpg")
    imagen.setAttribute("alt",i)
    

    imagen.addEventListener("click",function(){
alert("soy ....")
    })
}

}

function cargarTabla(){
    console.log("cargo Tabla")
    }