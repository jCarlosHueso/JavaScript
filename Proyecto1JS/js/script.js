window.document.addEventListener("DOMContentLoaded",inicio);
var bodyjs=document.querySelector("body");
var cajaImagenes=document.createElement("div");
var cajaTabla=document.createElement("div");

function inicio(){
    console.log("entro en js")
    let boton1=document.createElement("button");
    boton1.textContent="Cargar Imagenes";
    boton1.addEventListener("click",CargarImagenes)
    let boton2=document.createElement("button")
    boton2.textContent="Cargar tabla";
    boton2.addEventListener("click",CargarTabla)
   
   
    bodyjs.appendChild(boton1);
    bodyjs.appendChild(boton2);
    console.log(bodyjs);
}
function CargarImagenes(){

    console.log("empiezo a cargar imágenexzs")
    cajaImagenes.innerHTML="";
    for (let i=0;i<30;i++){
        let imagen=document.createElement("img");
        numeroR=Math.round(Math.random()*50);
        if (i%2){
        imagen.setAttribute("src","https://randomuser.me/api/portraits/women/"+numeroR+".jpg");
        }
        else{
            imagen.setAttribute("src","https://randomuser.me/api/portraits/men/"+numeroR+".jpg");
 
        }
        imagen.setAttribute("alt",i);
        imagen.onclick=function(){
            let nombre=imagen.getAttribute("alt");
            alert("soy "+ imagen.getAttribute("alt") );
        }
        cajaImagenes.appendChild(imagen);
    }
    bodyjs.appendChild(cajaImagenes);

}
function CargarTabla(){
 console.log("crear la tabla")
 let numeroFilas=prompt("teclea nº filas");
 let numeroColumnas=prompt("teclea número de columnas")
 let miTabla=document.createElement("table");
 miTabla.setAttribute("border","2px");
 miTabla.setAttribute("width","100%");
  let nFilas=parseInt(numeroFilas);
  let nCol=parseInt(numeroColumnas);
  for (let nf=0 ; nf<nFilas;nf++){
    let fila=document.createElement("tr");
    for (let nc=0; nc<nCol; nc++){
        let celda=document.createElement("td");
        celda.id="celda"+String(nf)+String(nc);
        console.log(celda.id);
        let nRamdom=Math.round(Math.random()*100);
        celda.textContent=nRamdom;
        celda.addEventListener("click", function(){
           // let elemento=document.querySelector()
            alert(" mi valor es: "+celda.id)
        })
        fila.appendChild(celda);
    }
    miTabla.appendChild(fila);
  }
 cajaTabla.appendChild(miTabla);
 bodyjs.appendChild(cajaTabla);

}