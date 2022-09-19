// Números

// var idade = 20;
// var gols = 1000;
// var pi = 3.14; // ponto para decimal
// var exp = 2e10 // 20000000000
// // Precisão para até 15 números
// console.log(exp);

console.log('-----------------------');

// Operadores Aritméticos

// var soma = 100 + 50; //150
// var subtracao = 100 - 50 // 50
// var multiplicacao = 100 * 2; // 200
// var divisao = 100 / 2; // 200
// var expoente = 2 ** 4; // 16 -> 2 x 2 x 2 x 2: 16
// var modulo = 14 % 5; // 4

// Lembrando que a soma + em Strings serve para concatenar
//console.log(modulo);
console.log('-----------------------');

// Operadores Aritméticos (Strings)

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; //NoN (Not a Number)
// É possível verificar se uma variável é NoN ou não com a função isNaN()

// NaN = Not a Number

var numero = 80;
var unidade ='kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
console.log(typeof peso);
