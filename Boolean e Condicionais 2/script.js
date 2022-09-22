// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual', ou 'É menor'.
var idade1 = 20;
var idade2 = 15;

if(idade1 > idade2) {
 console.log('É maior');
} else if (idade1 === idade2) {
   console.log('É igual');
} else {
    console.log('É menor');
};
console.log('------------------------------');

// Qual o valor é retornado na seguinte expressão
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// retorna 3 e é Truthy
console.log('------------------------------');


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Lucas';
var idade = 20;
var possuiDoutorado = false;
var dinheiroNaConta = 0;

console.log(!!nome,!!idade,!!possuiDoutorado,!!dinheiroNaConta);
console.log('------------------------------');

// Compare o total de habitantes do Brasil com China (valor em milhões)

var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil tem mais habitantes');
} else {
    console.log('Brasil tem menos habitantes');
};
console.log('------------------------------');

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 - 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Faso')
};
console.log('------------------------------');


// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 - 2)) {
    console.log('Gato' && 'Cavalo');
} else {
    console.log('Falso')
}