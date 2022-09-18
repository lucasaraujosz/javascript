// 7 Tipos de Dados

/* Todos são primitivos exceto os objetos */

//var nome = 'Lucas'; // String

var idade = 20; //Number

var possuiFaculdade = true; // Boolean

var time; // undefined

var comida = null; // Null

var simbolo = Symbol() //Symbol

var novoObjeto= {} // Object

/* 
Typeof -> mostra tipo de dado que o valor atribuído é.

console.log(typeof nome,idade,possuiFaculdade,time,comida,simbolo,novoObjeto); */
// Primitivos são dados imutáveis
console.log('---------------------')

// String

/* Você pode somar uma string e assim concantenar as palavras. */

var nome = 'Lucas';
var sobreNome = 'Mendes';
var nomeCompleto = nome + ' ' + sobreNome;
//console.log(nomeCompleto);

/* Você pode somar números coms trings, o resultado final é sempre uma string. */

var gols = 1000;
var frase = 'Romário fez ' + gols +  ' gols';
//console.log(typeof frase);
console.log('---------------------')

// Aspas Duplas, Simples e Template String

'JavaScript é "Super" fácil';
"JavaScript é 'Super' fácil";
"JavaScript é \"Super\" fácil";
// "JavaScript é "Super" fácil"; // Inválido

// Não necessariamente precisamos atribuir valores a uma variável
console.log('---------------------')

// Template String

var golls = 1000;
//var frases1 = 'Romário fez ' + golls + ' gols';
var frases2 = `Romário fez ${gols} gols`; // Utilizando Template String

console.log(frases2);
