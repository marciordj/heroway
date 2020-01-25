//boa pratica usar aspas simples;

var string = ""

var array = [] //não preciso colocar nada caso queira usar para armazenar algo futuro;
// array.length ver tamanho do array;
// array.push colocar um dado novo no final do array;

var potato = [1,2,3,4,5];

// console.log(potato.length);

//objetos

function dispararTeia ( dificuldade ) {


    console.log('BEAM');

    var tiro = Math.random();
    // var tiro2 = Math.random() > 0.50 ? console.log('acertou') : console.log('errou');  //condicional ternario

    if (tiro > 0.50) {
        // console.log('acertou - dentro da função')
        return 'acerto';
    } else {
        // console.log('errou - dentro da função')
        return 'erro';
    }

}

// var acertouOuErrou = dispararTeia();

// console.log(acertouOuErrou);

var heroi = {
    nome: 'Peter Parker',
    alterEgo: 'Homem de Ferro',
    dispararLaser: dispararTeia, //se executar a função aqui, nao vai ser random, o que executar 1 vez vai executar sempre.
}


heroi.dispararLaser('easy');
heroi.dispararLaser('hard');



