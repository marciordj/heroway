document.addEventListener('DOMContentLoaded', () => {
    
    const regularFunctionBtn = document.getElementById('regularFunctionBtn');
    const arrowrFunctionBtn = document.getElementById('arrowFunctionBtn');

    console.log(regularFunctionBtn);
    console.log(arrowFunctionBtn);

    regularFunctionBtn.addEventListener('click', testeAlert);



    function testeAlert () {
        alert('Clicou');
    }

})



