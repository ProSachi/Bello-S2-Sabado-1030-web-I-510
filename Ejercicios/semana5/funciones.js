export function dato() {
    let numero = parseInt(prompt("Ingrese un numero"));
    return (numero)
}

export function sumar(a, b) {
    alert(`El resultado es: ${a + b}`)
}

export function restar(a, b) {
    alert(`El resultado es: ${a - b}`)
}

export function multiplicar(a, b) {
    alert(`El resultado es: ${a * b}`)
}

export function dividir(a, b) {
    if (b === 0) {
        alert("No se puede divir por cero")
        return
    }
    alert(`El resultado es: ${a / b}`)
}


