// Elaborar un programa sencillo que reciba una frase de cualquier longitud y que el
// programa devuelva la cantidad de palabras que existe en dicha frase.
// 

function contadorP(frase){

    frase = frase.trim();
    const palabras = frase.split(" ");
    return palabras.length;
}

const frase = "Programando en JavaScript con el ejercicio 1";

const resultado = contadorP(frase);
console.log(resultado);