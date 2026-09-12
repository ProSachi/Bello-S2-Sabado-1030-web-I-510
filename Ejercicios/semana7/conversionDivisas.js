/* Crear un sistema de conversión de divisas que le pida al usuario el tipo de conversión y la monada a convertir.
Construya dos funciones que convierta de peso a dolar y la otra de dolar a peso.
Una tercera funcion que reciba el valor y la funcions de conversion */

import{convertirDolarAPeso, convertirPesoADolar, conversion} from './funciones.js'

const VALORDIVISA = 3124;
let valorConvertir = parseFloat(prompt("Ingresa la cantidad de pesos: "));

conversion(convertirPesoADolar, valorConvertir, VALORDIVISA);




