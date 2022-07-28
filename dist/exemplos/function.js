"use strict";
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
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 = numero2);
}
function somarValoresNumericosEtratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQudrado(numero) {
    return numero * numero;
}
function divdirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosEtratar(1, 3, aoQudrado));
console.log(somarValoresNumericosEtratar(1, 3, divdirPorEleMesmo));
