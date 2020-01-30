const input = document.getElementById('input');
const button = document.getElementById('button');
const number = document.getElementById('number');
const result = document.getElementById('result');
const sumNumber = document.getElementById('sumNumber');

input.addEventListener('keypress', (event) => {
  console.log(input.value);
});


button.addEventListener('click', () => {
  const inputValue = Number(input.value);
  const sumNumberValue = Number(sumNumber.innerText);

  if ( Number.isNaN(inputValue) === true) {
    result.innerText = '#ERROR';
    result.style.color = 'red';
  } else {
    number.innerText = inputValue;
    result.innerText = inputValue + sumNumberValue;
  }
  
});