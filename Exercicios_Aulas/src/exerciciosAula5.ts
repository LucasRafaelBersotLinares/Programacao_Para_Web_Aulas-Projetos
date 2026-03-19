/*Exercício 1:
function deixarMaiusculos(palavra:string):string{
    return palavra.toUpperCase();
} 
const deixarMaiusculosLambda = (palavra: string): string => palavra.toUpperCase();

console.log(deixarMaiusculosLambda("lucas"))
console.log(deixarMaiusculos("lucas"));
*/

/*Exercicio 2:
function elevarNumero(a:number, b:number):number {
    return a**b;
}
const elevarNumeroLambda = (a: number, b: number): number => a**b;

console.log(elevarNumero(2,3));
console.log(elevarNumeroLambda(5,2));
*/

/*Exercicio 3:

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
*/

/*Exercicio 4:
type Funcionario = {
    nome: string;
    cargo: string;
}
const Funcionarios: Funcionario[] = [
    {nome: "José", cargo: "Gerente"},
    {nome: "Mario", cargo: "Desenvolvedor"},
    {nome: "Lucas", cargo: "Desenvolvedor"},
    {nome: "Marcelo", cargo: "Desempregado"}
]
const cargoEspecifico: string = "Desenvolvedor";
let Desenvolvedores = Funcionarios.filter(Funcionarios => Funcionarios.cargo === cargoEspecifico);
console.log(Desenvolvedores);
*/

/*Exercicio 5:
type Aluno = {
    nome: string;
    nota: number;
}
const Alunos: Aluno[] = [
    {nome: "Lucas", nota: 10},
    {nome: "Joao", nota: 7},
    {nome: "Bruno", nota: 8},
    {nome: "Anisio", nota: 6},
    {nome: "Dourado", nota: 5},
]
let aprovados = Alunos.filter(Alunos => Alunos.nota >= 7);
console.log(aprovados);
*/

/*Exercicio 6:
type Evento = {
    nome: string;
    mes: string;
}
const Eventos: Evento[] = [
    {nome: "Cartas TCG", mes:"Setembro"},
    {nome: "Carros Turbinados", mes:"Janeiro"},
    {nome: "Faculade", mes:"Fevereiro"}
]
const mesDesejado = "Janeiro";
let ocorremMesJaneiro = Eventos.filter(Eventos => Eventos.mes === mesDesejado);
console.log(ocorremMesJaneiro)
*/


