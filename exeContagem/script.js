function contar(){
    let txtIni = document.getElementById('inicio');
    let txtFim = document.getElementById('fim');
    let txtPasso = document.getElementById('passo');
    let textoContagem = "Contando: <br>";
    if(txtIni.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0){
        textoContagem = "Impossível contar!";
    }
    else{
        let inicio = Number(txtIni.value);
        let fim = Number(txtFim.value);
        let passo = Number(txtPasso.value);
        if(passo === 0){
            alert('Passo inválido! Considerando PASSO 1');
            passo=1;
        }
        if(inicio <fim){
            for(let i=inicio; i<=fim; i+=passo){
                textoContagem += `${i} 👉 `;
            }
        }
        else{
            for(let i=inicio; i>=fim; i-=passo){
                textoContagem += `${i} 👉 `;
            } 
        }
        textoContagem += `🏁`;
    }
    let contagem = document.getElementById('msg');
    contagem.innerHTML = textoContagem;
}