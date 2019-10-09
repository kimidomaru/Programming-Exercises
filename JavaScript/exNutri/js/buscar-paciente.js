let botaoAdicionar = document.querySelector('#buscar-paciente');

botaoAdicionar.addEventListener("click", function(){
    console.log('Buscando paciente');

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        let erroAjax = document.querySelector('#erro-ajax');
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            let resposta = xhr.responseText;
            console.log(resposta);
            console.log(typeof resposta);

            let pacientes = JSON.parse(resposta);
            
            pacientes.forEach( function(paciente){
                adicionarPacienteNaTabela(paciente);
            });
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});