"use strict";
//função que recebe 2 valors do tipo number e tem que retornar algo do tipo number
function soma(a, b) {
    return a + b;
}
//função que não retorna nada, ai colocamos void
function Log(mensage) {
    console.log('Log', mensagem);
}
//spread operator
//função recebe inumeros valores
function somaValores(...values) {
    return values.reduce((prev, curr) => {
        return prev + curr;
    });
}
somaValores(1, 2); //3
somaValores(1, 2, 3); //6
//variável tipada que vira uma função e com a arraowfunction informa qual o tipo de valor esperado
let add;
add = function (a, b) {
    return a + b;
};
let add2;
add2 = function (a, b, c) {
    return a + b;
};
