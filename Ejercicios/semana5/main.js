import { sumar, dato, restar, multiplicar, dividir } from './funciones.js'

let resultado;
let condition = false;
let contador = 0;

do {

    condition = menu();
    contador = contador + 1;
    if (contador >= 3) {
        condition = false;
        alert("Gracias por utilizar la calculadora en su versión free....\nPara más intentos adquiera la versión premiun.\nSaliendo del sistema.");
    }
    console.log(` Vamos en el intento ${contador}`);
} while (condition);


function menu() {
    let opcion = parseInt(prompt("Bienvenido a la calculadora. Seleccione la operación deseada: \n 1. Suma \n 2. Resta \n 3. Multiplicación \n 4. división \n 5. Salir"));

    switch (opcion) {
        case 1:
            sumar(dato(), dato());
            return true;
            break;
        case 2:
            restar(dato(), dato());
            return true;
            break;
        case 3:
            multiplicar(dato(), dato());
            return true;
            break;
        case 4:
            dividir(dato(), dato());
            return true;
            break;
        case 5:
            console.log("Salir");
            alert("Gracias por utilizar la calculadora....\nSaliendo del sistema.");
            return false;
            break;
        default:
            console.log("Operación Invalida");
    }

}


