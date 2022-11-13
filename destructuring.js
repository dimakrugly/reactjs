//Destructuring

const person = {
    firstName: 'Peter',
    lastName: 'Smith',
    age: 27,
    role:'admin',
};
//
// const firstName = person.firstName;
// const lastName = person.lastName;

const {firstName, lastName} = person;

const showInfo = function () {
    console.log('firstName: ', firstName);
    console.log('================');
    console.log('lastName: ',lastName);
};

showInfo();

const person2 = {
    name: {
    first: 'Peter',
    last: 'Smith'
    },
    age: 27,
};

const {name: {first:Imie,last:Nazwisko}} = person2;
console.log(Imie,Nazwisko);


const {role = 'user'} = person;
const { permissions: {pole = 'user'} = {} } = person;
console.log(role);
console.log(pole);

function connect({
    host = 'localhost',
    port = 1892,
    user = 'guest'
                 }) {
    console.log('user:', user, ',', 'port:', port, ',', 'host:', host );
};

connect({});
connect({port: 1111});
connect({host:'deletedhost'});

const dict = {
    duck: 'quack',
    dog: 'woof',
    mouse: 'squeak',
}

const {duck, ...otherAnimals} = dict;

console.log(duck);
console.log(otherAnimals);

const {dog} = otherAnimals;
console.log(dog);


