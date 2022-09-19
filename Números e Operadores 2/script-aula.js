// A ordem importa

// Comeca por múltiplicação e divisão, depois por soma e subtração

// var total1 = 20 + 5 * 2; // 30
// var total2 = (20 + 5) * 2; // 50
// var total3 = 20 / 2 * 5; // 50
// var total4 = 10 + 10 * 2 + 20 / 2 // 40
// // Parênteses para priorizar uma expressão
// console.log(total4);

console.log('-----------------------');

// Operadores Aritméticos Unários

var incremento = 5;
console.log(incremento++); //5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); //6
console.log(incremento2);; //6

var decremento = 4;
console.log(decremento--);
console.log(decremento);
// Mesma coisa para o decremento ==x

// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+ frase; // NaN
- frase; // NaN

var idade = '20';
+ idade; // 20 (número)
- idade; // -20 (número)
console.log(+idade + 0); // 25

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// O - antes torna o número negativo