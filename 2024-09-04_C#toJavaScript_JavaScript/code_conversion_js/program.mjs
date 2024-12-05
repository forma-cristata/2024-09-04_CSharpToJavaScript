import {Dog, Snake, Animal} from "./myClass.mjs";
import {randomizer} from "./myMethods.mjs";


let animals = [new Dog('Piper', true, 4, 3.1, 'German Shepard'),
                        new Snake('Scalez', false, 0, 5, true),
                        new Snake('Viper', false, 0, 4.2, false),
                        new Dog('Fido', false, 4, 1.9, 'Xoloitzcuintli')];

for(let a in animals)
{
    if(typeof a === typeof Snake)
    {
        console.log(a.getDescription())
    }
}



const FAVORITE_ANIMALS = 2;

let favoriteAnimals = new Array(FAVORITE_ANIMALS);
favoriteAnimals[0] = animals[randomizer(animals.length)];
let i = 1;

for(let i = 1; i < favoriteAnimals.length; i++)
{
    favoriteAnimals[i] = animals[randomizer(animals.length-1)];

    if(favoriteAnimals[i].name === favoriteAnimals[i-1].name)
    {
        i --;
    }
}

console.log('\nPrinting favorite animals...');
let x = favoriteAnimals[i-1]
while(i > 0)
{
    i--;
    let x = favoriteAnimals[i];
    let y = x.getDescription();
    console.log(y);

}