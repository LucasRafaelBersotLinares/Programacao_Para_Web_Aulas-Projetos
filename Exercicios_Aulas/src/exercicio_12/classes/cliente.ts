import { Endereco } from "./endereco"
export class Cliente {
    nome: string
    idade: number
    endereco: Endereco

    constructor(nome: string, idade: number, endereco: Endereco){
        this.nome = nome
        this.idade = idade
        this.endereco = endereco
    }
}