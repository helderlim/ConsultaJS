const user ={
    name: 'helder',
    lasName: 'lima'
}

// Recuperar as chaves do objeto 
console.log('propriedades do objeto user: ', Object.keys(user));

// recupera valores das chaves do objeto 
console.log('\n valores das propriedades do objeto user: ', Object.values(user));

// Mergear propriedades de objetos 
Object.assign(user, {fullName: 'helder lima '});

console.log('\n adiciona a propriedade fullname no objeto user; ', user);
console.log('\n retorna um novo objeto mergeando dois ou mais objetos ', Object.assign({}, user, {age: 26}));

//previne todas as alterações em um objeto 
const newObj = { foo: 'bar'}
Object.freeze(newObj);

newObj.foo = 'changes '
delete newObj.foo;
newObj.bar = 'foo';

console.log('\n Variavel newObj apos as alteraçoes: ', newObj);

// permite apenas a alteraação de propriedades existentes em um objeto 
const person = { name: 'helder'}
Object.seal(person);

person.nome = 'helder lima ';
delete person.name;
person.age = 26;

console.log('\n variavel  person apos as alterações ', person);