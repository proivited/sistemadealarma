function main(temperatura, ambiente, numTrabajadores, nivelLiquido){
    var form = document.forms[0];
    form.elements[0].nodeValue;
    verificarParametros(temperatura, ambiente, numTrabajadores, nivelLiquido);
}

function verificarParametros( temperatura, humedad, numTrabajadores, nivelLiquido ){
    if( temperatura > 0.90 || temperatura < 0.30 ){
    alert("Temperatura no valida");
    }
    if(humedad > 0.50 ){
        alert("La humedad es superior");
    }
    if( numTrabajadores > 1){
        alert("Los trabajadores son muchos");
    }
    if(nivelLiquido > 0.9);{
        alert("El nivel de liquido es superior");
    }

}