// type input = number | string;

// function somarValores(input1: input,  input2: input): input {
//     if (typeof input1 === "string" || typeof input2 === 'string') {
//         return input1.toString() + input2.toString(); 
//     } else {
//     return input1 + input2;
//     }
// }

// console.log(somarValores(1, 5));
// console.log(somarValores('ola' , ', tudo bem?'));
// console.log(somarValores('que dia é hoje? ',6));

function printaValoresNumericos(numero1: number, numero2: number): void {
    console.log(numero1 = numero2)
}

function somarValoresNumericosEtratar(numero1: number, numero2: number, callback: (numero: number) => number): number {
    let resultado =  numero1 + numero2;
    return callback(resultado);
}

function aoQudrado(numero: number): number {
    return numero * numero;
}

function divdirPorEleMesmo(numero: number): number {
    return numero / numero
}

console.log(somarValoresNumericosEtratar(1, 3, aoQudrado))
console.log(somarValoresNumericosEtratar(1, 3, divdirPorEleMesmo))