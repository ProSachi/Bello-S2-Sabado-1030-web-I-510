const miFormulario = document.getElementById("registro");
const inputPass = document.getElementById("password");
console.log(miFormulario);
console.log(inputPass);
miFormulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const valorPassword = inputPass.value;
    if (valorPassword.length < 8) {
        inputPass.style.color = "red";
    } else if (valorPassword.length >= 8) {
        inputPass.style.color = "black";
    }
    let mensaje = document.createElement("p");
    mensaje.textContent = "La contraseña debe al menos 8 caracteres";
    miFormulario.appendChild(mensaje);
    console.log("Contraseña a validar: " + valorPassword);
});
