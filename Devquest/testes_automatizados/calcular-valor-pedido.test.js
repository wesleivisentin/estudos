
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

it("Deve cobrar valor de frete quando o valor dos produtos for menor que 500", ()=> {


    //ARRANGE 
    const meuPedido = {
        itens: [
            
            {nome: 'Sanduíche', valor: 50},
            {nome: 'entrega', valor: 100, entrega: true}
        ]
    }


     //ACT
     const resultado = calcularValorPedido(meuPedido)



      //ASSERT 
    expect(resultado).toBe(150)
   
});




it("Deve cobrar valor de frete caso valos dos produtos seja EXATAMENTE 500", ()=> {

    const meuPedido = {
        itens: [
            
            {nome: 'Sanduíche', valor: 500},
            {nome: 'entrega', valor: 100, entrega: true}
        ]
    }
    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(600)
})


// CASO OS ESTADOS DE ENTREGA SEJAM RS OU Screen, DEVE SER ACRESCIDO UM VALOR DE 30% NA ENTREGA

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso seja RS', ()=> {

    const pedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            {nome: 'Sanduíche bem caro', valor: 500},
            {nome: 'entrega', valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoRS);

    expect(resultado).toBe(620)
})


it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso seja SC', ()=> {

    const pedidoComEstadoSC = {
        estado: 'SC',
        itens: [
            {nome: 'Sanduíche bem caro', valor: 500},
            {nome: 'entrega', valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSC);

    expect(resultado).toBe(620)
})


it('não deve adicionar um acrescimo de 20% no valor da entrega do pedido caso seja SP', ()=> {

    const pedidoComEstadoSP = {
        estado: 'SP',
        itens: [
            {nome: 'Sanduíche bem caro', valor: 500},
            {nome: 'entrega', valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSP);

    expect(resultado).toBe(600)
})