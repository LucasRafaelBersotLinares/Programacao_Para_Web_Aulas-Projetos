import {Pedido} from "./pedido"
export class Sistema {
    pedidos: Pedido[]

    constructor(pedidos: Pedido[]){
        this.pedidos = pedidos
    }
}