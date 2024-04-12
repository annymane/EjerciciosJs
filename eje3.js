// Elaborar un programa que permita recibir una palabra o una frase y que devuelva si
// es palindromo o no. Nota: Palindromo es una palabra o frase que se lee igual de
// izquiera a derecha que de derecha a izquierda.

function palindromo(frase){
    frase = frase.toLowerCase();
    frase = frase.replace(/ /g, "");
    const fraseInvertida = frase.split("").reverse().join("");
    return frase === fraseInvertida;
}

const frase = "Seres Somos Seres";
//solo con booleanos
const resultado = palindromo(frase);
console.log(resultado);
//con un mensaje
if(resultado){
    console.log("La frase es palindromo");}else{
    console.log("La frase no es palindromo");
}