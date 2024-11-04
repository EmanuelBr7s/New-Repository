function calcular(){
    const num = [10,20,30,40,50]
    let suma = 0

    document.getElementById("arreglo").innerHTML = `Arreglo: [${num.join(", ")}]`;


    for(let i = 0; i < num.length; i++){
        suma += num[i];
    }

    const promedio = suma/num.length

    document.getElementById('resultado').innerHTML = `Suma total: ${suma} <br> Promedio: ${promedio}`; 
}
