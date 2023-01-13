window.addEventListener("load",start)


function start(){
  //  console.log("funcion de inicio")
let boton1 = document.querySelector("#btn1")
boton1.addEventListener("click",funcionBtn1)

let boton2 = document.querySelector("#btn2")
boton2.addEventListener("click",funcionBtn2)

}

function funcionBtn1(){
    //    console.log ("funcion de boton 1")
    let caja1 = document.getElementById("c1")
    caja1.style.backgroundColor="green"
    }

    function funcionBtn2(){
        //    console.log ("funcion de boton 2")
        let aleatorio=Math.round(Math.random*100)
        let caja2 = document.getElementById("c2")
        caja2.textContent=aleatorio

}