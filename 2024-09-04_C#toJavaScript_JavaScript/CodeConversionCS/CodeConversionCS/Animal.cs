public class Animal
{
    public String Name { get; set; }
    public bool HasFur { get; set; }
    public int NumberOfLegs { get; set; }
    public double SizeInFeet { get; set; }

    public Animal(String name, bool hasFur, int numberOfLegs, double sizeInFeet)
    {
        Name = name;
        HasFur = hasFur;
        NumberOfLegs = numberOfLegs;
        SizeInFeet = sizeInFeet;
    }

    public virtual String GetDescription()
    {
        return $"{Name} has" + (HasFur ? "" : " no") + $" fur and has {NumberOfLegs} legs. It is {SizeInFeet} ft tall.";
    }
}