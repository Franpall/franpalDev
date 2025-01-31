function abrirMenu(){
    if(document.getElementById("menu").className == "navBar")
    {
        document.getElementById("menu").className = "navBarMobile"; // Abrir menu hamburguesa
    }
    else{
        document.getElementById("menu").className = "navBar"; //cerrar menu hamburguesa
        // Obtener el elemento checkbox
        const checkbox = document.getElementById('burger');

        // Quitar el marcado del checkbox
        checkbox.checked = false;
    }

}

function abrirForm(){
    if(document.getElementById("formulario").className == "formulario_show")
    {
        document.getElementById("formulario").className = "formulario_hide";
    }
    else{
        document.getElementById("formulario").className = "formulario_show";
    } 
}

function cambiarSeleccion(opcion)
{
    for(var i = 1; i < 5; i++ )
    {
        var idtemp ="opcion" + i;
        document.getElementById(idtemp).className = "nothing";  
    }

    var identificacion = "opcion" + opcion;
        document.getElementById(identificacion).className = "seleccionado";
    abrirForm()
}