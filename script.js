/*Tela de Loading (Ele ta só garantindo que ela apareça msm não sendo necessário o tempo de espera)*/
var i = setInterval(function () {
    
    clearInterval(i);
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";

}, 2000);
/*Tela de Loading*/

/*Efeito Parallax*/
window.addEventListener('scroll',function(){
    var value = window.scrollY;

    fundo.style.top = value * 0.5 + 'px';
    montanha.style.top = -value * 0.10 + 'px';
    rua.style.top = value * 0.15 + 'px';
    text.style.top = value * 0.6 + 'px';
})
/*Efeito Parallax*/