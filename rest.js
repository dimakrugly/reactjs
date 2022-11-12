//rest parameter


//ecma 5
max(1,3);

function max() {
    //pseudo-array
    var numbers = Array.prototype.slice.call(arguments);
}

//ecma 6

function maxNew (...numbers){
    console.log(numbers);
}

maxNew (1,2,3);
maxNew(7);
maxNew();

//Rest parameter is always last
//Only one rest is allowed
//Rest can be empty