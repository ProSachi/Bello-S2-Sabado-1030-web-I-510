/* Juego de adivinar el numero */
let intentos = 3;
let condition = true;
const ALEATORIO = Math.floor(Math.random() * 10);
console.log(ALEATORIO);

do {
    let numero = parseInt(prompt("¿Cuál crees que es el numero de 1 a 10: "));

    if (ALEATORIO === numero) {
        condition = false
    } else {
        intentos--;
        if (intentos <= 0) {
            condition = false
        }
    }

    // la condición cambia cuando se adivine el numero o se agoten lo intentos
} while (condition);
