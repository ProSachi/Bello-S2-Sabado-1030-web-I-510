let nombre = "Santiago";
console.log(nombre);
console.log(typeof(nombre));

let edad = 35;
console.log(edad);
console.log(typeof(edad));

console.log("Hola " + nombre + " tu edad es " + edad);
//Template Literals ""  '  ` ` 
console.log(`Hola ${nombre} tu edad es ${edad}`);

let edad2 = 40;

console.log(edad === edad2);
console.log(edad >= edad2);
console.log(edad <= edad2);
console.log(edad < edad2);
console.log(edad > edad2);
console.log("object"==="Object");

const USERNAME = `admin`; 
let usuario = prompt(`Ingresa tu usuario del sistema: `).toLocaleLowerCase()

console.log(`El usuario ingresado es: ${usuario}`);
console.log(`¿Ingreso las credenciales correctas? ${USERNAME === usuario}`);
console.log(USERNAME === usuario);



