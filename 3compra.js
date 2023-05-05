function getElementCadastro1Storage() {
    const cadastroProdutoStorage =  localStorage.getItem("cadastroProdutos")
    console.log(cadastroProdutoStorage)
    const cadastroProdutosObjeto = JSON.parse(cadastroProdutoStorage)
    console.log(cadastroProdutosObjeto)
    return cadastroProdutosObjeto
}
function getElementCompra3Storage(){
    const compras3Storage = localStorage.getItem("listaCompra3")
    const compras3Objeto = JSON.parse(compras3Storage)
    return compras3Objeto
}

console.log(getElementCadastro1Storage())

function getElementNome3 (){
    return document.getElementById("nome3")
}
function getElementEmail3 (){
    return document.getElementById("email3")
}
function getElementIdade3 () {
    return document.getElementById("idade3")
}
function getElementProduto3 (){
    return document.getElementById("produtos3")
}
function getElementValor3 () {
    return document.getElementById("valor3")
}
function getElementBotao3 () {
    return document.getElementById("botao3")
}

loadSelectProdutos()

function loadSelectProdutos(){
    document.getElementById("produtos3").innerHTML = ""
    getElementCadastro1Storage().forEach(function(element, index) {
        document.getElementById("produtos3").innerHTML += '<option value='+index+'>' +element.Nome1+'</option>'
        
    });
    document.getElementById("valor3").value = getElementCadastro1Storage()[0].Preco1
}
function onChangeProdutos(){
    let produtosIndex = document.getElementById("produtos3").value
    document.getElementById("valor3").value = getElementCadastro1Storage()[produtosIndex].Preco1
}
console.log(document.getElementById("produtos3").value)


getElementBotao3().addEventListener('click', function(event){
    event.preventDefault();
    

    let valorCompra3 = {
        nome3: getElementNome3().value,
        email3: getElementEmail3().value,
        idade3: getElementIdade3().value,
        produto3: getElementCadastro1Storage()[getElementProduto3().value].Nome1,
        valor3: getElementCadastro1Storage()[getElementProduto3().value].Preco1,
        status3: "Pendente"
    };
    if (getElementCompra3Storage()==null) {
        const lista3 = [valorCompra3]
        localStorage.setItem("listaCompra3", JSON.stringify(lista3))
    } else {
        const list3 = getElementCompra3Storage()
        console.log(list3)
        list3.push(valorCompra3)
        console.log(list3)
        localStorage.setItem("listaCompra3", JSON.stringify(list3))
    }
console.log(valorCompra3)
getElementNome3().value = ""
getElementEmail3().value = ""
getElementIdade3().value = ""
})
