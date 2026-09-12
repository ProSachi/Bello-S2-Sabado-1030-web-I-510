export function convertirDolarAPeso(VALORDIVISA, valor) {
    let pesos = valor * VALORDIVISA;
    return pesos;
}

export function convertirPesoADolar(VALORDIVISA, valor) {
    let dolar = valor / VALORDIVISA;
    return dolar;
}

export function conversion(funcion, valorConvertir, VALORDIVISA) {
    let resultado = funcion(VALORDIVISA, valorConvertir)
    console.log(resultado);
}