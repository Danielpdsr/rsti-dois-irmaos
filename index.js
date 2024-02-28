/*var nome = prompt("Escreva seu nome");
var cor = prompt("Escreva sua cor favorita")

var Frase = "A cor favorita de " + nome + " é " + cor + ",";

console.log(Frase)*/

/*const Frase = prompt("Escreva uma frase");
const FraseMaiuscula = Frase.toUpperCase()

console.log(FraseMaiuscula)*/

/*const Frase = prompt("Escreva uma frase");
const novaFrase = frase.replaceAll("o","i")
console.log =(Frase.toUpperCase)
console.log(frase.FraseMaiuscula)
console.log(frase.length)

const listaDeCompras = ["abacate","Banana","Tomate"]
const segundoItem = listaDeCompras[2]// Tomate*/


//const listaDeCachorro = ["Viralata","Dalmata","Pitbull","pintcher","sabujo"]
//const numero = prompt("Digite um número de 0 a 4")
//console.log(listaDeCachorro[numero])

/*console,log(cachoorro[prompt("Digite um numero de 0 a 4")])*/


/*var array = ["a","b","c","d","e","f","g","h"];
//          [0,   1,  2,  3,  4,  5,  6,  7 ]
array.splice(3,3)
console.log(array)*/

/*var array = ["1","2","3","4","5","6"]
console.log(array.length)
console.log(array.push[7])
console.log(array.splice(3,2))
console.log(array.length)*/

/*function imprimirOlaMundo() {
    console.log("Ola Mundo!")
} */

/*function  imprimaNome(nome) {
    console.log(`Óla ${nome}`)
    
}
imprimaNome('Daniel')
imprimaNome('joao')
imprimaNome('nani')*/

/*const a = 1

function imprimeVariavel () {
    const b = 2
    console.log('variavel a', a)
    console.log('variavel b', b)
}
    imprimeVariavel()

    console.log('variavel a', a)
    console.log('variavel b', b)

    function calculaArea(altura, largura){
        const area = altura * largura
        return area
    }
    // atribui retorno á uma variavel
    const areaCalculada = calculaArea(2, 3)
// imprime retorno no console
    console.log (calculaArea(2,3)


    function somaNumeros(num1, num2){
        return = num1 + num2
        
    }
// soma de arrays
    var somaNumeros = resultadoDaSoma(5, 5)
    console.log (somaNumeros(5, 5))

    function recebeArray(arrayDeNumeros= []){
        return [(arrayDeNumeros.length)/2, arrayDeNumeros[0]/2];
    }
        console.log(recebeArray([1,2,3,4,5,6,7,8,9]))*/
    
     /*   function  imprimaNome(nome) {
            console.log(`Óla ${nome}`)
            
            var nome = prompt("Escreva seu nome");
            var cor = prompt("Escreva sua cor favorita")
            
            var Frase = "A cor favorita de " + nome + " é " + cor + ",";
            
            console.log(Frase)*/
        


  /* const professor = {
        nome: 'Vitor',
        idade: 27,
        email: 'Vitor@gmail.com',
        tarefas:['Dar aula', 'Responder dúvidas'],
        contarPiada: function() {
            console.log('E pa vê ou pa comê')
        }
    }
      console.log(professor.idade);
      console.log(professor["email"]);

        professor.nome = 'Daniel';

        console.log(professor.nome);
    */

 /*   const filme = {
    nome: 'abagaça',
    Diretor: 'Afonso Nunes',
    editorDeVideo: 'Tiago',
    anoDeLançamento: 2005,
    elenco: ['Ana', 'Paulo', 'Charles', 'Fabio'],
    assitiu: true,
    
    }


    console.log(filme.nome)
    console.log(filme.Diretor);
    console.log(filme.editorDeVideo);
    console.log(filme["anoDeLançamento"]);
    console.log(filme["elenco"]);*/
    
/*const perfil = {
    nome:"Daniel",
    idade: 34,
    generoMusical:"Sertanejo",
}
    console.log(`O nome da pessoa é ${perfil.nome},ela tem ${perfil.idade} anos e gosta muito de ${perfil.generoMusical}`)

 */

/*

const donoDoPet = {
    nome: "Vitor Hugo",
    pet: {
    nomeDoPet: "Wanda",
    raca: "Vira-lata",
    idade: 1

    }
}

console.log(donoDoPet.pet.nomeDoPet)

*/
/*const curso = {
    nome: "Noturno Frontend",
    linguagens:["JS", "CSS", "HTML"]
}

console.log(curso.linguagens[0])

    
*/


/*const professores = [
    {nomw: "Andrei", modulo: 1},
    {nome: "Vitor",  modulo: 2},
    {nome: "Mina", modulo: 3},
]

console.log(professores[1].nome)*/

/*const curso = {
    nome: "Frontend",
    linguagens: ["js", "css", "html"]

}

   console.log(curso.numeroEstudantes = 50)*/


/*// exercisio 4/* */

 /*   const filme = {
    nome: 'abagaça',
    Diretor: 'Afonso Nunes',
    editorDeVideo: 'Tiago',
    anoDeLançamento: 2005,
    elenco: ['Ana', 'Paulo', 'Charles', 'Fabio'],
    assitiu: true,


    }

   filme.personagens = ["personagem1", "personagem2", "personagem3", "personagem4"];

   console.log(filme.elenco[0] + " - " + filme.personagens[0]);
   
   console.log(filme.elenco[1] + " - " + filme.personagens[1]);

   console.log(filme.elenco[2] + " - " + filme.personagens[2]);

   console.log(filme.elenco[3] + " - " + filme.personagens[3]);
     
   filme.elenco[0] = "xuxa";
   console.log(filme.elenco[0]);
   console.log(filme);
*/

/*const usuario = {
    nome: 'prof',
    idade: 25,
    emai: 'prof@senacrs.com.br',
    cidade: 'São paulo'
}

const novoUsuario = {
    ...usuario,
    nome: 'João',
    idade: 28,
}

console.log(usuario.novoUsuario)

*/

// exercicio 4

 /* var pessoa ={
    nome: "Daniiel",
    idade: 30,
    generoMusical: "sertanejo",

  }
    function exercicio4(objetoPessoa, arrayComidas, objetoMelhorAmigo){
    var novoObjeto = {...objetoPessoa,comidasPreferidas: arrayComidas, melhorAmigo:objetoMelhorAmigo};

    console.log(`O nome da pessoa é ${novoObjeto.nome} e suas comidas preferidas são ${novoObjeto.
    comidasPreferidas[0]} , ${novoObjeto.
    comidasPreferidas[1]},  ${novoObjeto.
    comidasPreferidas[2]} , seu melhor amigo se chama ${novoObjeto.melhorAmigo.nome} e tem ${novoObjeto.melhorAmigo.idade} anos.`);
    

    }

    exercicio4(pessoa, ["arroz", "feijão", "carne"], {nome: "joão", idade:10});
*/
    
     
/*
         let condicao1 = true;

         if (condicao1){
            // Como o valor de condição e true.
            // o codigo desse bloco é executado
            console.log(`Entrei no if 1`);
         }
       

         let condicao2 = false

         if (condicao2){
            // Como o valor da condição é false,
            // o codigo desse bloco Não é executado

            console.log(`Entrei no if 2`)
         }

*/

        /* function numero (nun1, nun2){
         if(nun1 === nun2) {console.log("sucesso");}
         }
         numero(prompt("Digite nun 1"), prompt ("Digite nun 2"));

*/

/*
// exercicio 5

       function autoEscola(nome, idade){
        if( idade >= 18){
        return ` ${nome}, voce pode dirigir`;
         // return ´${nome}, voce pode dirigir`;
       }
    }
      console.log(autoEscola(prompt("Digite seu nome"), prompt("Digite sua idade")));

      */


      /*  let condicao = false

        if (condicao){
            console.log("Entrei no if")
        }else{
            // Como o valor da condição é false,
            // o código do bloco else será executado
            console.log("Entrei no else")
        }
*/


/*function comparaNumero(nun1,nun2){
   if(nun1 ===nun2){
    return `${nun1,nun2}, Os números são iguais`;
   }else{`, Os números não são iguais`;

   }
    
    }
console.log(comparaNumero(prompt("Digite um número"), prompt("Digite um número")));

*/

/*exemplo 
let condicao1 = false
let condicao2 = true

if (condicao1){
    console.log("Entrei no if 1!")

} else {
    // Como o valor da condicao1 é false,
    // o código do else será executado
    if (condicao2){
        // Como o valor da condicao2 é true,
        // executaremos esse codigo!
        console.log("Entrei no if 2!")
    }
}
*/


function comparaNumero(nun1,nun2){
   
    if(nun1 > nun2){
     return `, O primeiro número é maior que o segundo`;
    }
    if(nun1 < nun2){
        return `,O primeiro número é menor que o segundo`;
    } 
    else{
     return `Os números são iguais`
    }
     
     }
 console.log(comparaNumero(prompt("Digite um número"), prompt("Digite um número")));
 