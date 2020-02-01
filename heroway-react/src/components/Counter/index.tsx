import React from 'react';

function Counter () {
    const ReactUseState = React.useState(0); //tem na documentação
    const counter = ReactUseState[0];
    const setCounter = ReactUseState[1];

    function add() {
        setCounter(counter + 1);
    }

    function sub() {
        setCounter(counter - 1);
    }

    console.log('renderizou')

    return (
        <div>
            <button onClick = { () => sub()}>-</button>
            <div>{counter}</div>
            <button onClick = { () => add()}>+</button>
        </div>
    );
}


export default Counter;