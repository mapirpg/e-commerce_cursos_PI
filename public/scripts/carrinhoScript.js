
    // Script para controle de quantidades
    let quantidade = [];
    let beforeClick = [];
    let beforeValor = [];
    let toTotal = [];
    const btnSubAll = document.querySelectorAll('.qtdeSubButton');
    const btnAddAll = document.querySelectorAll('.qtdeAddButton');
    let produtosValores = document.querySelectorAll('.itemValor');
    let boxTotal = document.querySelector('#showTotal');
    let desconto = (document.querySelector('#boxDesconto').value)/100;
    console.log(desconto);


    for (i = 0; i < btnSubAll.length; i++) {
        console.log(desconto);
        btnSubAll[i].setAttribute('style', 'opacity: .3; cursor: not-allowed;');
        quantidade[i] = 1;
        beforeClick[i] = 0;
        beforeValor[i] = 0;
        toTotal[i] = Number(produtosValores[i].value);
        btnAddAll[i].addEventListener("click", function (event) {
            boxTotal.value = toTotal.reduce(function(boxTotal, i) {return boxTotal + i});
            console.log(desconto);
        });
        btnSubAll[i].addEventListener("click", function (event) {
            boxTotal.value = toTotal.reduce(function(boxTotal, i) {return boxTotal + i;});;
        });
    };
    boxTotal.value = toTotal.reduce(function(boxTotal, i) {return boxTotal + i;});
    
// Adicionar quantidade

    function addQtde(curNome, i) { 
        let produto = document.querySelector(curNome);
            // Habilita o botão "-"
        let btnSub = produto.children[2].querySelector('.qtdeSubButton').setAttribute('style', 'opacity: 1; cursor: pointer;');
            // calcular quantidade
        quantidade[i] += 1;
        let boxQtde = produto.children[2].querySelector('.txtQtde').value = quantidade[i];
            // multuplicar quantidade por valor
        let itemValor = produto.children[1].querySelector('.itemValor').value;
        let boxValor = produto.children[1].querySelector('.itemValor');
        beforeClick[i] += 1;
        if (beforeClick[i] <= 1) {
            beforeValor[i] = itemValor;
            boxValor.value = itemValor * quantidade[i];
        };
        boxValor.value = beforeValor[i] * quantidade[i];
        toTotal[i] = Number(boxValor.value);
    };

// subtrair quantidade

    function subQtde(curNome, i) { 
        let produto = document.querySelector(curNome);
        let btnSub = produto.children[2].querySelector('.qtdeSubButton');
        let boxQtde = produto.children[2].querySelector('.txtQtde');
        let boxValor = produto.children[1].querySelector('.itemValor');
            // desabilitar botão "-"
        if (quantidade[i] == 1) {
            btnSub.setAttribute('style', 'opacity: .3; cursor: not-allowed;');

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