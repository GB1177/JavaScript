// o que são arrays

//como declarar um array
/*let array = ["string", 1, true];
console.log(array); */

//pode guardarvarios tipos de dados
let array = ['string', 1, true, ['array1'],['array2'], ['array3'], ['array4']];
/*console.log(array);*/

// forEeach (itera um array)
//array.forEach(function(item, index){console.log(item, index)});

// push (add item ao final do array)
/*array.push('novo item');
console.log(array);*/

// pop (remove item do final do array)
/*array.pop();
console.log(array);*/

// shift (remove item do início o array)
/*array.shift();
console.log(array);*/

// unshift (add item ao início do array)
/*array.unshift('novo valor');
console.log(array);*/

// indexOf (retorna o índice de um valor)
/*console.log(array.indexOf(true));*/

// splice (remove ousubsitui um item pelo índice)
/*array.splice(0, 3);
console.log(array);*/

// slice (retorna uma parte de um array existente)
/*let novoArray = array.slice(0, 3);
console.log(novoArray);*/

//------------------------------------------------

// Objetos

let object = {string:'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno',}};
console.log(object.objectInterno);

/*var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);*/

var { string, boolean, objectInterno} = object;

console.log(string, boolean, objectInterno);