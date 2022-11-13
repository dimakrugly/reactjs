//Array destructuring

//destructuring
const fib = [1,1,2,3,5,8,13];

const [a,b,c] = fib;
const [, , , , num] = fib;


console.log(a,b,c, num);


//multidimensional destructuring
const line = [ [17,12],[23,65]];

const [ [r, x],[s, m] ] = line;
console.log(s, x, r);


//default declaration

const people = ['Vova','Petya', 'triple'];

const [name1,name2,name3 = 'Filya'] = people;

console.log(name1,name2,name3)

const [t, ...other] = people;

console.log(t, other);


const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak',
}

const res = Object.entries(dict).
filter(([, value])=>value ==='squeak').
    map(([key])=> key).
    toString(' ');

console.log(res);


const shape = {
    type: 'segment',
    coordinates: {
        start: [10,15],
        end:[17,15]
    }
};

const {coordinates: {start:[startX,startY],end:[endX, endY]}} = shape;

console.log(startX, startY, endX,endY);

//could be use both arr and obj destr syntax in one expression

