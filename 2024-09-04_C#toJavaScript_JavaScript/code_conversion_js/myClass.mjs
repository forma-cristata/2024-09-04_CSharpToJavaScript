export {Dog,Snake,Animal};
class Animal
{
    name;
    hasFur;
    numberOfLegs;
    sizeInFeet;

    constructor(name, hasFur, numberOfLegs, sizeInFeet)
    {
        this.name = name;
        this.hasFur = hasFur;
        this.numberOfLegs = numberOfLegs;
        this.sizeInFeet = sizeInFeet;
    }

    get name() {return this.name;}
    set name(val) {this.name = val;}
    get hasFur() {return this.hasFur;}
    set hasFur(val) {this.hasFur = val;}
    get numberOfLegs() {return this.numberOfLegs;}
    set numberOfLegs(val) {this.numberOfLegs = val;}
    get sizeInFeet() {return this.sizeInFeet;}
    set sizeInFeet(val) {this.sizeInFeet = val;}

    getDescription()
    {
        return `${this.name} has` + (this.hasFur ? "" : "no") + ` fur and has ${this.numberOfLegs} legs. It is ${this.sizeInFeet} ft tall.`;
    }

}
class Dog extends Animal
{
    breed;

    constructor(name, hasFur, numberOfLegs, sizeInFeet, breed)
    {
        super(name, hasFur, numberOfLegs, sizeInFeet);
        this.breed = breed;
        Object.seal(this);
    }

    getDescription()
    {
        return super.getDescription() + ` This dog is a ${this.breed}.`;
    }
}
class Snake extends Animal
{
    poisonous;

    constructor(name, hasFur, numberOfLegs, sizeInFeet, poisonous)
    {
        super(name, hasFur, numberOfLegs, sizeInFeet);
        this.poisonous = poisonous;
        Object.seal(this);
    }
    get poisonous() {return this.poisonous;}
    set poisonous(val) {this.poisonous = val;}

    getDescription()
    {
        if(this.poisonous) {return super.getDescription() + ` Look out! This snake is poisonous!`;}
        else {return super.getDescription();}
    }
}