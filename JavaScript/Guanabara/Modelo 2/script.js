function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let formAno = document.getElementById('txtAno');
    var res = document.querySelector('div#res');
    if(formAno.value.length == 0 || Number(formAno.value) > ano){
        alert('[ERRO] Verique os dados e tente novamente!');
    }
    else{
        let fsex = document.getElementsByName('rdSexo');
        let idade = ano - Number(formAno.value);
        let genero = '';
        //equivalente ao <img id ="foto"> em html
        var img = document.createElement('img');
        img.setAttribute('id','foto');

        if(fsex[0].checked){
            genero = "Homem";
            if(idade >=0 && idade<10){
                //crianca
                img.setAttribute('src','babyM.png');
            }
            else if(idade>=10 && idade<21){
                //jovem
                img.setAttribute('src','youngM.png');
            }
            else if(idade>=21 && idade<50){
                //adulto
                img.setAttribute('src','adultM.png');
            }
            else{
                //idoso
                img.setAttribute('src','oldM.png');
            }
        }
        else if(fsex[1].checked){
            genero = "Mulher";
            if(idade >=0 && idade<10){
                //crianca
                img.setAttribute('src','babyF.png');
            }
            else if(idade>=10 && idade<21){
                //jovem
                img.setAttribute('src','youngF.png');
            }
            else if(idade>=21 && idade<50){
                //adulto
                img.setAttribute('src','adultF.png');
            }
            else{
                //idoso
                img.setAttribute('src','oldF.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `<strong>${genero}</strong> com <strong>${idade}</strong> anos<br>`;
        //Mandando a imagem aparecer via JS
        res.appendChild(img);
    }
}

