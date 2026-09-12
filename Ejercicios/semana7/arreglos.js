/* let nombre;
const estudiantes = ["Julian", "Camilo", "Daniela", "Alejandra"];        //          0           1       2           3
console.log(estudiantes.sort());
console.log(estudiantes[2]);
const numerosString = ["4", "a", "2b", "a3", "5", "1"];
const numerosInt = [4, 2, 3, 5, 1];
console.log(numerosString.sort());
console.log(numerosInt.sort());

numerosString.push("7");
console.log(numerosString);
numerosString.pop();
console.log(numerosString);
console.log(numerosString); 
 for (let index = 0; index < numerosString.length; index += 2) {
    console.log(numerosString[index]);
}
 numerosString.splice(2, 1)
console.log(numerosString);  

numerosString.forEach(function(numero, indice) {
    console.log(`El elemento ${numero} está en el índice ${indice}`);
});
 */

const numeros = [4, 2, 3, 5, 1];

let numerosCubicos = numeros.map(function(numero){
        return numero * numero;
})

console.log(numeros);
console.log(numerosCubicos);

const partesOficina = ['silla', 'escritorio', 'portatil', 'cocedora', 'mouse'];

let partesOficinaAzul = partesOficina.map(function(parte){
    return parte + " Azul";
});
console.log(partesOficinaAzul);










