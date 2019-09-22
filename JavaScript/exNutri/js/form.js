let botaoAdd = document.querySelector('#adicionar-paciente');
botaoAdd.addEventListener("click", function(){
    event.preventDefault(); 
    let form = document.querySelector("#form-adiciona");

    //pegando informações do formulario
    let paciente = obterPacienteForm(form);

    //criando tr e td do paciente
    let pacienteTr = montaTr(paciente);
    
    //adicionando paciente à tabela
    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    
    form.reset();   
});

function obterPacienteForm(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
