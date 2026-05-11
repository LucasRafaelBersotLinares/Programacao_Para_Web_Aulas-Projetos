function calcularMedia ( notas : number []) : number {
    try {
        let soma = 0
        for (let i = 0; i <= notas.length; i++){
            if(i == 10){
                throw new Error("Nao existe elemento na posicao 10")
            }
            soma += notas[i]
        }
        return soma/notas.length
    } catch(erro: unknown) {
        if(erro instanceof Error){
            console.log(erro.message)
            let soma = 0
            for (let i = 0; i < notas.length; i++){
                soma += notas[i]
            }
            return soma/notas.length
        }
        return 0
    }
}

let  media: number[] = [10,20,30,40,50,60,70,80,90,100] 
console.log(calcularMedia(media))
