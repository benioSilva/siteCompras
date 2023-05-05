function getElementCadastro1Storage() {
    const cadastroProdutoStorage =  localStorage.getItem("cadastroProdutos")
    console.log(cadastroProdutoStorage)
    const cadastroProdutosObjeto = JSON.parse(cadastroProdutoStorage)
    console.log(cadastroProdutosObjeto)
    return cadastroProdutosObjeto
}
preencherTabela2()
function verficar2(p1){
    var comparacao = getElementCadastro1Storage()
    console.log(comparacao)
    comparacao = comparacao.filter(function(element,index){
        if (index!=p1){
            return true
        } else {
            return false
        }
    })
    localStorage.setItem("cadastroProdutos", JSON.stringify(comparacao))
preencherTabela2()
}

function preencherTabela2(){
    document.getElementById("corpo2").innerHTML=""
    getElementCadastro1Storage().forEach(function(element, index) {
        console.log(element)
        document.getElementById("corpo2").innerHTML += '<tr>'+
        '<th scope="row">'+(index+1) +'</th>'+
        '<td>'+element.Nome1+'</td>'+
        '<td>'+element.Codigo1+'</td>'+
        '<td>'+element.Peso1+'</td>'+
        '<td>'+element.Preco1+'</td>'+
        '<td><button onclick ="verficar2('+index+')">REMOVER</button> </td>'+
        
        '</tr>'

    });
}