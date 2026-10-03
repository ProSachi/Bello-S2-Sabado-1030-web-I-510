const listaAnimales = ["Gato", "Perro", "Zarigüeya", "Paloma", "Colibri", "Cuervos", "Loro"];

let section = document.querySelector("#section-principal");
let botonCarga = document.querySelector("#btn-Animales");
let btnAgregar = document.querySelector("#btn-agregar");
let btnEliminar = document.querySelector("#btn-eliminar");


btnAgregar.addEventListener('click', () => {
    console.log("Hola");
    let inputName = document.querySelector("#nameAnimal");
    let name = inputName.value;
    listaAnimales.unshift(name);
    inputName.value = "";
    imprimir()
});

botonCarga.addEventListener('click', () => {
    imprimir()
});

btnEliminar.addEventListener('click', () => {
    let inputName = document.querySelector("#nameAnimalEliminar");
    let listaAnimalesFiltrada = listaAnimales.filter(l => l !== inputName.value);
    section.innerHTML = "";
    listaAnimalesFiltrada.forEach((animal) => {
        const itemLi = document.createElement("p"); // 1. Creamos
        itemLi.textContent = animal; // Actualizamos
        section.appendChild(itemLi); // inyectamos
    })
});

function imprimir() {
    section.innerHTML = "";
    listaAnimales.forEach((animal) => {
        const itemLi = document.createElement("p"); // 1. Creamos
        itemLi.textContent = animal; // Actualizamos
        section.appendChild(itemLi); // inyectamos
    })
}



/* 
let nuevoarrelgo = listaAnimales.map(()=>{
    return 
})

listaAnimales.forEach(()=>{
    caches
}) */


