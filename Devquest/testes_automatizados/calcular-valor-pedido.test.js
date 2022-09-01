
// //it = test

const calcularValorPedido = require('./calcular-valor-pedido');
 
it("não deve cobrar frete quando valor dos produtos for superior a 500", () => {
    //AAA - 3 passos de criação de um teste


    //ARRANGE - ARRUMAR - O OBJETO DE TESTE
    const meuPedido = {
        itens: [
            {nome: 'poção de vida', valor: 0},
            {nome: 'Espada de prata', valor: 2000},
            {nome: 'entrega', valor: 40, entrega: true}
        ]
    }

    //ACT - AÇÃO  - O QUE VAI SER TESTADO
    const resultado = calcularValorPedido(meuPedido)


    //ASSERT - ASSERÇÃO - QUAL O RESULTADO ESPERADO
    expect(resultado).toBe(2000)
})