const vehiculosClasicos = [
    "Ford Mustang Shelby GT500 1967",
    "Chevrolet Corvette Sting Ray 1963",
    "Porsche 911 Carrera RS 1973",
    "Aston Martin DB5 1964",
    "Jaguar E-Type 1961",
    "Mercedes-Benz 300SL Gullwing 1954",
    "Ferrari 250 GTO 1962",
    "Lamborghini Miura 1966",
    "Shelby Cobra 427 1965",
    "Chevrolet Camaro Z28 1969"
];

const boton = document.getElementById("btnMostrar");
const contenedor = document.getElementById("contenedorVehiculos");

boton.addEventListener("click", () => {
    // Limpia el contenedor para evitar duplicados en clics sucesivos
    contenedor.innerHTML = "";
    vehiculosClasicos.forEach(vehiculo => {
        const item = document.createElement("li");
        item.textContent = vehiculo;
        contenedor.appendChild(item);
    });
});

