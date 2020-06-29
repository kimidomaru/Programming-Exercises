let tabela = document.querySelector('table');

tabela.addEventListener("dblclick", function(){
    let alvoEvento = event.target;
    let paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.classList.add("fadeOut");
    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500);
});
