const miArray = ['manzana', 'banana', 'naranja'];

for (const paco of miArray) {
  console.log(`La fruta es: ${paco}`);
}

for (let i = 0; i < miArray.length; i++) {
  const element = miArray[i];
} 




/* let vidas = 3;
let obstaculo = "no";
while (vidas > 0) {
  console.log(`¡Tienes ${vidas} vidas!`);
  obstaculo = prompt("Ha caido el personaje en un hueco: si o no").toLocaleLowerCase();
  if (obstaculo === "si") {
    vidas--;
  }
}

console.log("Game Over");

while (condition) {
//pregunta y ejecuta
}
do {
    //Entra y luego pregunta
} while (condition); */


/* let contrasena;

do { 
  // Este bloque se ejecuta SIEMPRE al menos una vez
  contrasena = prompt('Introduce tu contraseña:'); 
} while (contrasena !== '12345'); // La condición se revisa DESPUÉS

console.log('¡Bienvenido!'); */
