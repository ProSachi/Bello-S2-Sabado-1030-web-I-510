let nombre = document.querySelector('#nombre');
let apellido = document.querySelector('#apellido');
let miformulario = document.querySelector('#miformulario');
let mensaje = document.querySelector('#mensaje');

miformulario.addEventListener('input', (evento) => {
    evento.preventDefault;
    let input = evento.target.value;
    let linea = evento.target;
    console.log(input);
    if (input.length < 3) {
        linea.style.borderColor = "red";
    } else {
        linea.style.borderColor = "green";
    }

})


