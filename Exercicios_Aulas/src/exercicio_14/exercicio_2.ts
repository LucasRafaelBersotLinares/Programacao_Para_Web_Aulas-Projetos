function cadastrarUsuario ( nome:string , idade:number ) {
    try{
        if ( nome.length === 0 || idade < 0) {
            console.log ("Dados inválidos")
            throw new Error("Idade nao pode ser negativa \n Nome precisa ser maior que 0 caracteres")
4       }
        console.log ("Usuário cadastrado!")
    } catch( erro) {
        if(erro instanceof Error){
            console.log (erro.message)
            return
        }
        
    }
6 }

cadastrarUsuario("Lucas", -1)