/* let precio;
let total = 0;
do {
  precio = parseFloat(prompt("digite el precio"));
  total = total + precio;
  console.log(`El valor a pagar es: ${total}`);
} while (precio > 0); */


let totalCompra = 0;
let precioProducto;

alert("Bienvenido al sistema de caja registradora.");

// Usamos do-while porque necesitamos pedir el precio AL MENOS una vez.
do {
    // 1. Capturamos el dato (Llega como String)
    let entrada = prompt("Ingrese el precio del producto (o '0' para finalizar y pagar):");
    
    // 2. Coerción explícita: Convertimos el String a Number
    precioProducto = Number(entrada);

    // 3. Validación de seguridad (Si no ingresa un número, isNaN devuelve true)
    if (isNaN(precioProducto) || precioProducto < 0) {
        alert("Error: Por favor ingrese un monto numérico válido y positivo.");
    } else if (precioProducto > 0) {
        // 4. Operación aritmética: Acumulamos el valor
        totalCompra = totalCompra + precioProducto; // También válido: totalCompra += precioProducto;
        console.log("Producto agregado. Subtotal actual: $" + totalCompra);
    }

} while (precioProducto !== 0); // La condición de salida es que el cajero ingrese el número 0

alert("El total a cobrar es: $" + totalCompra);
console.log("Transacción finalizada.");
