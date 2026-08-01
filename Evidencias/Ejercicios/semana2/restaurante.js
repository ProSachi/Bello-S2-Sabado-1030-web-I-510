let valorProducto;
let cantidadProducto;
const IMP = 1.19;
let valorPagar;

valorProducto = prompt('Ingrese el valor del producto');
console.log("el valor del producto es: " + valorProducto );
cantidadProducto = prompt('Ingrese la cantidad de productos');
console.log("la cantidad de productos es: " + cantidadProducto );
valorPagar = (cantidadProducto * valorProducto) * IMP;
console.log("el valor a pagar es: " + valorPagar);
