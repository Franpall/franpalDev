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

function redireccionar(destino){
    switch (destino){
        case "telegram":
            window.open("https://t.me/franpal3");
        break;
    }

}

// Función imán al hacer scroll

document.getElementById("opcion1").className = "seleccionado";

window.addEventListener('scroll', function() {
  const seccionObjetivo = document.getElementById('inicio');
  const rect = seccionObjetivo.getBoundingClientRect();

  // Verifica si la sección está cerca del centro de la ventana
  if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
    // La sección está cerca, puedes agregar aquí la lógica para "atraerla"
    document.getElementById("opcion1").className = "seleccionado";
    seccionObjetivo.classList.add('atraida');
  } else {
    seccionObjetivo.classList.remove('atraida');
    document.getElementById("opcion1").className = "nothing";
  }
});

window.addEventListener('scroll', function() {
    const seccionObjetivo = document.getElementById('area_perfil');
    const rect = seccionObjetivo.getBoundingClientRect();
  
    // Verifica si la sección está cerca del centro de la ventana
    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      // La sección está cerca, puedes agregar aquí la lógica para "atraerla"
      document.getElementById("opcion2").className = "seleccionado";
      seccionObjetivo.classList.add('atraida');
    } else {
      seccionObjetivo.classList.remove('atraida');
      document.getElementById("opcion2").className = "nothing";
      cerrarImagenUsuario();
    }
  });

  window.addEventListener('scroll', function() {
    const seccionObjetivo = document.getElementById('proyectos');
    const rect = seccionObjetivo.getBoundingClientRect();
  
    // Verifica si la sección está cerca del centro de la ventana
    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      // La sección está cerca, puedes agregar aquí la lógica para "atraerla"
      document.getElementById("opcion3").className = "seleccionado";
    } else {
      document.getElementById("opcion3").className = "nothing";
    }
  });

  window.addEventListener('scroll', function() {
    const seccionObjetivo = document.getElementById('contacto');
    const rect = seccionObjetivo.getBoundingClientRect();
  
    // Verifica si la sección está cerca del centro de la ventana
    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      // La sección está cerca, puedes agregar aquí la lógica para "atraerla"
      seccionObjetivo.classList.add('atraida');
      document.getElementById("opcion4").className = "seleccionado";
    } else {
      seccionObjetivo.classList.remove('atraida');
      document.getElementById("opcion4").className = "nothing";
    }
  });