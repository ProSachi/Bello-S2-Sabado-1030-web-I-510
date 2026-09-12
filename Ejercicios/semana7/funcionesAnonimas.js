//función regular
/* function sumar(a, b) {
    return a + b;
}
 */
//función anónima
const sumar = function (a, b) {
    return a + b;
};

let resultado = sumar(6, 7);
console.log(resultado);

//función Flecha
//Paso2
/* const restar = (a, b){
    return a + b;
} */

//Paso 3 agregar la flecha
/* const restar = (a, b) => {
    return a - b;
} */

const restar = (a, b) => a - b;

function saludar(nombre) {
    console.log(nombre);
}

//anonima
const saludar = function (nombre) {
    console.log(nombre);
}

//flecha
const saludar2 = (nombre) => {
    console.log(nombre);
}
// regular
function validarEdad(edad) {
    if (edad => 18) {
        return true
    } else {
        return false
    }
}
//Función anonima -> asignar a una const y eliminar nombre
const validar = function (edad) {
    if (edad => 18) {
        return true
    } else {
        return false
    }
}

//función flecha
const validar2 = (edad) => {
    if (edad => 18) {
        return true
    } else {
        return false
    }
}
// ternario
//condicion ? valorSiEsVerdadero : valorSiEsFalso
const validar3 = edad => (edad=>18) ? true : false