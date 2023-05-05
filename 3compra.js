function getElementCadastro1Storage() {
    const cadastroProdutoStorage =  localStorage.getItem("cadastroProdutos")
    console.log(cadastroProdutoStorage)
    const cadastroProdutosObjeto = JSON.parse(cadastroProdutoStorage)
    console.log(cadastroProdutosObjeto)
    return cadastroProdutosObjeto
}
console.log(getElementCadastro1Storage())



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