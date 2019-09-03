let v = [];
function adicionar(){
   let txtNum = document.getElementById('numero');
   let tab = document.getElementById('selTab');
   let texto = document.getElementById('msg');
   if(txtNum.value.length == 0){
       alertar();
   }
   else{
       let num = txtNum.value;
       if(num<1 || num >100){
           alertar();
       }
       else if(v.indexOf(num) !== -1){
           alertar();
       }
       else{
           v.push(num);
           let item = document.createElement('option');
           item.text += `Valor ${num} adicionado.`;
           tab.appendChild(item);
           texto.innerHTML = "";
       }
   }
}
function listar(){
    let maior, menor, soma, media;
    soma = somar(v);
    media = soma/v.length;
    maior = calculaMaior(v);
    menor = calculaMenor(v);
    let texto = document.getElementById('msg');
    texto.innerHTML = `Ao todo, temos ${v.length} números cadastrados. <br>
                        O maior valor informado foi ${maior}.<br>
                        O menor valor informado foi ${menor}.<br>
                        Somando todos os valores, temos ${soma}.<br>
                        A média dos valores digitaos é ${media}.`
}
function alertar(){
    alert('Valor inválido ou encontrado na lista');
}
function somar(vetor){
    let soma = 0;
    for(let i=0; i<vetor.length;i++){
        soma+=Number(vetor[i]);
    }
    return soma;
}
function calculaMaior(vetor){
    let maior=0;
    for(let i=0; i<vetor.length;i++){
        if(v[i] > maior)
            maior=v[i];
    }
    return maior;
}
function calculaMenor(vetor){
    let menor=101;
    for(let i=0; i<vetor.length;i++){
        if(v[i] < menor)
            menor=v[i];
    }
    return menor;
}

