import React from 'react';

function ToDoList () {
    const riscadoUm = React.useState(false);

    const deveRiscarItemUm = riscadoUm[0];
    const atualizarItemUm = riscadoUm[1];

    function ToogleItemUm () {
        if (deveRiscarItemUm === true) {
            atualizarItemUm(false);
        } else {
            atualizarItemUm(true);
        }
    }

    return (
        <ul>
            <li onClick={() => ToogleItemUm()} style = { {textDecoration: 'deveRiscarItemUm'} } >Estudar para Heroway</li>
            <li>Mercado</li>
            <li>Estudar ingles</li>
        </ul>
    );
}



export default ToDoList;
