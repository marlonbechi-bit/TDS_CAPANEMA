let temDinheiro = true;
let estaChovendo = false;
let carroEstaNaGaragem = true;

let logicaAnd = "#AND voçê vai ao cinema?";
logicaAnd += temDinheiro && estaChovendo;
console.log(logicaAnd); // false

let logicaOr = "#OR Você vai ao cinema?";
logicaOr += estaChovendo || carroEstaNaGaragem;
console.log(logicaOr); // true