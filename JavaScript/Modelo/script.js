function carregar(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `São ${hora} horas.`;
    if(hora >=0 && hora<12){
        img.src = 'manha.png';
        document.body.style.background = '#99ad91';
    }
    else if(hora>=12 && hora<18){
        img.src = 'tarde.png';
        document.body.style.background = '#d7823f';
    }
    else{
        img.src = 'noite.png';
        document.body.style.background = '#11233b';
    }
}

