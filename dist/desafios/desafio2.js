"use strict";
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho || (Trabalho = {}));
const pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissão: Trabalho.Atriz
};
const pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissão: Trabalho.Padeiro
};
const pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissão: Trabalho.Atriz
};
const pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissão: Trabalho.Padeiro
};
