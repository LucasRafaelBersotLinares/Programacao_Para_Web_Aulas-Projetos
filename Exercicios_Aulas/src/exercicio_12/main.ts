import {Cliente} from "./classes/cliente"
import {Endereco} from "./classes/endereco"
import {Pedido} from "./classes/pedido"
import {Sistema} from "./classes/sistema"

let endereco = new Endereco("Dr Laurindo", 150,"Tatui")
let endereco2 = new Endereco("Sales Gomes", 11, "Sao Paulo")
let cliente = new Cliente("Anelise", 12, endereco)
let cliente2 = new Cliente("Lucas", 19, endereco2)
let pedido = new Pedido(10, 100.00, cliente)
let pedido2 = new Pedido(11, 200.00, cliente2)
let pedidos: Pedido[] = [pedido,pedido2]
let compra1 = new Sistema(pedidos)

console.log(`Nome do cliente: ${compra1.pedidos[0].cliente.nome} \n
Cidade do cliente: ${compra1.pedidos[0].cliente.endereco.cidade} \n
Valor do pedido: ${compra1.pedidos[0].valor} \n`)

console.log(`Nome do cliente: ${compra1.pedidos[1].cliente.nome} \n
Cidade do cliente: ${compra1.pedidos[1].cliente.endereco.cidade} \n
Valor do pedido: ${compra1.pedidos[1].valor}`)