/* let edad = 40;
let edad2 = 40;
let edad3 = 40;
let edad4 = 40;
let resultado = (edad === edad2) && (edad3 === edad4);

if (condition) {
    console.log(`SOlo me veo cuando la condición verdadera`);
} else if (condition2) {
    console.log(`SOlo me veo cuando la condición2 es verdadera`);
} else {
    console.log(`SOlo me veo cuando la condición2 es falsa`);
}
 */
"use strict";

const saldoCliente = 75000;
let costoCarrito = 100000;
const cuponIngresado = "VERANO20"; // Puede ser "VERANO20", "CLIENTE_VIP", o ""
let descuentoAplicado = 0;

// 1. Evaluación de casos exactos con Switch
switch (cuponIngresado) {
    case "VERANO20":
        descuentoAplicado = 0.20; // 20%
        console.log("Cupón de verano aplicado.");
        break;
    case "CLIENTE_VIP":
        descuentoAplicado = 0.30; // 30%
        console.log("Descuento VIP aplicado.");
        break;
    case "":
        console.log("No se ingresó cupón.");
        break;
    default:
        console.log("Cupón inválido.");
        break;
}
// 2. Operación aritmética basándonos en el resultado del Switch
costoCarrito = costoCarrito - (costoCarrito * descuentoAplicado);

// 3. Validación lógica con if-else para procesar la transacción
if (saldoCliente >= costoCarrito) {
    const nuevoSaldo = saldoCliente - costoCarrito;
    console.log(`Transacción exitosa. Se cobró: $${costoCarrito}. Nuevo saldo: $${nuevoSaldo}`);
} else {
    const faltante = costoCarrito - saldoCliente;
    console.error(`Fondos insuficientes. Te faltan: $${faltante} para completar la compra.`);
}



let edad = 20;

// Forma if...else (Verborrágica)
let mensaje;
if (edad >= 18) {
  mensaje = "Es mayor de edad";
} else {
  mensaje = "Es menor de edad";
}
console.log(mensaje);

// Forma Ternaria (Concisa)
const mensajeTernario = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
//                      (condición)  ?   (valor si true)  :   (valor si false)
console.log(mensajeTernario);



