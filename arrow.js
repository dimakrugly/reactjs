//ecma 5

function square(x) {
    return x*x;
}

//ecma 6
//Arrow func

const sq = (x) => x*x;

console.log(sq(3));

const arr = ['1','3','2','4'];
const res = arr
    .map((el)=>parseInt(el))
    .filter((num)=> num%2)
    .reduce((max, value)=> Math.max(max,value), 0);



const res2 = arr
    .map(function (el){
        return parseInt(el);
    })
    .filter(function(num){
        return num%2;
    })
    .reduce(function (max, value){
        return  Math.max(max,value);
    },0);

console.log(res);
console.log(res2);


const greeter = {
    greet: function (name) {
        console.log('Hello', name);
    },
    greetAll: function (names) {
        names.forEach((name)=> {
            this.greet(name);
        });
    }
};

greeter.greetAll(['Vova','Kirk','Bart']);

function person() {

};

person.prototype.hi = function () {

};

//Arrow functions is a lite version of function
//You can not create prototype of arrow function
//Arrow function remembers logical 'this'
//Lightweight syntax