window.addEventListener("load",inicio)

function inicio(){

    console.log("entro en js")

    let contenedorPrincipal=document.createElement("div")

let parrafo1=document.createElement("p")

parrafo1.textContent="Jose Carlos"

contenedorPrincipal.appendChild(parrafo1)

idBody=document.querySelector("body")

idBody.appendChild(contenedorPrincipal)

    const parrafos = document.querySelectorAll("p")

    console.log(parrafos)

    parrafos.forEach(cambiar)

    function cambiar(item,indice){

        console.log(item.textContent)

    }
}
