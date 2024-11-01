function limpiar(formId) {
    document.getElementById(formId).reset();
    if (formId === 'formulario') {
        document.getElementById('as').textContent = ''; // Limpiar resultado del primer formulario
    } else {
        document.getElementById('s').textContent = ''; // Limpiar resultado del segundo formulario
    }
}

function validar() {
    var x = parseFloat(document.getElementById('calificacion').value);
    if (x >= 90) {
        document.getElementById('as').textContent = "Aprobado con honores";
    } else if (x >= 70 && x < 90) {
        document.getElementById('as').textContent = "Aprobado";
    } else {
        document.getElementById('as').textContent = "Reprobado";
    }
}

function tipo() {
    var y = parseFloat(document.getElementById('tip').value);
    if (isNaN(y)) {
        document.getElementById('s').textContent = "Por favor, ingresa un número válido.";
    } else {
        if (y % 2 === 0) {
            document.getElementById('s').textContent = y + " es par";
        } else {
            document.getElementById('s').textContent = y + " es impar";
        }
    }
}


function descuento() {
    var d = parseFloat(document.getElementById('desc').value);
    var descu;
    if (d > 100) {
        descu = d * 0.10;
        document.getElementById('descuent').textContent = "Aplicas para un descuento del 10%";
        document.getElementById('descuent').textContent = "Monto a pagar: "+ (d-descu);
    } else {
        document.getElementById('descuent').textContent = "No aplica para descuento";
    }
}

function adivinar(){
    const numSecret = Math.floor(Math.random()*10)+1
    const guess = parseInt(document.getElementById('guess').value)

    if(guess === numSecret){
        document.getElementById('resultado').innerText = "Felicidades, adivinaste el número"
    }else{
        document.getElementById('resultado').innerText = 'Lo siento, el número era: '+numSecret;
    }

}