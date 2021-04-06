const myNumber = 12.4832

//transforma numero para string 
const numberAsString = myNumber.toString();
console.log('Numero transformando em string: ', typeof numberAsString);

//retorna numero com um numero de casas decimais 
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNumero com duas casas decimais ', fixedTwoDecimals);

// Transforma uma string em float 
console.log('\n String parseada para float: ', parseFloat('13.99'));

// Transforma uma string em int
console.log('\n String  parseada para int: ', parseInt('13.90'));