let user = {
    name: 'helder'
};

//Alterando  a propriedade de um objeto 
user.name =' outro nome 1';
user['name'] =' outro nome 2'
console.log(user.name);

const prop = 'name';
user[prop] = 'outro nome 3';
console.log(user.name);


//criando uma propriedade 
user.lastName = 'lima '
console.log(user);

//deletando uma propriedade 
delete user.name; 
console.log(user.name);
