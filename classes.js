//Classes

class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }

    say() {
        console.log(`${this.name} goes ${this.voice}`)
    }
}

class Bird extends Animal {
    constructor(name, voice, canFly) {
        super(name, voice);
        super.say();
        this.canFly = canFly;
    }
    say() {

        console.log(`BIRDS NOT TALKS`);
    }
}

const caplya = new Bird('Caplya', 'KYP/|bIK', true);

caplya.say();

