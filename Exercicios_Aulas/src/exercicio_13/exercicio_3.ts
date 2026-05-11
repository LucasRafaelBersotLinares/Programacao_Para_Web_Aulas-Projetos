interface Veiculo {
    marca: string
    modelo: string
    ligar(): void
}

class Carro implements Veiculo {
    marca: string
    modelo: string

    constructor(marca: string, modelo: string){
        this.marca = marca
        this.modelo = modelo
    }

    ligar(): void {
        console.log("Marca: ", this.marca, "\n", "Modelo: ", this.modelo)
    }
}

let carro1 = new Carro("Chevrolet", "Camaro")
let carro2 = new Carro("Parati", "Volkswagen")
carro1.ligar()
carro2.ligar()