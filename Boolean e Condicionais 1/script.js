// Boolean

// Existem dois valores booleanos False ou True.
 var possuiGraduacao = true;
 var possuiDoutorado = false;

// Condicionais if e Else

// Verificar se uma expressão é verdadeira com If. Caso contrário o Else será ativado.
// var possuiGraduacao = true;

// if(possuiGraduacao) {
//     console.log('Possui graduação');
// } else {
//     console.log('Não possui graduação');
// }
// Retorna Possui Graduação e nao executa o else

// O valor dentro dos parênteses sempre será avaliado em False ou True.
console.log('-------------------------');

// Condicionais Else if

// Se o if não for verdadeiro, ele testa o else if

// var possuiGraduacao = true;
// var possuiDoutorado = false;

// if(possuiDoutorado) {
//     console.log('Possui graduação e doutorado');
// } else if (possuiGraduacao) {
// console.log('Possui graduação, mas não possui doutorado');
// } else {
//     console.log('Não possui graduação');
// }
// Retorna Possui graduação, mas não possui doutorado
console.log('-------------------------');

// Truthy e Falsy

// Existem valores que retornam True e outros que retornam False quando verificados em uma expressão booleana.

// Falsy

if(false)
if(0) // ou - 0
if(NaN)
if(null)
if(undefined)
if(''); // ou ** ou ``
// Todo o resto é Truthy

// var nome = '10kg' + 10;

// if(nome) {
//     console.log(nome);
// } else {
//     console.log('Não é verdadeiro')
// }
console.log('-------------------------');

// Truthy

// if(true)
// if(1)
// if(' ')
// if('lucas')
// if(-5)
// if({});
('-------------------------');

// Operador Lógico de Negação !

// O operador !. nega uma operação booleana. Ou seja. !true é igual a false

// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!''); // false 
// Dica, você pode utilizar !! para verificar se uma expressão é truthy ou falsy
 
if(possuiGraduacao) {
    console.log('Não possui graduação');
}
('-------------------------');

// Operadores de comparação

// Vão sempre retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >=11; // false

// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 != 15; // true
10 != '10'; // false
10 !== '10'; true

var x = 'Gatos';
console.log(x !== 'gato');