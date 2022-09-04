
const acrecimoValorEntrega = 0.2;

const calcularValorPedido = pedido => {

    const valorProdutos = pedido.itens.filter(item => !item.entrega).reduce((totalPedidos, pedidoAtual)=> totalPedidos + pedidoAtual.valor, 0 );

 

    const entrega = pedido.itens.filter(item => item.entrega);

    if(pedido.estado === 'RS' || pedido.estado === 'SC') {
        const acrescimoEntrega = entrega[0].valor * acrecimoValorEntrega;
        entrega[0].valor += acrescimoEntrega;
    }


    return (valorProdutos > 500) ? valorProdutos : valorProdutos + entrega[0].valor;
    // if(valorProdutos > 500) {
    //     return valorProdutos;
    // }else {
    //     return valorProdutos + entrega[0].valor
    // }


// pedido.itens.reduce((totalPedidos, pedidoAtual)=> totalPedidos + pedidoAtual.valor, 0 )
}

module.exports = calcularValorPedido