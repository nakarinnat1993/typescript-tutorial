function voidFunction(): void
{ 
    console.log("Void Function Not returned");
    
}
function getNumber(): number
{ 
    return 1;
}
function getString(full_name: string): string
{ 
    return full_name;
}
function sumRest(a: number, b:number, ...rest: number[]): number
{
    return a + b + rest.reduce((x, y) => x + y, 0);
}
console.log(sumRest(1, 2, 3, 4, 5, 6, 7, 8));
