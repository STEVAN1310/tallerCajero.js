const prompt = require('prompt-sync')();
let nombre = prompt("¿Cuál es tu nombre? ");
console.log("Hola, " + nombre + "!");

 let activo = true;
    while (activo){
        let numero1 = Number(prompt("Ingresa el primer número: "));
let operacion = prompt("Ingresa la operación (+, -, *, /): ");
let numero2 = Number(prompt("Ingresa el segundo número: "));

let resultado;
if (operacion === "+") {
    resultado = numero1 + numero2;
} else if (operacion === "-") {
    resultado = numero1 - numero2;
}else if (operacion === "*") {
    resultado = numero1 * numero2;
}else if (operacion === "/") {
    if (numero2 === 0) {
        console.log("Error: No se puede dividir entre cero.");
    } else {
        resultado = numero1 / numero2;
    }
}  else {
        resultado = "Operación no válida.";        
    }
    console.log("El resultado de la operación es: " + resultado);

    let continuar = prompt("¿Quieres realizar otra operación? (si/no): ");
    if (continuar === "no") {
    activo = false;
}
console.log("¡Gracias por usar la calculadora!");
    }
