function getElementCompra3Storage() {
    const compras3Storage = localStorage.getItem("listaCompra3")
    const compras3Objeto = JSON.parse(compras3Storage)
    return compras3Objeto
}

preencherTabela4()
function verificar4(para1) {
    var comparacao4 = getElementCompra3Storage()
    comparacao4 = comparacao4.filter(function (element, index) {
        return index != para1
        // if (index != para1) {
        //     return true
        // } else {
        //     return false
        // }
    })
    localStorage.setItem("listaCompra3", JSON.stringify(comparacao4))
    preencherTabela4()
}

function confirmarPedido(index) {
    const confirmar4 = getElementCompra3Storage()
    console.log(index)
    confirmar4[index].status3 = "Pedido Confirmado"
    preencherTabela4()
    localStorage.setItem("listaCompra3", JSON.stringify(confirmar4))
    preencherTabela4()
    
}
function preencherTabela4() {
    document.getElementById("corpo4").innerHTML = ""
    getElementCompra3Storage().forEach(function (element, index) {
        console.log(getElementCompra3Storage())
        document.getElementById("corpo4").innerHTML += '<tr>' +
            '<th scope ="row">' + (index + 1) + '</th>' +
            '<td>' + element.nome3 + '</td>' +
            '<td>' + element.email3 + '</td>' +
            '<td>' + element.idade3 + '</td>' +
            '<td>' + element.produto3 + '</td>' +
            '<td>' + element.valor3 + '</td>' +
            '<td>' + element.status3 + '</td>' +
            '<td><button onclick ="confirmarPedido(' + index + ')">Confirmar</button></td>' +
            '<td><button onclick ="verificar4(' + index + ')">REMOVER</button></td>' +
            '</tr>'
    });
}