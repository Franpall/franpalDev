function zoom(num_foto){
    identificador = 'f' + num_foto;
    if(document.getElementById(identificador).className == "nozoom"){
        document.getElementById(identificador).className = "zoom";
    }
    else{
        document.getElementById(identificador).className = "nozoom";
    }
}

function hacerZoomUsuario(){
    elemento = document.getElementById("zoom");
    mensaje = document.getElementById("mensajeImg");
    if (elemento.className == "imagen_usuario"){
        elemento.className = "imagen_usuarioZoom";
        mensaje.className = "mensajeImgOn";
    }
    else{
        elemento.className = "imagen_usuario";      
        mensaje.className = "mensajeImgOff"; 
    }
}

function redireccionar(destino){
    switch (destino){
        case "telegram":
            window.open("https://t.me/franpal3");
        break;
    }

}