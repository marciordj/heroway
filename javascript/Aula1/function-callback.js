function laser1 () {
    console.log('BEAM');
}


const laser2 = () => {
    console.log('BEAM2');
}



laser1()
laser2()

//------------------------------------------------------

function executador (fn1, fn2) {
    console.log('executador esta executando ...');

    if (Math.random() > 0.50) {
        fn1()
    } else {
        fn2()
    }
}

function pegarNumero10 () {
    console.log('10')
    return 10;
}

function pegarNumero20 () {
    console.log('20')
    return 20;
}



executador(pegarNumero10, pegarNumero20);

// exemplo pratico

const numbers = [1,2,3,4,5,6,7,8,9];


function filter(array, fn) {
    const result = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const shouldFilter = fn(element);
    }

    if ( shouldFilter === true ) {
        result.push(element)
    }

    return result;
}

function callBack () {
    if ( numbers > 5 ) {
        return true;
    } else {
        return false;
    }
}

debugger;
filter(numbers, callBack);
const filteredNumbers = filter(numbers, callBack);

console.log(filteredNumbers)

