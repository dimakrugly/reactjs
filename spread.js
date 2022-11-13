const arr = [1,2,3];
const arr2 = [0,9,6,1,1,2,3];

const res = Math.max.apply(Math, arr);
console.log(res);


const res2 = Math.max(...arr, ...arr2, 91);
console.log(res2)

const shallowCopy = [...arr,...arr2, 21, 43, 'kogut'];
console.log(shallowCopy);
