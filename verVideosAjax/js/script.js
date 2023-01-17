window.addEventListener("load", inicio);


function inicio(){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("entro en contenidos")
            
            let texto = document.getElementById("texto")
            texto.innerHTML=xhr.response
    }else{
        console.log("no ha entrado a los datos")
    }
     };
    xhr.open("GET", "./json/datos.txt", true);
    xhr.send();

}

