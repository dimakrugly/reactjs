// ecma 5

var a = 5;

//ecma 6

let b = 1;
const pi = 3.14;

const names = ['Peter','Bob'];

names.push('Jenny');

console.log(names);


const person = {
    name: 'Joe',
    age: 25,
}

person.name = 'Bob';

console.log(person);

if(true) {
    let a = 1;
    console.log(a)
}

console.log(a);

for (let i = 0; i < 3; i++){
    setTimeout(function (){
        console.log(i);
    }, i*100)
}