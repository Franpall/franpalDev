function zoom(num_foto){
    identificador = 'f' + num_foto;
    if(document.getElementById(identificador).className == "nozoom"){
        document.getElementById(identificador).className = "zoom";
    }
    else{
        document.getElementById(identificador).className = "nozoom"
    }
}

function hacerZoomUsuario(){
    elemento = document.getElementById("zoom")
    if (elemento.className == "imagen_usuario"){
        elemento.className = "imagen_usuarioZoom" 
    }
    else{
        elemento.className = "imagen_usuario"      
    }
}