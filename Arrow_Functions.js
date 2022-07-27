// ARROW SYNTAX
// You can write a function like this:

const add1 = function add(a,b) {
    return a + b;
}
// You can write arrow functions like this:
const add2 = (a,b) => a + b;


//Remember this?
lista = [2,4,6,8,10];

// Normal function
lista.map(function(numero) {
    console.log(numero * 2);
})

// Arrow function
lista.map( (numero) => console.log(numero * 2) );

// Arrow functions don't need a name, the function keyword or curly braces.