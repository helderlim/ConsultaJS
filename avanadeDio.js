//retorna o tamanho de uma string 
const textSize = 'Texto'.length;
console.log(`quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador 
const splittedText = 'Texto'.split('x');
console.log('\n Array com as posiçoes sepradas pelo delimitador: ', splittedText);

//Busca um valor e substitui por outro 
const replaceText = 'Texto'.replace('Text', 'txeT');
console.log('\n Substituição de valor: ', replaceText);

//Retorna a "Fatia" de um valor 
const lastChar = 'Texto'.slice(-1)
console.log('\n Ultima letra de uma string: ', lastChar);

const allWoutLastChar = 'Texto'.slice(0, -1);
console.log('\n valor da string da primeria letra menos a ultima ', allWoutLastChar);

const secondToEnd = 'Texto'.slice(1)
console.log('\n valor da string da segunda letra ate a ultima ', secondToEnd);

// retorna o N° de caracteres a partir da ultima posição 
const twoCharsBeforeFirstPos = 'Texto'.substr(0,2);
console.log('\n As duas letras primeiras letras são: ', twoCharsBeforeFirstPos);