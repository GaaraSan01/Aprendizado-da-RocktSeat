// Funções aceitam qualquer dado como argumento.
function imprimirDado(dado){
    console.log('outras taréfas')
    console.log(dado())
}

imprimirDado(() => {
    return "Olá Mundo!"
})