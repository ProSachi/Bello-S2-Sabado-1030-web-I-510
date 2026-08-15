const PINSECRETO = 12345;
let saldoActual = 500000;


let pinIngresado = Number(prompt(`Ingresa el pin`))

if (PINSECRETO === pinIngresado) {
    let saldoRetiro = Number(prompt(`Ingresa el saldo a retirar`))
    if (saldoRetiro <= saldoActual) {
        saldoActual = saldoActual - saldoRetiro;
        console.log(`Retiro aprobado, su saldo restando es: ${saldoActual}`);
    } else {
        console.log(`Saldo insuficiento`);
    }
} else {
    console.log("PIN inválido. Operación cancelada.");
}