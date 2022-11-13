//Spread operator for objects

const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin',
};

const opts = {
    user: 'John',
    password: 'Shenima',
};

const port = 8080;
const res = {
    ...defaults,
    ...opts,
    port,
    connect(){}
};

console.log(res);
