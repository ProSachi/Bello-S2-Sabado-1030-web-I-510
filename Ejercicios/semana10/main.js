/*  let lista1 = document.querySelector('#primera a')
let lista2 = document.querySelector('ul li:nth-child(2)')
let lista3 = document.querySelector('ul li:nth-child(3)')
let listali = document.querySelectorAll('ul li')
let ulpadre = document.querySelector('ul') */
/* 
listali[4].textContent ='Modificado'
lista1.textContent = 'Fin'
lista1.setAttribute('href', '#fin')
 lista1.innerHTML='<a href="#fin">Fin</a>'  

console.log(ulpadre);
ulpadre.setAttribute('class', 'cambio') */

//remover
/* ulpadre.classList.remove('lista')

ulpadre.classList.add('lista') */
/* 
ulpadre.classList.toggle('cambio') */

//capturar
let dani = document.querySelector('#contenedor');
//Crear el elemento
const nuevoElemento = document.createElement('p');
//modifique el contenido de ese elemento
nuevoElemento.textContent = 'Panela';
nuevoElemento.classList.add('pnuevas')
// agregarlo dentro del padre
dani.appendChild(nuevoElemento);

//Crear el elemento
const nuevoElemento2 = document.createElement('p');
//modifique el contenido de ese elemento
nuevoElemento2.textContent = 'Arroz';
nuevoElemento2.classList.add('pnuevas')
// agregarlo dentro del padre
dani.appendChild(nuevoElemento2);

let paulina = document.querySelector('.btn-enviar')

paulina.addEventListener("click", () => {
    console.log("Haz hecho click en paulina");
})

let div = document.querySelector('.divcontenedor');

div.addEventListener("mouseenter", () => {
    console.log("Pasaste por div");
})


