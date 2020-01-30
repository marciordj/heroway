
function createCounter (initialValue) {
    
    let counterValue = initialValue;

    function add (x) {
        counterValue = counterValue + x;
    }

    function log () {
        console.log(counterValue);
        return counterValue;
    }

    return {
        value: counterValue,
        addPotato: add,
        log: log
    }
}

const counter = createCounter(10)
console.log(counter);
counter.add(20);
counter.log();