

/* for (let index = 0; index < FILA.length; index++) {
    console.log(FILA[index]);
}

FILA.forEach(f => {
    console.log(f);
}); */
function completarNombre(primerNombre) {
    let apellido = prompt(`Ingresa el apellido de ${primerNombre}: `);
    return primerNombre + " " + apellido;
}
const FILA = ["Michel", "Samuel", "Andrey", "Jose"];
const FILA2 = ["Alejandra", "Paulina", "Sebastian"];

function modificar(FILA) {

    const FILAMODIFICADA = FILA.map(function (nombre) {
        return completarNombre(nombre);
    });

    FILAMODIFICADA.forEach(element => {
        console.log(element);
        return FILAMODIFICADA;
    })
}

/* FILAMODIFICADA = ["Michel GOnzalez", "Samuel Pulgarin", "Andrey Hernandez", "Jose Alzate"]; */

const recibido1 = modificar(FILA)
const recibido2 = modificar(FILA2)









