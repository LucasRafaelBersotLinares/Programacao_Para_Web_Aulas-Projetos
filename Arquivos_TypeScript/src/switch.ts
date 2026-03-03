let perfil: string = "admin";

switch(perfil){
    case "admin":
        console.log("Bem Vindo Admin");
        break;
    case "user":
        console.log("Bem Vindo User");
        break;
    case "guest":
        console.log("Bem Vindo Guest");
        break;
    default:
        console.log("Perfil Desconhecido")
}