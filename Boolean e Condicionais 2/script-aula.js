// Operadores Lógicos &&

// && Compara se uma expressão E a outra é verdadeira


true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5) // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

// Se ambos os valores forem true, ele irá retornar o último valor verificado se algum valor for false ele irá retornar o mesmo e não irá continuar verificar os próximos

if((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
};
// Retorna FalsO, porque valor 0 é false
var condicional = (5 - 10) && (5 + 5);
if(condicional) {
    console.log('Verdadeiro',condicional);
} else {
    console.log('Falso');
};
// Retorna verdadeiro porque -5 mesmo sendo negativo e não sendo zero, é truthy
console.log('------------------------------');

// Operadores Lólogicos ||

// || Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true
// Retorna o primeiro valor true que acontecer

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2);
// Colocando o &&, ele retorna o último verdadeiro, truthy.
console.log(condicional2);
console.log('------------------------------');

// Switch

/* Com o Switch você pode verificar se uma variável é igual à diferentes valores utilizando o Case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave Break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira. */

var corFavorita = 'Preto';

switch (corFavorita) {
    case 'Preto':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para rosas.');
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
}