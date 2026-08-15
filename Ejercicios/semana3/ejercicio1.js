/* Desarrollaremos un validador de acceso para una atracción de un parque de diversiones. Hay dos reglas: la persona debe medir más de 1.40 metros, y debe tener el pase pagado. */

// Paso 1: Definir las variables de estado del visitante
let alturaVisitante = Number(prompt(`Cual es tu altura?`)); // En metros
let tienePaseValido = prompt(`Tienes el pase pago? Si o No`).toLocaleLowerCase();

// Paso 2: Crear la estructura condicional anidada
if (alturaVisitante > 1.40 && tienePaseValido === "si") {
    // Regla de oro, si no cumple la altura, se descarta inmediatamente
    console.log("Acceso permitido. ¡Disfrute la atracción!");
} else {
    console.log("Acceso denegado.");
}
