
function getElementNome (){
    return document.getElementById("nomeProduto")
}
console.log(getElementNome())
function getElementCodigo (){
    return document.getElementById("codigoProduto")
}
function getElementPeso (){
    return document.getElementById("pesoProduto")
}
function getElementPreco (){
    return document.getElementById("precoProduto")
}
function getElementBotao (){
    return document.getElementById("botaoEnviarProduto")
}

getElementBotao().addEventListener('click', function(event){
    event.preventDefault();
    let valor1cadastro = {
        Nome1: getElementNome.value,
        Codigo1: getElementCodigo.value,
        Peso1: getElementPeso.value,
        Preco1: getElementPreco.value
    } 
    localStorage.setItem("cadastroProdutos", JSON.stringify(valor1cadastro))
console.log(valor1cadastro)
})