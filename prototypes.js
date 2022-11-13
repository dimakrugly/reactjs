//Prototypes

//No prototypes

const dog = {
    name: 'Dog',
    voice: 'woof',
    say: function () {
        console.log(this.name, 'goes', this.voice);
    }
};

const cat = {
    name: 'Cat',
    voice: 'meow',
    say: function () {
        console.log(this.name, 'goes', this.voice);
    }
};
// dog.say();
// cat.say();

//Prototype - bad performance method
const animal = {
    say: function () {
        console.log(this.name, 'goes', this.voice);
    }
};

const dog2 = {
    name: 'Dog',
    voice: 'woof',
};
Object.setPrototypeOf(dog2, animal);

const cat2 = {
    name: 'Cat',
    voice: 'meow',
};
Object.setPrototypeOf(cat2,animal)


// dog2.say();
// cat2.say();

//Good performance method

const dog3 = Object.create(animal);
dog3.name = 'Dog';
dog3.voice = 'Woof';

// dog3.say();


function createAnimal(name,voice){
    const result = Object.create(animal);
    result.name = name;
    result.voice = voice;
    return result;
}


const dog4 = createAnimal(' Pig','Hryu');
// dog4.say()


//Good performance lite syntax

function Animal(name,voice){
    this.name = name;
    this.voice = voice;
}

Animal.prototype.say = function (){
    console.log(`${this.name} goes ${this.voice}`)
}

const dog5 = new Animal('Caplya','KYP/|bIK');
dog5.say()

//1.Object.setProtoypeOf
//2.Object.create
//3.obj.prototype