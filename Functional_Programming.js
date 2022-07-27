// FUNCTIONAL VS OOP

// very object oriented.
const dog = {
    breed: 'Labrador',
    color: 'black',
    name: 'Buddy',
    newDog: function() {
        return "New dog from object: " + this.name + ", " + this.color + " " + this.breed;
    }
}
console.log(dog.newDog());

// Very functional, much good.
function doge(breed,color,name) {
    return "New dog from function: " + name + ", " + color + " " + breed;
}

console.log(doge("Labrador","black","Buddy"));



// EXAMPLE OF MAP FUNCTION

// Not really functional...
let numerot = [2,4,6,8,10];
function tuplaus() {
    for(let i=0; i<numerot.length; i++){
        console.log(numerot[i] * 2)
        
    }
}
tuplaus(); 
// prints 4, 8, 12, 16, 20

// Much more functional, much better.

let lista = [2,4,6,8,10];

lista.map(function(numero) {
     console.log(numero * 2);
})
// prints same as tuplaus()


// EXAMPLE OF REDUCE FUNCTION

let array = [10,20,30];

let total = array.reduce(function yhdistys(tulos, numero) {
    return tulos + numero;
});

console.log(total) //prints 60, since 10 + 20 + 30 = 60

// EXAMPLE OF FILTER FUNCTION

let numeroita = [1,5,-6,-2,13,-200,58];

let positiiviset = numeroita.filter(function(numero) {
    return numero > 0;
})
console.log(positiiviset) // Returns [1,5,13,58]
