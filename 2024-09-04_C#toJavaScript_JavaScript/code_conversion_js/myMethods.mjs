export function randomizer(lower, upper)
{
    if (upper === undefined)
    {
        upper = lower;
        lower = 0;
    }
    return lower + Math.floor(Math.random() * (upper-lower + 1));
}