let edad;
let id;
let entravip;
let entragratis
let entrar;

edad = parseInt(prompt("Indicame tu edad en años: \n"));
id = prompt("Dime si tienes identificación. si o no \n");

console.log(typeof(edad));
console.log(typeof(id));

entrar = edad >=18 && id === "si";
console.log(`Puede entrar ${entrar}`);


entravip = prompt("Dime si estas en la lista VIP. si o no \n");

console.log(typeof(entravip));

entragratis = edad >25 || entravip === "si";
console.log(`Puede entrar gratis ${entragratis}`);
