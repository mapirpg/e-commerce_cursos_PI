
   // verificação do frame inferior com detalhamento do curso
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
           console.log(art);
           frame.setAttribute('src', ('/curso' + (art)));   
           seccondClick = true;                    //---------------- variaveis de controle
           open = true;
           beforeClick = btnTitle;              //---------------- recebe o valor do backgroud do click 1 para depois retirar no item 2
       } else if (open && seccondClick && !beforeClick)  {     //---------------- se aberto e clicado em outro titulo
           frame.removeAttribute('src');       //---------------- remove src do frame
           beforeClick.setAttribute('style', 'background-color: "";'); //---------------- muda o valor do background do titulo anterior para branco
           btnTitle = document.querySelector(titleCur);  //---------------- coloca o novo src no frame
           section.setAttribute('style', 'display: none;');
           setTimeout(function(){                  
               let art = '#' + document.querySelector(idCur).id;   // ----------------aguarda 10ms e atribui o src no frame e
               frame.setAttribute('src', ('/curso' + (art)));
           }, 100);
           btnTitle.setAttribute('style', 'background-color: #FFEA98;');   //------- define o backgroud do titulo do click 1 para amarelo
           beforeClick = btnTitle;  //---------------- variaveis de controle
           open = true;
           seccondClick = false;
       } else {
           frame.removeAttribute('src');   //---------------- remove o src do frame
           beforeClick.setAttribute('style', 'background-color: "";');     //---------------- muda o valor do background do titulo anterior para branco
           btnTitle.setAttribute('style', 'background-color: "";');    //---------------- muda o valor do background do titulo para branco
           section.setAttribute('style', 'display: none;');    //---------------- fecha o frame
           open = false;            //---------------- variavel de controle
           seccondClick = true;
       }                   
   }
   
// array para análise de  'scrollable'* e 'scrollLeft'*
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

// *'srollable' -- Quando carrega a página se box não for scrollavel, desabilita visualização de "<" e ">"
   
   const notScrollable = scrollAnalyse.filter(Box => !isScrollable(Box));
   function isScrollable(Box) {
       const scrollable = Box.scrollWidth > window.innerWidth;
       return scrollable;            
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
   
// *'scrollLeft' -- Quando carrega a página, se "<" for 0, desabilita visualização

   const notScrollLeft = scrollAnalyse.filter(Box => haveScrollLeft(Box));
   function haveScrollLeft(Box){
       const boxLeftScroll = Box.scrollLeft == 0;
       return boxLeftScroll;
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

// Funções habilitar esquerda "<" e direita ">" 

   function enableLeftMove(paramL){
       if (paramL.scrollLeft > -1) {
           paramL.setAttribute('style', 'display: unset;');
       }
   };

   function enableRightMove(paramR){
       if (paramR.scrollLeft < window.innerWidth) {
           paramR.setAttribute('style', 'display: unset;');
       }
   };

// Funções para mover as boxes - direita ">"
   
   function moveToRight(paramR){
       if (moving == 'stop') {
           return;
       }
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
       };
       if ((curBox.scrollWidth - curBox.scrollLeft) <= window.innerWidth) {
           paramR.setAttribute('style', 'display: none;');                 // desabilitar direita ">" quando chega ao fim
       } else {
               setTimeout(function () { 
               curBox.scrollLeft += 1;
               moveToRight(paramR);
               }, 1);
           };
   };
   
// Funções para mover as boxes - esquerda "<"

   function moveToLeft(paramL){
       if (moving == 'stop') {
           return;
       }
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
       if (curBox.scrollLeft == 0){
           paramL.setAttribute('style', 'display: none;');                 // desabilitar esquerda "<" quando está no início
           return;
       } else {
           setTimeout(function() {                 
               curBox.scrollLeft -= 1;
               moveToLeft(paramL);
           }, 1)
       }
   };

// Funções para parar movimento da Box

   let moving
   function stopMove(params) {
       if (params == 'stop') {
           moving = 'stop';
           setTimeout(function() {                 
               moving ='';
           }, 4)
       };
   };

// Função para arrastar caixa de cursos, caso touch == true
   
   function dragBox() {
       const curBoxDrag = document.querySelector('.curBox');
       curBoxDrag.setAttribute('style', 'overflow-x: auto;');
   }