const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click",function ()  {
    alert("Gracias por perdonalme tq 😢❤")
});

const  noBtn  =  document . querySelector ( '#noBtn' ) ;

noBtn . addEventListener ( 'mouseover' ,  function  ( )  {
    const  randomX  =  parseInt ( Math . random ( ) * 100 ) ;
    const  randomY  =  parseInt ( Math . random ( ) * 100 ) ;
    noBtn . style . setProperty ( 'top' , randomY + '%' ) ;
    noBtn . estilo . setProperty ( 'left' , randomX + '%' ) ;
    noBtn . style . setProperty ( 'right' , randomY + '%' ) ;
    noBtn . estilo . setProperty ( 'aside' , randomX + '%' ) ;
    noBtn . style . setProperty ( 'corner' , randomY + '%' ) ;
    noBtn . estilo . setProperty ( 'transform' , `translate(- ${ randomX } %,- ${ randomY } %)` ) ;
} )