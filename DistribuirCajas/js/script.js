window.addEventListener("DOMContentLoaded",inicio);
const leyendas=['total','blue','red','orange','green']
const componentes=[];

function inicio(){
    console.log("entro en javascript");
    //identificar el botón de inicio
    let botonMover=document.querySelector("#mover");
    botonMover.addEventListener("click",desplazar);
    console.log(botonMover);
    //identificar el body
    const bodyP=document.querySelector("body");
    //crear contenedor Principal
    const contenedorPrincipal=document.createElement("div");
    //añadir estilo al contenedor Principal
    contenedorPrincipal.className="container";
    for (let i=0;i<leyendas.length;i++){
        const contenedorX=crearContenedorColor(leyendas[i]);
        contenedorPrincipal.appendChild(contenedorX);
    }
    bodyP.appendChild(contenedorPrincipal);

}
function crearContenedorColor(leyenda){
 const cajaX=document.createElement("fieldset");
 //añadir estilo
 cajaX.className="gallery";
 //añadir texto a la leyenda
 let leyendaX=document.createElement("legend");
 leyendaX.textContent=leyenda;
 cajaX.appendChild(leyendaX);
 cajaX.id=leyenda;
 componentes.push(cajaX);
 if (leyenda=="total"){
    for (let i=0;i<20;i++){
        let numAleatorio=Math.ceil(Math.random()*4);
        let componente=document.createElement("div");
        componente.className="gallery div";
        // componente.style.width="100px";
        // componente.style.height="50px";
        componente.style.backgroundColor=leyendas[numAleatorio];
        componente.textContent=leyendas[numAleatorio];
        cajaX.appendChild(componente)
        }
    }
    return cajaX;
 }
function desplazar(){
    console.log("entrar en desplazar")
    const vectorTodos=document.querySelectorAll("#total > *")
    vectorTodos.forEach(recorrer);
    function recorrer(item,indice){
        console.log(item.style.backgroundColor)
        color=item.style.backgroundColor;
        document.querySelector("#"+item.textContent).appendChild(item)
    }
}

