let toLeft = 0;
    let toRight = 0;
    let beforeClick = undefined;
    let seccondClick = false;
    let open = false;     
        
    function toFrame(idCur,titleCur){           
        let btnTitle = document.querySelector(titleCur);
        const section = document.querySelector('#curInd');
        let frame = document.querySelector('#curFrame');
        
        if (!open){
            btnTitle.setAttribute('style', 'background-color: #FFEA98;');   //------- define o backgroud do titulo do click 1 para amarelo
            section.setAttribute('style', 'display: unset;');   //---------------- abre  frame inferior
            let art = '#' + document.querySelector(idCur).id;   //---------------- atribui o src no frame
            frame.setAttribute('src', ('/cursoInd' + (art)));   
            seccondClick = true;                    //---------------- variaveis de controle
            open = true;
            beforeClick = btnTitle;              //---------------- recebe o valor do backgroud do click 1 para depois retirar no item 2
        } else if (open && seccondClick)  {     //---------------- se aberto e clicado em outro titulo
            frame.removeAttribute('src');       //---------------- remove src do frame
            beforeClick.setAttribute('style', 'background-color: "";'); //---------------- muda o valor do background do titulo anterior para branco
            btnTitle = document.querySelector(titleCur);  //---------------- coloca o novo src no frame
            btnTitle.setAttribute('style', 'background-color: #FFEA98;');
            setTimeout(function(){                  
                let art = '#' + document.querySelector(idCur).id;   // ----------------aguarda 10ms e atribui o src no frame e
                frame.setAttribute('src', ('/cursoInd' + (art)));
            }, 100);
            beforeClick = btnTitle;  //---------------- variaveis de controle
            open = true;
            seccondClick = false;
        } else{
            frame.removeAttribute('src');   //---------------- remove o src do frame
            beforeClick.setAttribute('style', 'background-color: "";');     //---------------- muda o valor do background do titulo anterior para branco
            btnTitle.setAttribute('style', 'background-color: "";');    //---------------- muda o valor do background do titulo para branco
            section.setAttribute('style', 'display: none;');    //---------------- fecha o frame
            open = false;            //---------------- variavel de controle
            seccondClick = true;
        }                   
    }
    
    // Funções para não aparecer barras de bot~eos não 'scrollable'
    const curBoxTodo = document.querySelector('.curBox#moveTodo');
    const curBoxGrat = document.querySelector('.curBox#moveGrat');
    const curBoxPago = document.querySelector('.curBox#movePago');
    const curBoxMelh = document.querySelector('.curBox#moveMelh');
    
    const scrollAnalyse = [
        curBoxTodo,
        curBoxGrat, 
        curBoxPago,
        curBoxMelh
    ];

    const notScrollable = scrollAnalyse.filter(Box => !isScrollable(Box));
    const notScrollLeft = scrollAnalyse.filter(Box => haveScrollLeft(Box));

    function isScrollable(Box) {
        const scrollable = Box.scrollWidth > window.innerWidth;
        return scrollable;            
    };

    function haveScrollLeft(Box){
        const boxLeftScroll = Box.scrollLeft == 0;
        return boxLeftScroll;
    };

        let btnR = undefined;
        let btnL = undefined;
    for (const item of notScrollable){
        switch (item.id){
            case 'moveTodo':
                btnR = document.querySelector('#btnTodoR');
                btnL = document.querySelector('#btnTodoL');
                break;
            case 'moveGrat':
                btnR = document.querySelector('#btnGratR');
                btnL = document.querySelector('#btnGratL');
                break;
            case 'movePago':
                btnR = document.querySelector('#btnPagoR');
                btnL = document.querySelector('#btnPagoL');
                break;
            case 'moveMelh':
                btnR = document.querySelector('#btnMelhR');
                btnL = document.querySelector('#btnMelhL');
                break;
            default: undefined;                        
        }
        btnR.setAttribute('style', 'display: none;');
        btnL.setAttribute('style', 'display: none;');
        item.setAttribute('style', 'padding-right: 42%;');
    };
    
    for (const item of notScrollLeft){
        if (notScrollLeft){
            switch (item.id){
            case 'moveTodo':
                btnL = document.querySelector('#btnTodoL');
                break;
            case 'moveGrat':
                btnL = document.querySelector('#btnGratL');
                break;
            case 'movePago':
                btnL = document.querySelector('#btnPagoL');
                break;
            case 'moveMelh':
                btnL = document.querySelector('#btnMelhL');
                break;
            default: undefined;                        
        }
            btnL.setAttribute('style', 'display: none;');
        } else {
            btnL.setAttribute('style', 'display: unset;');
        }
    };
    // Função habilitar esquerda <

    function enableLeftMove(paramL){
        if (paramL.scrollLeft > -1) {
            paramL.setAttribute('style', 'display: unset;');
        }
    };

    // Funções para mover as boxes <   >
        
    function moveToRight(paramR, paramL){
        const mousePosR = paramR.id;
        switch (mousePosR){
            case 'btnTodoR':
                curBox = curBoxTodo;
                break;
            case 'btnGratR':
                curBox = curBoxGrat;
                break;
            case 'btnPagoR':
                curBox = curBoxPago;
                break;
            case 'btnMelhR':
                curBox = curBoxMelh;
                break;
            default:
                curBox = undefined;
        };
        
        if (toRight > curBox.scrollLeft){
            return;
        } else {
            setTimeout(function() { 
                curBox.scrollLeft += 2;
                toLeft += 2;
                toRight += 2;
                moveToRight(paramR);
            }, 4)
        }
    };

    function moveToLeft(paramL){
        const mousePosL = paramL.id;
        switch (mousePosL){
            case 'btnTodoL':
                curBox = curBoxTodo;
                break;
            case 'btnGratL':
                curBox = curBoxGrat;
                break;
            case 'btnPagoL':
                curBox = curBoxPago;
                break;
            case 'btnMelhL':
                curBox = curBoxMelh;
                break;
            default:
                curBox = undefined;
        }
        if (toLeft < curBox.scrollLeft){
            return;
        } else {
            setTimeout(function() {                 
                curBox.scrollLeft -= 2;
                toLeft -= 2;
                toRight -= 2;
                moveToLeft(paramL);
            }, 4)
        }
    };   

    function stopMove(){
        toLeft = curBox.scrollLeft - 10;
        toRight = curBox.scrollLeft + 10;
        setTimeout(function() {                 
            toLeft = curBox.scrollLeft + 10;
            toRight = curBox.scrollLeft - 10;    
            }, .01)      
    };