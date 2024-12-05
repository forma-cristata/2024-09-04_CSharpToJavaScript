public class Dog : Animal
{
    public String Breed { get; set; }

    public Dog(String name, bool hasFur, int numberOfLegs, double sizeInFeet, String breed) 
        : base(name, hasFur, numberOfLegs, sizeInFeet)
    {
        this.Breed = breed;
    }

    public override String GetDescription() => base.GetDescription() + $" This dog is a {Breed}.";
}
