

function getElementNome() {
    return document.getElementById("nomeProduto")
}

function getElementCodigo() {
    return document.getElementById("codigoProduto")
}
function getElementPeso() {
    return document.getElementById("pesoProduto")
}
function getElementPreco() {
    return document.getElementById("precoProduto")
}
function getElementBotao() {
    return document.getElementById("botaoEnviarProduto")
}

function getElementByAA(id){
    return document.getElementById(id);
}

var nomeProdutoId = "nomeProduto1";
var cadastroProdutoskey = "cadastroProdutos5";


function getElementCadastro1Storage() {
    const cadastroProdutoStorage =  localStorage.getItem("cadastroProdutos")
    console.log(cadastroProdutoStorage)
    const cadastroProdutosObjeto = JSON.parse(cadastroProdutoStorage)
    console.log(cadastroProdutosObjeto)
    return cadastroProdutosObjeto
}
//console.log(getElementCadastro1Storage())

getElementBotao().addEventListener('click', function (event) {
    event.preventDefault();
   

    let valor1cadastro = {
        Nome1: getElementByAA(nomeProdutoId).value,
        Codigo1: getElementByAA("codigoProduto").value,
        Peso1: getElementPeso().value,
        Preco1: getElementPreco().value
    };
    console.log(getElementCadastro1Storage())
    console.log(valor1cadastro)
    if (getElementCadastro1Storage() == null) {
        const lista1 = [valor1cadastro]
        localStorage.setItem("cadastroProdutos", JSON.stringify(lista1))
    } else {
        const lista = getElementCadastro1Storage()
        console.log(lista)
        lista.push(valor1cadastro)
        console.log(lista) 
        localStorage.setItem("cadastroProdutos", JSON.stringify(lista))
    }
    //console.log(getElementCadastro1Storage())
    getElementByAA(nomeProdutoId).value = ""
    getElementByAA("codigoProduto").value = ""
    getElementPeso().value = ""
    getElementPreco().value = ""


    
})