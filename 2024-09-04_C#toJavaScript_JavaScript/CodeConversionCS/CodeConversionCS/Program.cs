Animal[] animals =
{
    new Dog("Piper", true, 4, 3.1, "German Shepard"),
    new Snake("Scalez", false, 0, 5, true),
    new Snake("Viper", false, 0, 4.2, false),
    new Dog("Fido", false, 4, 1.9, "Xoloitzcuintli"),
};

Console.WriteLine("Printing snakes...");

foreach(Animal a in animals)
{
    if(a.GetType() == typeof(Snake))
    {
        Console.WriteLine(a.GetDescription());
    }
}

const int FAVORITE_ANIMALS = 2;

// You will not be able to achieve this syntax in JS.
// Get as close as possible.
Animal[] favoriteAnimals = new Animal[FAVORITE_ANIMALS];
favoriteAnimals[0] = animals[Random.Shared.Next(animals.Length)];
int i = 1;

for(; i < FAVORITE_ANIMALS; i++)
{
    favoriteAnimals[i] = animals[Random.Shared.Next(animals.Length)];

    if (favoriteAnimals[i].Name.Equals(favoriteAnimals[i - 1].Name))
    {
        i--;
    }
}

Console.WriteLine("\nPrinting favorite animals...");

while(i > 0)
{
    i--;
    Console.WriteLine(favoriteAnimals[i].GetDescription());
}