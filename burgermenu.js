function abrirMenu(){
    if(document.getElementById("menu").className == "navBar")
    {
        document.getElementById("menu").className = "navBarMobile";
    }
    else{
        document.getElementById("menu").className = "navBar";
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