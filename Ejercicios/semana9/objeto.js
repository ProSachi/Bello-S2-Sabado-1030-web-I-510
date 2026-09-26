/* let estudiantes = [
    {
        nombre: "Alejandra",
        Apellido: "Quintero",
        gustosMusicales: ["Country", "Soul", "Paso Doble"]
    },
    {
        nombre: "Julian",
        Apellido: "Zapata",
        gustosMusicales: ["Regaetton", "Trap", "Guaracha"]
    }
        
]

let carrito = [
    {
        nombre: "Sacos",
        cantidad: "4",
        valor: "4000"
    },
    {
        nombre: "Gorras",
        cantidad: "2",
        valor: "9800"
    }
    
] */


let carrito = [1, 2, 3, 4, 5]

let carritoCompras = [...carrito];

console.log("Carrito original");
console.log(carrito);
console.log("Carrito copia");
console.log(carritoCompras);


carrito.push(6)

console.log("Carrito original");
console.log(carrito);
console.log("Carrito copia");
console.log(carritoCompras);
