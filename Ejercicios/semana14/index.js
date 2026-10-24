const URLBASE = 'https://6adcddc2fa5e73d4ab2dc4b8.mockapi.io/api/v1';

async function consultarGato() {
    try {
        const respuesta = await fetch(`${URLBASE}/gato`);
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error('Hubo un problema:', error.message);
    }
}


let section = document.querySelector('#container');
let btncargar = document.querySelector('#btncargar');
let resultadosContainer = document.createElement('div');
resultadosContainer.classList.add('gatos');
section.appendChild(resultadosContainer);

btncargar.addEventListener('click', async () => {
    let resultados = await consultarGato();
    resultadosContainer.replaceChildren();

    if (!Array.isArray(resultados)) {
        return;
    }

    resultados.forEach(gato => {
        const tarjeta = document.createElement('article');
        tarjeta.classList.add('tarjeta-gato');
        tarjeta.style.setProperty('--color-gato', gato.color || '#dddddd');

        const nombre = document.createElement('h3');
        nombre.textContent = gato.name;

        const raza = document.createElement('img');
        raza.src = `${gato.avatar}`;

        const ubicacion = document.createElement('p');
        ubicacion.textContent = `Ubicación: ${gato.ubicacion}`;

        const fecha = document.createElement('p');
        const fechaFormateada = new Date(gato.fecha).toLocaleDateString('es-CO');
        fecha.textContent = `Fecha: ${fechaFormateada}`;

        const descripcion = document.createElement('p');
        descripcion.textContent = gato.descripcion;

        const id = document.createElement('small');
        id.textContent = `ID: ${gato.id}`;

        tarjeta.append(nombre, raza, ubicacion, fecha, descripcion, id);
        resultadosContainer.appendChild(tarjeta);
    });
});



/* 
async function consultarUser() {
    try {
    const respuesta = await fetch(`${URLBASE}/users`);
    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error('Hubo un problema:', error.message);
  }
} */
