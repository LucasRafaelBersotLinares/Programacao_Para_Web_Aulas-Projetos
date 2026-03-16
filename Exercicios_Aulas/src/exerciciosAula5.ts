//Exercício 1:
function deixarMaiusculos(palavra:string):string{
    return palavra.toUpperCase();
} 
const deixarMaiusculosLambda = (palavra: string): string => palavra.toUpperCase();

console.log(deixarMaiusculosLambda("lucas"))
console.log(deixarMaiusculos("lucas"));

//Exercicio 2:
function elevarNumero(a:number, b:number):number {
    return a**b;
}
const elevarNumeroLambda = (a: number, b: number): number => a**b;

console.log(elevarNumero(2,3));
console.log(elevarNumeroLambda(5,2));

//Exercicio 3:

function dobrarArray(a:number[]):number[] {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(a[i])* 2;
    }       
    return a;
}

const dobrarArrayLambda = (a2: number[]): number[] => {
    for (let ia = 0; ia < a2.length; ia++) {
        a2[ia] = Number(a2[ia]) * 2;
    }
    return a2;
};  

console.log(dobrarArray([1,2,3]));
console.log(dobrarArrayLambda([4,5,6]));

//Exercicio 4:



