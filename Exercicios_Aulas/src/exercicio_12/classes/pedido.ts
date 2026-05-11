import {Cliente} from "./cliente"
export class Pedido {
    id: number
    valor: number
    cliente: Cliente

    constructor(id:number,valor:number,cliente:Cliente){
        this.id=id
        this.valor=valor
        this.cliente=cliente
    }
}