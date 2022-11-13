//objects

const x = 10;
const y = 30;

//ecma 5
const point = {
    x: x,
    y: y,
    draw: function () {

    }
}

// ecma 6
const secPoint = {
    x,
    y,
    draw(ctx='HOW'){
        console.log(ctx)
    }
}

// console.log(point,secPoint);


const prefix = '_blah_';

const data = {
    [prefix+'name']:'Bob',
    [prefix+'age']:29,
}

// console.log(data)


//===========================================================================================



const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin',
};

const opts = {
    user: 'John',
    password: 'Shenima',
};



const res = Object.assign({}, defaults, opts);
// console.log(res, defaults);

//============================================
const person = {
    name: 'Bob',
    friends: ['Mark','Jakub']
};

const shallowCopy = Object.assign({},person);

person.friends.push('PAM3AH - neTYX');
console.log(shallowCopy);


