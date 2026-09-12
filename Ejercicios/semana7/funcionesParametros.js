function sumar(numero1, numero2) {
    return numero1 + numero2;
}
function restar(numero1, numero2) {
    return numero1 - numero2;
}

function ejecutarCalculo(num1, num2, funcionOperacion) {
    console.log("Ejecutando un cálculo...");
    const resultado = funcionOperacion(num1, num2);
    return resultado;
}

let resultadoSuma = ejecutarCalculo(20, 10, sumar);
console.log(resultadoSuma);
let resultadoResta = ejecutarCalculo(20, 10, restar);
console.log(resultadoResta);
