const pacientesSalaEspera = ["Carlos", "Ana", "Luis"];

pacientesSalaEspera.unshift("Sofia");

console.log("Paciente llamado por el medico: " + pacientesSalaEspera[0]);

let pacienteAtendido = pacientesSalaEspera.shift();

console.log("Ultimo paciente atendido: "+pacienteAtendido);

pacientesSalaEspera.forEach(element => {
    console.log("Pacientes en espera " + element);
});


