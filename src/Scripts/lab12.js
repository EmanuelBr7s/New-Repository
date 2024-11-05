function calcular() {
    const input = document.getElementById('numArray').value;
    const num = input.split(',').map(Number);
    let suma = 0;

    // Mostrar el arreglo de números
    document.getElementById("arreglo").innerHTML = `Arreglo: [${num.join(", ")}]`;

    // Calcular la suma
    for (let i = 0; i < num.length; i++) {
        suma += num[i];
    }

    // Calcular el promedio
    const promedio = suma / num.length;

    // Mostrar los resultados
    document.getElementById('result').innerHTML = `Suma total: ${suma} <br> Promedio: ${promedio}`;
}

// Parte 2: Bucle 'while' para solicitar números hasta que se ingrese un número negativo
function solicitarNumero() {
    let numero = 0; // Inicializamos el número en cero o en otro valor positivo.

    while (numero >= 0) {
        numero = parseFloat(prompt("Ingrese un número (ingrese un número negativo para salir):"));
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
            numero = 0; // Reiniciamos para que no rompa el bucle si no se introduce un número.
        }
    }
    alert("Ha ingresado un número negativo. Programa finalizado.");
}

// Parte 3: Verificación de contraseña usando 'do...while'
const correctPassword = "1234";
function checkPassword() {
    const inputPassword = document.getElementById("passwordInput").value;
    const passwordResult = document.getElementById("passwordResult");

    if (inputPassword === correctPassword) {
        passwordResult.innerHTML = "Contraseña correcta. Acceso concedido.";
    } else {
        passwordResult.innerHTML = "Contraseña incorrecta. Intenta nuevamente.";
    }
}