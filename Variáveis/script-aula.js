// Variáveis
/* Responsável por guardar dados na memória. Inicia com palavra var, let ou const*/

// Sintaxe 
/* Palavra chave VAR seguida do nome, sinal de igual e o valor. */
var nome = 'Lucas';
var idade = 20;
var possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade);
console.log('---------------------------')

//Evitam repetições
  /*DRY(Don't repeat yourself) */

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
console.log(totalPreco);
console.log('---------------------------')

// Vírgula
/* Utilizei a virgula para criar mais de uma variável, sem repetir a palavra var */

var sobreNome= 'Mendes',
    cidade = 'São Paulo'
console.log(sobreNome,cidade);
console.log('---------------------------')

// Sem valor
/* Pode declarar ela e não atribuir valor inicialmente.*/

var semDefinir;
console.log(semDefinir);
console.log('---------------------------')

// Nome

/* • Os nomes podem iniciar com $, _. Ou letras.
     Podem conter números mas não iniciar com eles

   • Case sensitive
   nome é diferente de Nome
   
   • Não utilizar palavras reservadas
   https://facebook.com
   
   • Camel case
   É comum nomearmos assim: abrirModal*/

   // Nome - Exemplo

   // Inválido
   //var %nome;
   //var function;
   //var 1possuiFaculdade;

   // Válido
   var $selecionar;
   var _nome;
   var possuiFaculdadeNoExterior;
   console.log('---------------------------')

   // Declarar
   /* Erro ao tentar utilizar uma variável que não foi declarada.*/

   //console.log(data);
   // retorno nome is not defined
   console.log('---------------------------')

   // Hoisting

   /* São movidas para cima do código, porém o valor atribuído não é movido. */
 
   // Retorno undefined
   //console.log(comida);
   //var comida = 'Pizza';
   
   // Retornar Designer
   var profissao = 'Designer';
   console.log(profissao);
   console.log('---------------------------')

   // Mudar o valor atribuído
   /* É possível mudar os valores atribuídos a variáveis declaradas com VAR e LET. Porém não é possível modificar das declaradas com CONST*/

   var time = 'Vasco';
   console.log(time);
   // VAR -> Pode ser redeclarado o valor.
   time = 'Flamengo';
   console.log(time)

   let valor = 50;
   //let valor = 25; LET -> não pode ser redeclarado o valor.
   console.log(valor);
   // Retorna um erro

   const nomeSobrenome = true;
  // nomeSobrenome = false;     CONST -> não pode ser redeclarada
   console.log(nomeSobrenome);
   // Retorna um erro 
  