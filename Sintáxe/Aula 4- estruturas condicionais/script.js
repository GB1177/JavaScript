/*
var jogador1 = 0;
var jogador2 = 0;
var placar;

// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores sâo válidos!') :console.log('Jogadores Inválidos!');

// usando if

    if (jogador1 > 0 && jogador2 == 0) {
        console.log('jogador 1 marcou ponto!');
        placar = jogador1 > jogador2
// usando else if
    } else if (jogador2 > 0 && jogador1 == 0)
    {
        console.log('jogador 2 marcou ponto!')
        placar = jogador2 > jogador1
    }
// usando else
    else {
        console.log('ninguém marcou ponto!')
    }

    switch (placar) {
        case placar = jogador1 > jogador2:
            console.log('jogador 1 ganhou!');
            break;
        case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou!');
            break;
        default:
            console.log('Ninguém ganhou!')
   }
*/

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',}

// for (estrutura de repetição até que a condiçao seja falsa.)

/*for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}*/

// for/in (funciona como umarepetição a partir de uma propriedade)

/*for (let i in array){
    console.log(i);
}

// com object
for (i in object) {
    console.log(i);
}*/

//for/of (funciona como uma repetição a partir de um valor.)

/*for (i of array) {
    console.log(i);
}

for (i of object.propriedade1){
    console.log(i)
}*/

// while (executa uma instrução "enquanto" determinada condição for verdadeira, a verificação é feita antes da execução.)

var a = 0;
while (a < 10){
    a++;
    console.log(a);
}


// do/while (executa um instrução "até que" determinada condiçãao seja falsa, a verificação é feita depois da execução.)

do {
    a++;
    console.log(a);
} while (a < 10);