function zoom(num_foto){
    identificador = 'f' + num_foto;
    if(document.getElementById(identificador).className == "nozoom"){
        document.getElementById(identificador).className = "zoom";
    }
    else{
        document.getElementById(identificador).className = "nozoom"
    }
}