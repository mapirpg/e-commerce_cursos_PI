    // códigos de desconto - Array=["palavra-chave", multiplicador] -  Utilizado somente letras MAIÚSCULAS na palavra chave - Não utilizar "0" no multiplicador -

    let desconto1 = ['a', 0.1];
    let desconto2 = ['b', 0.2];
    let desconto3 = ['camilla', 0.8]; 

            // controle de quantidades
    let quantidade = [];
    let beforeClick = [];
    let beforeValor = [];
    const btnSubAll = document.querySelectorAll('.qtdeSubButton');
    const btnAddAll = document.querySelectorAll('.qtdeAddButton');
    const btnRemoveAll = document.querySelectorAll('.removerProduto')
            // controle de valores de desconto
    let desconto = 0;
    const codDesconto = document.querySelector('#codDesconto');
    const btnAddDesconto = document.querySelector('.addCodDesconto')
    const boxDesconto = document.querySelector('#boxDesconto');
    const valido = document.querySelector('#codValido');
    const invalido = document.querySelector('#codInvalido');
    const outroCupom = document.querySelector('#outroCupom');
    const modalContentTitle = document.querySelector('.modalContent > h4')
            // variáveis para calculo do total
    let toTotal = [];
    const produtosValores = document.querySelectorAll('.itemValor');
    const boxTotal = document.querySelector('#showTotal');
            // funções padrão
    let atualizarTotal = (total, pTotal) => {total.value = pTotal.reduce(function(total, i) {return total + i;})};

    let resetCupom = () => {
        boxDesconto.value = '';
            codDesconto.setAttribute('style', 'display: inline;');
            modalContentTitle.setAttribute('style', 'display: flex;'); 
            boxDesconto.value = 'nenhum desconto adicionado';
            outroCupom.setAttribute('style', 'display: none;');
            desconto = 0;
    };

    let defaultAddSub = () => {
                let produto = document.querySelector(curNome);
                let btnSub = produto.children[3].querySelector('.qtdeSubButton');
                let boxQtde = produto.children[2].querySelector('.txtQtde');
                let boxValor = produto.children[1].querySelector('.itemValor');
                return produto, btnSub, BoxQtde, boxValor;
    };

    // atribuição de valores padrão às arrays

    for (i = 0; i < btnSubAll.length; i++) {
            btnSubAll[i].setAttribute('style', 'opacity: .3; cursor: not-allowed;');
            quantidade[i] = 1;
            beforeClick[i] = 0;
            beforeValor[i] = 0;
            // calculo do Total
            toTotal[i] = Number(produtosValores[i].value);
            btnAddAll[i].addEventListener("click", () => {atualizarTotal(boxTotal, toTotal)});
            btnSubAll[i].addEventListener("click", () => {atualizarTotal(boxTotal, toTotal)});
            btnRemoveAll[i].addEventListener("click", () => {atualizarTotal(boxTotal, toTotal)});
    };

    // Total Inicial

    boxTotal.value = toTotal.reduce(function(boxTotal, i) {return boxTotal + i;});

    // Adicionar quantidade

    function addQtde(curNome, i) {
            resetCupom()
            let produto = document.querySelector(curNome);
            let btnSub = produto.children[1].querySelector('.qtdeSubButton');
            let boxQtde = produto.children[1].querySelector('.txtQtde');
            let boxValor = produto.children[0].querySelector('.itemValor');
            btnSub.setAttribute('style', 'opacity: 1; cursor: pointer;');
            quantidade[i] += 1;
            boxQtde.value = quantidade[i];
            beforeClick[i] += 1;
            if (beforeClick[i] <= 1) {
                    beforeValor[i] = boxValor.value;
                    boxValor.value *= quantidade[i];
            };
            boxValor.value = beforeValor[i] * quantidade[i];
            toTotal[i] = Number(boxValor.value);
    };

    // Subtrair quantidade

    function subQtde(curNome, i) {
            resetCupom()
            let produto = document.querySelector(curNome);
            let btnSub = produto.children[1].querySelector('.qtdeSubButton');
            let boxQtde = produto.children[1].querySelector('.txtQtde');
            let boxValor = produto.children[0].querySelector('.itemValor');
            if (quantidade[i] == 1) {
                btnSub.setAttribute('style', 'opacity: .3; cursor: not-allowed;');
                    toTotal[i] = Number(boxValor.value);
                    return;
            } else {
                            // calcular quantidade
                    boxQtde.value = quantidade[i] -= 1;
                            // subtrai quantidade do valor
                    boxValor.value -= beforeValor[i];
                            // desabilitar botão "-"
                    if (quantidade[i] == 1) {
                            btnSub.setAttribute('style', 'opacity: .3; cursor: not-allowed;');
                            toTotal[i] = Number(boxValor.value);
                            return;
                    };
            };
            toTotal[i] = Number(boxValor.value);
    };

            // Remover Produto

    function removerProduto(curNome, i) {
        resetCupom()
        // variáveis da função
        let produto = document.querySelector(curNome);
        let boxValor = produto.children[0].querySelector('.itemValor');
        toTotal[i] -= Number(boxValor.value)
        console.log(boxValor);
        console.log('toTotal', toTotal[i]);
        produto.setAttribute('style', 'display: none');
    }

            // Botão para abrir o modal de adicionar desconto

    function toDesconto() {
        if (desconto === desconto1[1] || desconto === desconto2[1] || desconto === desconto3[1]) {
                codDesconto.value = '';
                outroCupom.setAttribute('style', 'display: inline;');
                btnAddDesconto.setAttribute('style', 'display: none');
                valido.setAttribute('style', 'display: none;');
                invalido.setAttribute('style', 'display: none;');
                return;
        } else {
        codDesconto.value = '';
        valido.setAttribute('style', 'display: none;');
        invalido.setAttribute('style', 'display: none;');
        btnAddDesconto.setAttribute('style', 'display: inline;')
        }
    }

    // Botão para adicionar o código do cupom de desconto

    function addDesconto() {
            // se cupom repetido
            if (desconto === desconto1[1] || desconto === desconto2[1] || desconto === desconto3[1]) {
                    outroCupom.setAttribute('style', 'display: inline;');
                    btnAddDesconto.setAttribute('style', 'display: none');
                    return;
            } else {
                    // se cupom válido
            switch (codDesconto.value) {
                    case desconto1[0]: // --------------------Comparativo de palavra-chave
                            desconto = desconto1[1]; // --------------------atribuição do multiplicador
                            valido.setAttribute('style', 'display: flex;');
                            boxDesconto.value = 'desconto de '+ (desconto*100)+'%';
                            btnAddDesconto.setAttribute('style', 'display: none');
                            invalido.setAttribute('style', 'display: none;');
                            codDesconto.setAttribute('style', 'display: none;');
                            modalContentTitle.setAttribute('style', 'display: none;');
                            break;
                    case desconto2[0]:  // --------------------Comparativo de palavra-chave
                            desconto = desconto2[1];  // --------------------atribuição do multiplicador
                            valido.setAttribute('style', 'display: flex;');
                            boxDesconto.value = 'desconto de '+ (desconto*100)+'%';
                            btnAddDesconto.setAttribute('style', 'display: none');
                            invalido.setAttribute('style', 'display: none;');
                            codDesconto.setAttribute('style', 'display: none;');
                            modalContentTitle.setAttribute('style', 'display: none;');
                            break;
                    case desconto3[0]:  // --------------------Comparativo de palavra-chave
                            desconto = desconto3[1];  // --------------------atribuição do multiplicador
                            valido.setAttribute('style', 'display: flex;');
                            boxDesconto.value = 'desconto de '+ (desconto*100)+'%';
                            btnAddDesconto.setAttribute('style', 'display: none');
                            invalido.setAttribute('style', 'display: none;');
                            codDesconto.setAttribute('style', 'display: none;');
                            modalContentTitle.setAttribute('style', 'display: none;');
                            break;
                    default:
                            // se cupom inválido
                            invalido.setAttribute('style', 'display: flex;')
                            codDesconto.value = '';
                            boxDesconto.value = 'nenhum desconto adicionado';
                            return;
                            break;
            };
            boxTotal.value -= (boxTotal.value * desconto);
            };
    };

    // Remover cupom

    function removeCupom() {
            desconto = 0
            boxTotal.value = toTotal.reduce(function(boxTotal, i) {return boxTotal + i;});
            btnAddDesconto.setAttribute('style', 'display: inline');
            outroCupom.setAttribute('style', 'display: none;');
            boxDesconto.value = '';
            codDesconto.setAttribute('style', 'display: inline;');
            modalContentTitle.setAttribute('style', 'display: flex;');
    };