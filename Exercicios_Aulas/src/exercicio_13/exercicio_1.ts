class DateUtils {
    constructor(){}

    formatarData(data: Date, formato: string): string{
        return data.toLocaleDateString(formato)
    }

    diferencaEmDias(data1: Date, data2: Date): number {
        let diferencia = new Date

        return diferencia.setDate(data1.getDate() - data2.getDate())
    }

    adicionarDias(data: Date, dias: number): Date {
        data.setDate(data.getDate() + dias)
        return data
    }

    ehFinaldeSemana(data: Date): boolean {
        let dataFuncao: String = data.toDateString().slice(0,3)
        if(dataFuncao == 'Sun' || dataFuncao == 'Sat')
            return true
        return false
    }

    converterParaISO(data: Date):string{
        return  data.toISOString()
    }

}

let hoje1 = new Date("10/08/2000")
let hoje2 = new Date()
let object = new DateUtils()
