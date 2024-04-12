// Elaborar un programa que permita generar el factorial de un numero N. Si el
// programa recibe 0 o 1, entonces devuelve el factorial de 1. Nota: Factorial es el
// producto de todos los numero entero positivos desde 1 hasta N.

function factorial(numero){
    if(numero === 0 || numero === 1){
        return 1;
    }
    let resultado = 1;
    for(let i = 1; i <= numero; i++){
        resultado *= i;
    }
    return resultado;
}

const numero = 3;
const resultado = factorial(numero);
console.log(resultado);