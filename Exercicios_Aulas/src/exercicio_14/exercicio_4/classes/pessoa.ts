export class Pessoa {
    nome: string
    email: string
    dataNascimento: string

    constructor(nome: string, email: string, dataNascimento: string){
        this.nome = nome
        this.email = email
        this.dataNascimento = dataNascimento
    }

    validarNome(): void {
        let nomeValidado = this.nome.slice(0,this.nome.length).toUpperCase()
        let firstWord = this.nome.slice(0,1)
        let lastWord = this.nome.slice(this.nome.length-1,this.nome.length)
        try {
            if(firstWord == " " || lastWord == " "){
                console.log("Primeira letra vazia ou Ultima letra vazia")
                throw new Error("Nome esta indevido com as diretrizes do Sistema")
            }
            if(this.nome === nomeValidado){
                console.log("Nome Validado com sucesso")
                return
            }
            console.log("Nome nao esta totalmente em caixa alta")
            throw new Error("Nome esta indevido com as diretrizes do Sistema")
        }catch(erro){
            if(erro instanceof Error){
                console.log("Erro Fatal: ", erro.message)
            }
        }
    }
    validarEmail(): void {
        try{
            if(this.email.includes("@") && this.email.includes(".com")){
                console.log("Email validado com sucesso")
                return
            }
            throw Error("Email nao contem [ @ ] ou [ .com ]")
        }catch(erro){
            if(erro instanceof Error){
                console.log(erro.message)
            }
        }
    }
    validarDataNascimento(): void {
        let anoColocado = this.dataNascimento.slice(6,this.dataNascimento.length)
        let dateAtual = new Date((this.dataNascimento))
        let dateColocada = new Date(this.dataNascimento)
        dateColocada.setDate(dateColocada.getDate()+1)
        let anoAtual = dateAtual.toLocaleDateString().slice(6,dateAtual.toLocaleDateString().length)
        console.log(dateColocada)
        try{
            if(this.dataNascimento){}

        }catch(erro){
            if(erro instanceof Error){
                console.log("Data de nascimento nao esta no formato: dd/mm/yyyy")
            }
        }
    }
}
