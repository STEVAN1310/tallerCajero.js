const prompt = require('prompt-sync')();
function pedirNumero(mensaje) {
    return Number(prompt(mensaje));
}

function calcular(numero1, operacion, numero2) {
 if (operacion === "+") {
return numero1 + numero2;
 } else if (operacion === "-") {
return numero1 - numero2;
 } else if (operacion === "*") {
return numero1 * numero2;
 } else if (operacion === "/") {
if (numero2 === 0) {
return "No se puede dividir entre 0";
 }
return numero1 / numero2;
 } else {
return "Operación no válida";
 }
}

function mostrarResultado(resultado) {
    console.log("El resultado de la operación es: " + resultado);
}

function atenderOperacion() {
    let numero1 = pedirNumero("Ingresa el primer número: ");
    let operacion = prompt("Ingresa la operación (+, -, *, /): ");
    let numero2 = pedirNumero("Ingresa el segundo número: ");
    let resultado = calcular(numero1, operacion, numero2);
    mostrarResultado(resultado);
}

let activo = true;
while (activo) {
    atenderOperacion();
    let continuar = prompt("¿Quieres realizar otra operación? (si/no): ");
    if (continuar === "no") {
        activo = false;
    }
}
console.log("¡Gracias por usar la calculadora!");