// Elaborar un procesos que permita calcular el IMC (Indice de Masa Corporal), el
// programa recibira como parametros el peso y altura de la persona. Nota: el IMC se
// calcula mediante peso / (altura * altura).
// 

function imc (peso, altura){
    const imc = peso / (altura * altura);
    return imc;
}

const peso = 45; // el peso lo ponemos en kilogramos 
const altura = 1.59; // la altura la ponemos en metros

const resultado = imc(peso, altura);
console.log(resultado.toFixed(2));