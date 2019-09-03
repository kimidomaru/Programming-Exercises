function calcular(){
    let num = document.getElementById('numero');
    let tab = document.getElementById('selTab');
    if(num.value.length == 0){
        window.alert('Digite um número');
    }
    else{
        tab.innerHTML = '';
        let n = Number(num.value);
        for(let i=1;i<=10;i++){
            let item = document.createElement('option');
            item.text = `${n} x ${i} = ${n*i}`;
            item.value = `tab${i}`;
            tab.appendChild(item);
        }
    }
}