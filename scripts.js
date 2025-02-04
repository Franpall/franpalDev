const currentDate = new Date();
const year = currentDate.getFullYear();
let yearElement = document.getElementById("currentDate")
yearElement.innerText = `${year}`

function zoom(num_foto){
    identificador = 'f' + num_foto;
    mensaje = document.getElementById("mensajeImg" + num_foto);
    if(document.getElementById(identificador).className == "nozoom"){
        document.getElementById(identificador).className = "zoom";
        mensaje.className = "mensajeImgOn";
    }
    else{
        document.getElementById(identificador).className = "nozoom";
        mensaje.className = "mensajeImgOff"; 
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

// Función imán al hacer scroll

window.addEventListener('scroll', function() {
    const seccionObjetivo = document.getElementById('area_perfil');
    const rect = seccionObjetivo.getBoundingClientRect();
  
    // Verifica si la sección está cerca del centro de la ventana
    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      // La sección está cerca, puedes agregar aquí la lógica para "atraerla"
      seccionObjetivo.classList.add('atraida');
    } else {
      seccionObjetivo.classList.remove('atraida');
    }
  });

  window.addEventListener('scroll', function() {
    const seccionObjetivo = document.getElementById('contacto');
    const rect = seccionObjetivo.getBoundingClientRect();
  
    // Verifica si la sección está cerca del centro de la ventana
    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      // La sección está cerca, puedes agregar aquí la lógica para "atraerla"
      seccionObjetivo.classList.add('atraida');
    } else {
      seccionObjetivo.classList.remove('atraida');
    }
  });